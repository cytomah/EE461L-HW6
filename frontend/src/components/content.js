import axios from 'axios'
import React, {useEffect, useState} from 'react';
 
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {nameValue: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        axios.get('/${this.state.value}').then(response =>{this.setState({nameValue: response.data.result})}).catch(error => {
            console.log(error)
        })
 
        event.preventDefault();
    }
   
 
       
   
     render() {
       return(
            <form onSubmit={this.handleSubmit}>
                <p>
                <label>First Name
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
            </p>
            <p>
                <input type="submit" value="Submit" />
                <h1>{this.state.nameValue}</h1>
            </p>
            </form>
           
       );
     }
    }
 
export default Content;
