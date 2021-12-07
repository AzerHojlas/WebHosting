function SidebarView(props) {
  return (
		<div class="sidebar-icons">
			<a
				class="sidebar-specificIcons"
				href=""
				onClick={(e) => {
					e.preventDefault();
					window.location.hash = "#search";
				}}
			>
				<img src="mycollection/png/search.png"></img>
			</a>
			<a
				class="sidebar-specificIcons"
				href=""
				onClick={(e) => {
					e.preventDefault();
					window.location.hash = "#bookshelf";
				}}
			>
				<img src="mycollection/png/books.png"></img>
			</a>
			<a
				class="sidebar-specificIcons"
				href=""
				onClick={(e) => {
					e.preventDefault();
					window.location.hash = "#wishlist";
				}}
			>
				<img src="mycollection/png/heart.png"></img>
			</a>
			<a
				class="sidebar-specificIcons"
				href=""
				onClick={(e) => {
					e.preventDefault();
					window.location.hash = "#shoppingcart";
				}}
			>
				<img src="mycollection/png/shopping-cart.png"></img>
			</a>
			<a href="">
				<img src="mycollection/png/exit.png"></img>
			</a>
		</div>
	);
}
