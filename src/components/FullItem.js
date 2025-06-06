import React from 'react'
import { FiPlus } from "react-icons/fi";


function FullItem(props) {
  return (
    <div className="full-item-card">
        <img src={props.fullItem.thumbnail} alt={props.fullItem.title} onClick={()=>{
        props.onShow()
        }}/>
        <h3>{props.fullItem.title}</h3>
        <p>{props.fullItem.price} $</p>
        <FiPlus className="add-to-cart" onClick={()=>{
          props.onAdd(props.fullItem)
        }}/>
      </div>
  )
}

export default FullItem