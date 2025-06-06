import React, { useState, useEffect } from 'react'
import { FiPlus } from "react-icons/fi"

function DayDeal(props) {
  const [dealProduct,setDealProduct]=useState(0)
  const[timeLeft,setTimeLeft]=useState(43200)

  const pickRandomProduct=()=>{
    const randomIndex=Math.floor(Math.random()*props.products.length)
    setDealProduct(props.products[randomIndex])
  }
  useEffect(()=>{
    if(props.products.length>0 && !dealProduct){
      pickRandomProduct()
    }
    const timer=setInterval(()=>{
      setTimeLeft(prevTime=>{
        if(prevTime<= 1){
          pickRandomProduct()
          return 43200
        }
        return prevTime-1
      })
    },1000)
    return () => clearInterval(timer)
  },[props.products, dealProduct])

  const discountedPrice=+(dealProduct.price*0.8).toFixed(2)
  const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  
  return (
    <div className="deal-of-the-day">
      <h2>🔥 Скидка дня!</h2>
      <div className="product-card">
        <img src={dealProduct.thumbnail} alt={dealProduct.title} onClick={() => props.onShow({ ...dealProduct, price: discountedPrice })}/>
        <h3>{dealProduct.title}</h3>
        <p>
          <span className="old-price">{dealProduct.price} $</span> 
          <span className="new-price">{discountedPrice} $</span>
        </p>
        <p className="timer">До конца акции: {hours}:{minutes}:{seconds}</p>
        <FiPlus className="add-to-cart" onClick={() => props.onAdd({ ...dealProduct, price: discountedPrice })}
        />
      </div>
    </div>
  )
}

export default DayDeal
