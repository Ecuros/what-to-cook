import React from 'react'
import './Orders.css'

function OrderComponent(props){
    
    return(
        <div className="Order">
            <img src="logo192.png"/>
            <br/>
            <h3>{props.item.name}</h3>
            {props.item.prepTime}
            <br/>
            {props.item.category}
        </div>
    )
}

export default OrderComponent;