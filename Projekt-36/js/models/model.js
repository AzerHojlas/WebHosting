class Model {
  constructor(books = { shelf: [], wish: [], cart: [] }, currentBook = null) {
    this.observers = [];
    this.books = books;
    this.setCurrentBook(currentBook);
  }

  setBooks(books) {
    this.books = [...books];
    this.notifyObservers();
  }

  addObserver(callback) {
    this.observers = [...this.observers, callback];
  }

  removeObserver(callback) {
    this.observers = this.observers.filter((d) => d !== callback);
  }

  notifyObservers() {
    this.observers.forEach((cb) => {
      setTimeout(() => {
        try {
          cb();
        } catch (e) {
          console.log("Error occured: ", e);
        }
      }, 0);
    });
  }

  /*
  notifyObservers() {
    this.observers.forEach((cb) => {
      cb();
    });
  }
  */

  /**
   * If the length of the created array is one the dish already exists in the menu,
   * key should be a string
   */
  add(book, key) {
    const isAdded = this.books[key].filter((d) => d.id === book.id).length;
    if (isAdded) return;

    this.books[key] = [...this.books[key], book];
    this.notifyObservers();
  }

  remove(book, key) {
    const isAdded = this.books[key].filter((d) => d.id === book.id).length;
    if (!isAdded) return;

    this.books[key] = this.books[key].filter((d) => d.id !== book.id);
    this.notifyObservers();
  }

  setCurrentBook(id) {
    const hasChanged = this.currentBook !== id;
    if (!hasChanged) return;
    this.currentBook = id;
    this.currentBookDetails = null;
    this.currentBookError = null;
    this.notifyObservers();
    if (this.currentBook)
      GoogleBooks.getDishDetails(this.currentBook)
        .then((data) => {
          if (this.currentBook === id) {
            this.currentBookDetails = data;
            this.notifyObservers();
          }
        })
        .catch((error) => {
          if (this.currentBook === id) {
            this.currentBookError = error;
            this.notifyObservers();
          }
        });
  }
}
