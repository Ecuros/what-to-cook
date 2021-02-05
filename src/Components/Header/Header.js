import React from 'react'
import HeaderComponent from './HeaderComopnent';
import './Header.css'

class Header extends React.Component {

    constructor(props){
        super();
        this.state={
            category: props.category,
            categories: props.categories         
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        //fetch categories from API
        console.log("fetching data");
        
    }
    handleChange(event){
        this.props.handleChange(event.target.value);
        //console.log("selection changed to " + event.target.value);
        //console.log(this.props.categories)
    }

    render(){
        return (
            <HeaderComponent categories={this.state.categories} handleChange={this.handleChange}/>
        )
    }
}
export default Header