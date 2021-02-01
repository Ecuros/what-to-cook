import React from 'react'
import ReactDOM from 'react-dom'
import './Header.css'
import {Link} from 'react-router-dom';

function HeaderComponent (props){  
    const Items = props.categories;
    //[{name:"Asian", id:0}, {name:"Italian",id:1}, {name:"French",id:2}] //placeholder
    return (
        <header className="App-header">
            <img className ="App-logo" src="logo192.png"/>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
                <h3>What To Cook</h3>
            </Link>                        
            <select onChange={props.handleChange}>
                {Items.map((item,index)=>{
                    return (
                        <option value={item.name}>{item.name}</option>
                    )
                })}
            </select>
            <div className = "Navbar-buttons">
                <Link to='/signup'>
                    <button className="Navbar-button">Sign up</button>
                </Link>
                <Link to='/signin'>
                    <button className="Navbar-button">Sign in</button>
                </Link>
            </div>
            
        </header>
    )
}
export default HeaderComponent