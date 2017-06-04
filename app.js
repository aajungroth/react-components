var Mustard = () => (
  <li>"mustard"</li>
);

var Watermelon = () => (
  <li>"watermelon"</li>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      bold: false
    };
  }

  onGroceryItemHoverOver() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      'fontWeight': this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onGroceryItemHoverOver.bind(this)}>{this.props.groceryItem}</li>
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
