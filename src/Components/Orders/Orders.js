import React from 'react'
import ReactDOM from 'react-dom'
import OrderComponent from './OrderComponent'
import './Orders.css'

class Orders extends React.Component{
    
    constructor(){

        super();
        this.state = {items:[{name:"pad thai", prepTime: "20 min", category:"Asian"}, {name:"bigos", prepTime:"3 days", category:"Polish"}, {name:"soup", prepTime:"30 min", category:"Italian"}, {name:"soup", prepTime:"30 min",category:"Italian"}, {name:"soup", prepTime:"30 min",category:"Italian"}]}
    }

    render(){
        const newItems = this.state.items.map(item=>{
            if(item.category ===this.props.category)
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