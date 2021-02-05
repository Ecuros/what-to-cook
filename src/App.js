import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Orders from './Components/Orders/Orders';
import SignIn from './Components/SignIn/SignIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import React from 'react'



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      category:"Polish", 
      categories:[{name:"Asian"}, {name:"Italian"}, {name:"Polish"}]
    }
  }
  
  handleChange = (value) =>{
    this.setState({category: value});
  }

  render () {
    return(
      <div className="App">    
        <Router> 
        <Header className="header" category={this.state.category} categories={this.state.categories} handleChange={this.handleChange}/>
          <Switch>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>             
          <Orders path="/" component={Orders} category={this.state.category} categories={this.state.categories}/>
          </Switch>        
        </Router>
      </div>
     )
    }
}

export default App;
