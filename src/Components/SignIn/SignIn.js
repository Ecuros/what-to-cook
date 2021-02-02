import react from 'react'
import './SignIn.css'
import '../../App.css'


function SignIn () {
return (
        <div className="signin-div">
        <h2>Sign in</h2>
        <label>Email:</label>
        <input type="text"/> 
        <label>Password:</label>
        <input type="password" />
        <button class="login-button">Confirm</button>
    </div>
    
)
}

export default SignIn;