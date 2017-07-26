import React, { Component } from 'react';
import Input from './Input.jsx';
import Label from './Label.jsx';
import RadioGroup from './RadioGroup.jsx';
import TextArea from './TextArea.jsx';
import SelectBox from './select.jsx';
import Submit from './submit.jsx';
import { Tasks } from '../api/tasks.js';

/*class which render the form on the page */
export  default class App extends Component {
   constructor(props) {
        super(props);
        this.form=this.form.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    /* handler for submitting the form
    argument passed - event for submit of form
    */
    handleSubmit(event) {
      event.preventDefault();
      let first= this.firstName.input.value;
      let last=this.lastName.input.value;
      let email= this.email.input.value;
      let contactNo=this.contactNo.input.value;
      let area=this.area.area.value;
      let car=this.car.car.value;
      let gender='';
      let arr=[this.radiobutton.rb1,this.radiobutton.rb2,this.radiobutton.rb3];

      console.log('first name is '+first);
      console.log('last name is '+last);
      console.log("email address is "+email);
      console.log("contact no is "+ contactNo);
      console.log("about you :"+ area);
      console.log("you have "+car);
      arr.forEach((item) => {
        if (item.checked) {
          gender=item.value;
          console.log("your's gender is "+ item.value );
        }
      })
      /* this will insert form data into database*/
      Tasks.insert({
        firstName: first,
        lastName: last,
        gender,
        email,
        contactNo,
        car,
        about:area,
        createdAt: new Date()
      });

      this.firstName.input.value='';
      this.lastName.input.value='';
      this.email.input.value='';
      this.contactNo.input.value='';
      this.area.area.value='';
    }
    /*
    function form to create  form element which can be rendered
    */
   form() {
     const element = <form onSubmit={this.handleSubmit}>
       <Label text="First Name : " />
       <Input type="text" placeholder="enter your first name" ref={(input) => { this.firstName = input; }}/>

       <br/><br/>
       <Label text="Last Name : " />
       <Input type="text" placeholder="enter your last name" ref={(input) => { this.lastName = input; }}/>
       <br/><br/>
       <RadioGroup ref={(input) => { this.radiobutton = input; }} />
       <br/><br/>
       <Label text="email : " /> &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;
       <Input type="email" placeholder="enter your email address" ref={(input) => { this.email = input; }} />
       <br/><br/>
       <Label text="contact no : " />
       <Input type="number" placeholder="enter your contact no" ref={(input) => { this.contactNo = input; }}/>
       <br/><br/>
       <Label text="Your' s car : " /> &nbsp; &nbsp; &nbsp;
       <SelectBox ref={(input) => { this.car = input; }}/>
       <br/><br/>
       <Label text="About you: " />&nbsp; &nbsp;&nbsp; &nbsp;
       <TextArea ref={(input) => { this.area = input; }} />
       <br/><br/>
       <br/><br/>&nbsp; &nbsp; &nbsp;
       <Submit buttonText="click to submit" />
       <br/><br/>
     </form>;

     return element;
   }
   /*
   this function will render the form element which is returned by form method
   */
   render() {
     return (<div>{this.form()}</div>);
   }
 };
