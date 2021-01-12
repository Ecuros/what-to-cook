import React from 'react'
import ReactDOM from 'react-dom'

function HeaderComponent (props){  
    const Items = props.categories;
    //[{name:"Asian", id:0}, {name:"Italian",id:1}, {name:"French",id:2}] //placeholder
    return (
        <header className="App-header">
            <img className ="App-logo" src="logo192.png"/>
            <h3>What To Cook</h3>
            <p>This is a header</p>
            <select onChange={props.handleChange}>
                {Items.map((item,index)=>{
                    return (
                        <option value={item.name}>{item.name}</option>
                    )
                })}
            </select>
            <button className="Navbar-button">Sign up</button>
            <button className="Navbar-button">Sign in</button>
        </header>
    )
}
export default HeaderComponent