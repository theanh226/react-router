import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    var { match } = this.props;
    console.log(match);
    return (
      <div className="Container">
        <h2 className="text-warning">This is Deteil Products</h2>
        <h3 className="text-danger">{match.params.slug}</h3>
      </div>
    );
  }
}

export default ProductItem;
