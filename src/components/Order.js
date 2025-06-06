import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";


function Order(props) {
  return (
    <div className="order-card">
        <img src={props.order.thumbnail} alt={props.order.title} />
        <h3>{props.order.title}</h3>
        <p>{props.order.price} $</p>
        <TiDeleteOutline className="remove-btn" onClick={()=>{
            props.onDelete(props.order.id)
        }}/>
      </div>
  )
}

export default Order