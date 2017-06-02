var Mustard = () => (
  <li>"mustard"</li>
);

var Watermelon = () => (
  <li>"watermelon"</li>
);

var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
    <li>{props.groceryItems[2]}</li>
  </ul>
);

var GroceryList = () => (
  <GroceryListItem groceryItems =
    {['watermelon', 'mustard', 'lentils']}/>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
