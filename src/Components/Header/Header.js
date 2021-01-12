import React from 'react'
import HeaderComponent from './HeaderComopnent';

class Header extends React.Component {

    constructor(){
        super();
        this.state={
            categories: [{name:"Asian"}, {name:"French"}]
        }
    }
    componentDidMount(){
        //fetch categories from API
        console.log("fetching data");
    }
    handleChange(event){
        console.log("selection changed to " + event.target.value);
    }

    render(){
        return (
            <HeaderComponent categories={this.state.categories} handleChange={this.handleChange}/>
        )
    }
}
export default Header