function SearchFromView(props) {
  /*This view shows a search view*/
  return (
    <div>
      {/* onInput for continuous update and onChange for an update when the enter
      key is pressed in Vue */}
      <input
        onInput={(evt) => props.onText(evt.target.value)}
        onChange={() => props.onSearch()}
      ></input>
      <select onChange={(evt) => props.onBookGenre(evt.target.value)}>
        <option>Choose</option>
        {props.genres.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
        ;
      </select>
      <button onClick={() => props.onSearch()}>Search</button>
    </div>
  );
}

function eventPrinter(evt) {
  console.log(evt.target.value);
}

/*Denna vy visar resultaten av en sökning*/
function SearchResultsView(props) {
  return (
    <div class="searchResult">
      {props.searchResults.map((result) => {
        return (
          <span class = "searchView-showResults "
            key={result.id}
            /*Tar oss till details-views */
            onClick={() => {
              props.bookChosen(result.id);
              window.location.hash = "#details";
            }}
          >
            <img
              src={
                result.volumeInfo.imageLinks
                  ? result.volumeInfo.imageLinks.thumbnail
                  : "mycollection/png/no-image.jpg"
              }
              height="100"
            />
            <span title={result.volumeInfo.title}>
              {title(result.volumeInfo.title)}
            </span>
          </span>
        );
      })}
    </div>
  );
}

function title(string) {
  const sub = string.substring(50, string.length);
  const i = sub.indexOf(" ") < 0 ? sub.length : sub.indexOf(" ");
  return string.length > 50
    ? string.substring(0, 50) + sub.substring(0, i) + "..."
    : string;
}
