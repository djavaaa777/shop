import React from 'react'
import { FiPlus } from "react-icons/fi";


function Product(props) {
  return (
    <div className="product-card">
    <img src={props.product.thumbnail} alt={props.product.title} onClick={()=>{
      props.onShow(props.product)
    }}/>
    <h3>{props.product.title}</h3>
    <p>{props.product.price} $</p>
    <FiPlus className="add-to-cart" onClick={()=>{
      props.onAdd(props.product)
    }}/>
  </div>
  )
}

export default Product