import React, { Component } from 'react'
import Product from "./Product"

export default class Products extends Component {
  render() {
    return (
      <div className="products">
        {this.props.products.map(product => (
          <Product product={product} key={product.id} onAdd={this.props.onAdd} onShow={this.props.onShow}/>
        ))}
      </div>
    )
  }
}

