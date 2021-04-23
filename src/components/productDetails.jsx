import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    // this.props.history.push('/products'); // we can click on back button in browser and see the previous page
    this.props.history.replace('/products'); //we can implement this in login pages
  };

  render() {
    return (
      <div>
        {/* <h1>{`Product Details - ${this.props.match.params.id}`} </h1> */}
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
