import React, { Component } from 'react';
import Input from './Input.jsx';
import Label from './Label.jsx';
import SelectBox from './select.jsx';
import Submit from './submit.jsx';
import TextArea from './TextArea.jsx';
import RadioGroup from './RadioGroup.jsx';

import { Player } from '../api/player.js';

export  default class AddPlayer extends Component {
  constructor (props) {
    super(props);
  }

    handleSubmit = (event) => {
      event.preventDefault();
      let first = this.firstName.input.value;
      let last = this.lastName.input.value;
      let email = this.email.input.value;
      let dob = this.dob.input.value;
      let birthPlace = this.birthPlace.input.value;
      let contactNo = this.contactNo.input.value;
      let area = this.area.area.value;
      let role = this.role.role.value;
      let run = this.run.input.value;
      let wickets = this.wickets.input.value;
      let gender='';
      let arr=[this.radiobutton.rb1,this.radiobutton.rb2,this.radiobutton.rb3];

      console.log('first name is '+first);
      console.log('last name is '+last);
      console.log("email address is "+email);
      console.log("contact no is "+ contactNo);
      console.log("about you :"+ area);
      console.log("you are a " +role);
      console.log(birthPlace);
      console.log(run);
      console.log(wickets);
      console.log(dob);
      arr.forEach((item) => {
        if (item.checked) {
          gender=item.value;
          console.log("your's gender is "+ item.value );
        }
      })
      /* this will insert form data into database*/
      Player.insert({
        firstName: first,
        lastName: last,
        gender,
        dob,
        birthPlace,
        email,
        contactNo,
        about:area,
        run,
        wickets,
        createdAt: new Date()
      });

      this.firstName.input.value='';
      this.lastName.input.value='';
      this.email.input.value='';
      this.contactNo.input.value='';
      this.area.area.value='';
      this.dob.input.value='';
      this.birthPlace.input.value='';
      this.role.role.value='';
      this.run.input.value='';
      this.wickets.input.value='';
  }

  form = () => {
    const element = <form onSubmit={this.handleSubmit}>
      <Label text="First Name : " />
      <Input type="text" placeholder="enter your first name" ref={(input) => { this.firstName = input; }}/>
      <br/><br/>
      <Label text="Last Name : " />
      <Input type="text" placeholder="enter your last name" ref={(input) => { this.lastName = input; }}/>
      <br/><br/>
      <RadioGroup ref={(input) => { this.radiobutton = input; }} />
      <br/><br/>
      <Label text="D.O.B : " /> &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;
      <Input type="date" ref={(input) => { this.dob = input; }}/> <br/><br/>
      <Label text="profile pic : " />&nbsp;
      <Input type="file" ref={(input) => { this.file = input; }}/>
      <br/><br/>
      <Label text="Birth Place : " />
      <Input type="text" placeholder="enter your bith place" ref={(input) => { this.birthPlace = input; }}/>
      <br/><br/>
      <Label text="email : " /> &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;
      <Input type="email" placeholder="enter your email address" ref={(input) => { this.email = input; }} />
      <br/><br/>
      <Label text="contact no : " />&nbsp;
      <Input type="number" placeholder="enter your contact no" ref={(input) => { this.contactNo = input; }}/>
      <br/><br/>
      <Label text="A short note : " />  &nbsp;&nbsp;&nbsp;
      <TextArea ref={(input) => { this.area = input; }} />
      <br/><br/>
      <Label text="Your' s Role : " /> &nbsp; &nbsp;
      <SelectBox ref={(input) => { this.role = input; }}/>
      <br/><br/>
      <Label text="Runs : " /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Input type="number" placeholder="enter total run scored" ref={(input) => { this.run = input; }}/>
      <br/><br/>
      <Label text="Wickets : " /> &nbsp; &nbsp; &nbsp;
      <Input type="number" placeholder="enter wickets taken" ref={(input) => { this.wickets = input; }}/>
      <br/><br/> <br/><br/>&nbsp; &nbsp; &nbsp;
      <Submit buttonText="click to submit" />
      <br/><br/>
    </form>;

    return element;
  }
  render= () => {
    return (<div>{this.form()}</div>);
  }


}
