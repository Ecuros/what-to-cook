import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
    return(
        <div className="signin-div">
            <h2>Create an account</h2>
            <label>Email:</label>
            <input type="email"/>
            <label>Password:</label>
            <input type="password"/>
            <label>Confirm password:</label>
            <input type="passwprd"/>
            <button className="login-button">Confirm</button>
        </div>
    )
}

export default SignUp;