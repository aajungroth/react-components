var Mustard = () => (
  <li>"mustard"</li>
);

var Watermelon = () => (
  <li>"watermelon"</li>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList groceryItems=
  {['mustard', 'watermelon', 'lentis']}/>,
  document.getElementById("app"));
