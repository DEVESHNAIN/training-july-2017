import React, { Component } from 'react';

 export  default class Input extends Component {
   constructor (props) {
     super(props);
     this.state = {valid: false, message:""}
   }
   handleValidate = (e) => {
   switch (e.target.name) {
     case "name":  if( /^[a-zA-Z ]+$/.test(e.target.value)){
                   this.setState({valid:true, message:"Valid"});
                   return true;
                 }
                   this.setState({valid:false, message:"Invalid"});
                   e.target.focus();
                   return false;

   case "email":  if( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
                   this.setState({valid:true,message:"valid"});
                   return true;
                 }
                  this.setState({valid:false, message:"invalid"});
                   e.target.focus();
                   return false;

   case "contactNo":   if(/^\d{10}$/.test(e.target.value)) {
                         this.setState({valid:true, message:"valid"});
                         return true;
                       }
                         this.setState({valid:false, message:"Invalid"});
                         e.target.focus();
                         return false;

   case "no":  if (/^[0-9]*$/.test(e.target.value)) {
                 this.setState({valid:true, message:"valid"});
                 return true;
               }
               this.setState({valid:false, message:"Invalid"});
               e.target.focus();
               return false;
     default:

   }
   }
   render() {
     return (<span><input type={this.props.type} name={this.props.name} onChange={this.handleValidate} placeholder={this.props.placeholder} ref={(input) => { this.input = input; }} />
     <br></br> &nbsp; &nbsp;&nbsp; {this.state.message}</span>);
}
}
