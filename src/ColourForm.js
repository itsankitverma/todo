import React, { Component } from 'react'

var name = "Ankit";
var dates = new Date().getHours();
const sty = {};
// console.log(dates)
var greet = "";
if(dates >= 1 && dates <= 12 ){
  greet = "Good Morning";
  sty.color = 'blue';
} else if (dates > 12 && dates <= 3) {
  greet = "Good Afternoon";
  sty.color = 'red';
} else if (dates > 3 && dates <= 8) {
  greet = "Good Evening";
  sty.color = 'orange';
} else if (dates < 25) {
  greet = "Good Night";
  sty.color = 'indigo';
}


export default class ColourForm extends Component {
  render() {
    return (
      <div className="division">
         <h1>Hello {name}, <span style={sty}>{greet}</span></h1>
      </div>
    )
  }
}
