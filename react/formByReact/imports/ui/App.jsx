import React, { Component } from 'react';

 export  default class App extends Component {
   constructor(props) {
        super(props);
        this.form=this.form.bind(this);
    }
   form() {
    // console.log(Input());
     const element = <form>
       <span>
         <Label text="First Name : " />
         <Input type="text" placeholder="enter your first name" />
      </span><br/><br/>
      <span>
        <Label text="Last Name : " />
        <Input type="text" placeholder="enter your last name" />
      </span><br/><br/>
      <span>

        <RadioGroup />
      </span><br/><br/>
      <span>
        <Label text="email : " /> &nbsp; &nbsp;  &nbsp; &nbsp;&nbsp;
        <Input type="email" placeholder="enter your email address" />
     </span><br/><br/>
     <span>
       <Label text="contact no : " />
       <Input type="number" placeholder="enter your contact no" />
     </span><br/><br/>
     <span>
       <Label text="Your' s car : " /> &nbsp; &nbsp; &nbsp;
       <SelectBox />
     </span><br/><br/>
     <span>
       <Label text="About you: " />&nbsp; &nbsp;&nbsp; &nbsp;
       <TestArea/>
     </span><br/><br/>
     <span> <br/><br/>&nbsp; &nbsp; &nbsp;
       <Submit buttonText="click to submit" />
     </span><br/><br/>
  </form>;
     return element;
   }
   render() {
     return (<div>{this.form()}</div>);
   }
 };

const Input = (props) => {
   return (<input type={props.type} placeholder={props.placeholder}/>);
}
const Label = (props) => {
   return (<label>{props.text}</label>);
}
const TestArea = () => {
  return (<textarea></textarea>)
}
const SelectBox =(props) => {
  return (<select>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>);
}
const RadioGroup = () => {
  return ( <div><input type="radio" name="gender" value="male" /> Male<br/>
  <input type="radio" name="gender" value="female"/> Female<br/>
  <input type="radio" name="gender" value="other"/> Other </div> )
}
const Submit = (props) => {
  return (<button type="submit" >{props.buttonText}</button>)
}
