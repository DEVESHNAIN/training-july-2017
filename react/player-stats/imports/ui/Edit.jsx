import React, { Component } from 'react';
import Input from './Input.jsx';
import Label from './Label.jsx';
import SelectBox from './select.jsx';
import Submit from './submit.jsx';
import TextArea from './TextArea.jsx';
import RadioGroup from './RadioGroup.jsx';

import { Players } from '../api/player.js';

export  default class Edit extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data:'',
      loading:true,
      firstName : '',
      lastName: '',
      email:'',
      dob:'',
      birthPlace:'',
      contactNo:'',
      about:'',
      role:'',
      run:'',
      wickets:'',
      gender:''
    }
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

      arr.forEach((item) => {
        if (item.checked) {
          gender=item.value;
        }
      })
      let _id=this.props.match.params._id;
      Meteor.call('player.update',_id,first,last,gender,dob,birthPlace,email,contactNo,area,role,run,wickets ,function(err,res){
        if(err) console.error(err);
        console.log("successfully submitted");
        window.alert("submitted successfully")
      });
    }

  form = () => {
    let _id=this.props.match.params._id;
    let data = Players.find({_id}).fetch();
    const element = <form onSubmit={this.handleSubmit}>
      <Label text="First Name : " />
      <Input  name="name" value={this.state.firstName}  placeholder="enter your first name" ref={(input) => { this.firstName = input; }}/>
      <br/><br/>
      <Label text="Last Name : " />
      <Input  name="name" value={this.state.lastName} placeholder="enter your last name"  ref={(input) => { this.lastName = input; }}/>
      <br/><br/>
      <RadioGroup ref={(input) => { this.radiobutton = input; }} />
      <br/><br/>
      <Label text="D.O.B : " /> &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;
      <Input type="date" name="dob" value={this.state.dob} ref={(input) => { this.dob = input; }}/> <br/><br/>
      <Label text="profile pic : " />&nbsp;
      <Input type="file" ref={(input) => { this.file = input; }}/>
      <br/><br/>
      <Label text="Birth Place : " />
      <Input  name="birthPlace" value={this.state.birthPlace} placeholder="enter your bith place" ref={(input) => { this.birthPlace = input; }}/>
      <br/><br/>
      <Label text="email : " /> &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;
      <Input  name="email" value={this.state.email} placeholder="enter your email address"  ref={(input) => { this.email = input; }} />
      <br/><br/>
      <Label text="contact no : " />&nbsp;
      <Input  name="contactNo"  value={this.state.contactNo} placeholder="enter your contact no"  ref={(input) => { this.contactNo = input; }}/>
      <br/><br/>
      <Label text="A short note : " />  &nbsp;&nbsp;&nbsp;
      <TextArea  value={this.state.about} ref={(input) => { this.area = input; }} />
      <br/><br/>
      <Label text="Your' s Role : " /> &nbsp; &nbsp;
      <SelectBox value={this.state.role} ref={(input) => { this.role = input; }}/>
      <br/><br/>
      <Label text="Runs : " /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Input  name="no"  placeholder="enter total run scored"  value={this.state.run} ref={(input) => { this.run = input; }}/>
      <br/><br/>
      <Label text="Wickets : " /> &nbsp; &nbsp; &nbsp;
      <Input  name="no" placeholder="enter wickets taken" value={this.state.wickets} ref={(input) => { this.wickets = input; }}/>
      <br/><br/> <br/><br/>&nbsp; &nbsp; &nbsp;
      <Submit buttonText="click to submit" />
      <br/><br/>
    </form>;

    return element;
  }
  componentWillMount= () =>{
    let _id=this.props.match.params._id;
    //let data = Players.find({_id}).fetch();
    Meteor.call('player.fetchById',_id, (err, data) => {
      if(err) console.log(error);
      else{
        console.log("inside callback");
        console.log(data);
        this.setState({  firstName : data.firstName,
          lastName: data.lastName,
          email:data.email,
          dob:data.dob,
          birthPlace:data.birthPlace,
          contactNo:data.contactNo,
          about:data.about,
          role:data.role,
          run:data.run,
          wickets:data.wickets,
          gender:data.gender,
          loading:false
        })
      }
  });
}
  render= () => {
    if(this.state.loading){
      return <div>loading</div>
    }
    return (<div>{this.form()}</div>);
  }
}
