import React, { useState } from 'react'
import { LuShoppingBasket } from "react-icons/lu";
import Order from "./Order"
import { Link } from 'react-router-dom'



function Header(props) {
  let [cartOpen,setCartOpen]=useState(false)
  let totalSum=0
  props.orders.forEach(el=>totalSum+=parseFloat(el.price))
  const handleOrder=()=>{
    fetch(`${process.env.REACT_APP_API_URL}/ordered`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        items:props.orders,
        total:totalSum.toFixed(2)
      })
    }).then(res=>res.json()).then(data => {
      if (data.success) {
        alert("Your order has been successfully placed!");
        props.onClear();
      } else {
        alert("Error while placing your order.");
      }
    }).catch(err => {
      console.error(err);
      alert("Error connecting to server!");
    })
  }
  return (
    <header className="header">
        <h2>DailyGoods</h2>
        <ul>
            <li><LuShoppingBasket onClick={()=>{setCartOpen(cartOpen=!cartOpen)}} className={`shop-cart-icon ${cartOpen && 'active'}`} /></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        {cartOpen && (
  <div className="shop-cart">
    {props.orders.length > 0 ? (
      <div>
      {props.orders.map(el => (
        <Order key={el.id} order={el} onDelete={props.onDelete}/>
      ))}
      <div className="cart-total">Сумма:{totalSum.toFixed(2)}$</div>
      <button onClick={handleOrder} className="order-btn">Оформить заказ</button>
    </div>
    ) : (
      <p className="empty-cart">Ваша корзина пуста</p>
    )}
  </div>
)}

    </header>
  )
}

export default Header