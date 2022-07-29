import React, {Component} from "react";
import "../assets/shopping.css"

class ShoppingList extends React.Component {



  render() {
    return (
      <div>
        <h3>Lista do {this.props.name}</h3>
        <ul className="red">
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
          <li>aaaaa</li>
        </ul>
      </div>

    );
  }
}

export default ShoppingList
