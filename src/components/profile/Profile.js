import React, { Component } from 'react';
import './Profile.css';
import PropTypes from 'prop-types';

class Profile extends Component {
  state = {
    timeInterval: 0
  }
  
  static defaultProps = {
    fullName: "Steve Smith",
    profession: "Full-Stack JS Developer",
    bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, dolorum!'
  }

  static propTypes = {
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }

  componentDidMount() {
    console.log('component did mount');
    this.intervalId = setInterval(() => {
      this.setState({timeInterval: this.state.timeInterval + 1})
      // this.setState(prev => ({timeInterval: prev.timeInterval + 1}));
    }, 1000)
  }

  componentWillUnmount() {
    console.log('component unmounted');
    clearInterval(this.intervalId);
  }
  
  render(){
    const {fullName, profession, imgSrc, bio} = this.props
    return (
      <div className="card">
        <div className="card-item"></div>
        <div className="card-item"><img src={imgSrc} alt="John Doe" /></div>
        <div className="card-item">
          <h1>{fullName}</h1>
          <h3>Profession:</h3>
          <p>{profession}</p>
          <h3>Bio:</h3>
          <p>{bio}</p>
        </div>
        <div className="card-item">
          <strong>time interval: {this.state.timeInterval}s</strong>
        </div>
      </div>
    )
  }
}
export default Profile
