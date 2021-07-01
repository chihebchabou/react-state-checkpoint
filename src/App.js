import React, { Component } from 'react';
import Profile from './components/profile/Profile';
import img from './components/profile/John-Doe.jpg';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      profession: "Full-Stack JS Developer",
      imgSrc: img,
      bio: `I'm a full stack developer with more than two decades experience.I code
      mostly in JavaScript but I have a good experience with PHP and Python.`,
    },
    show: false
  };

  handleClick = () => {
    this.setState({show: !this.state.show});
  }

  render() {
    const {person: {fullName, profession, imgSrc, bio}, show} = this.state;
    return (
      <div className="App">
        <button className='btn' onClick={this.handleClick}>Toggle Show</button>
        {show && <Profile fullName={fullName} profession={profession} imgSrc={imgSrc} bio={bio} />}
      </div>
    );
  }
}

export default App;
