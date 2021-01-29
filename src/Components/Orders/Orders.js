import React from 'react'
import ReactDOM from 'react-dom'
import OrderComponent from './OrderComponent'
import './Orders.css'

class Orders extends React.Component{

     
    constructor(){
        super();
        this.state = {items:[{name:"pad thai", prepTime: "20 min"}, {name:"bigos", prepTime:"3 days"}, {name:"soup", prepTime:"30 min"}, {name:"soup", prepTime:"30 min"}, {name:"soup", prepTime:"30 min"}]}
    }

    render(){
        const newItems = this.state.items.map(item=>{
            return <OrderComponent item={item} />
        })
        return(
            <div className="Orders-holder">
                {newItems}
            </div>
            
        )
    }
}
export default Orders