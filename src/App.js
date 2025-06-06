import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Prasentation from './components/Prasentation'
import Products from './components/Products'
import FullItem from './components/FullItem'
import DayDeal from './components/DayDeal'
import About from './components/About'
import Contact from './components/Contact'

import axios from 'axios'

const baseURL = "https://dummyjson.com/products/category/groceries"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      products: [],
      showFullItem: false,
      fullItem: {}
    }
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.showFullItem = this.showFullItem.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount() {
    axios.get(baseURL)
      .then(res => {
        this.setState({ products: res.data.products });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Router>
        <Header orders={this.state.orders} onDelete={this.deleteFromCart} onClear={this.clearCart}/>

        <Routes>
          <Route path="/" element={
            <>
              <Prasentation />
              <Products products={this.state.products} onAdd={this.addToCart} onShow={this.showFullItem} />
              {this.state.showFullItem && <div className="modal-overlay"><FullItem fullItem={this.state.fullItem} onAdd={this.addToCart} onShow={this.showFullItem} /></div>}
              <DayDeal products={this.state.products} onAdd={this.addToCart} onShow={this.showFullItem} />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    )
  }

  addToCart(product) {
    let isInArray = false
    this.state.orders.forEach(order => {
      if (order.id === product.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, product] })
    }
  }

  deleteFromCart(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  showFullItem(fullItem) {
    this.setState({ fullItem: fullItem })
    this.setState({ showFullItem: !this.state.showFullItem })
  }
  clearCart() {
    this.setState({ orders: [] });
  }
  
}
