import React, { Component } from 'react';
import HorseList from "../containers/horsesList";

export default class App extends Component {
  render() {
    console.log(this.state);
    return (
      <div><HorseList /></div>
    );
  }
}
