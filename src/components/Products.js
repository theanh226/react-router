import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { NavLink, Route } from "react-router-dom";
class Products extends Component {
  render() {
    var ProductsList = [
      {
        id: 1,
        slug: "Lenovo",
        name: "Lenove ThinkPad (13 inch)",
        price: 1300
      },
      {
        id: 2,
        slug: "Apple",
        name: "Macboock Pro 2018 (15 inch)",
        price: 1700
      },
      {
        id: 3,
        slug: "HP",
        name: "HP Pro 2018 (15 inch)",
        price: 2300
      }
    ];

    return (
      <div className="Container">
        <h2 className="text-warning mt-2 mb-2">This is Products Page</h2>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>{this.showProduct(ProductsList)}</tbody>
        </table>
        <div className="">
          <Route path="/products/:slug" component={ProductItem} />
        </div>
      </div>
    );
  }
  showProduct = products => {
    var { match } = this.props;
    var result = null;
    var url = match.url;
    if (products.length) {
      result = products.map((product, index) => {
        return (
          <tr key={index}>
            <th scope="row">{product.id}</th>{" "}
            <td>
              <NavLink to={`${url}/${product.slug}`}>{product.name}</NavLink>
            </td>
            <td>{product.price}$</td>
          </tr>
        );
      });
    }

    return result;
  };
}

export default Products;
