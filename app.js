var Mustard = () => (
  <li>"mustard"</li>
);

var Watermelon = () => (
  <li>"watermelon"</li>
);

var GroceryList = () => (
  <ul>
    <Mustard />
    <Watermelon />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
