import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Orders from './Components/Orders/Orders';
import SignIn from './Components/SignIn/SignIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';



function App() {
  return (
    <div className="App">    
      <Router> 
      <Header className="header"/>
        <Switch>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>             
        <Orders path="/" component={Orders}/>
        </Switch>        
      </Router>
    </div>
  );
}

export default App;
