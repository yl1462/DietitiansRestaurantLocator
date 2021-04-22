import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bento from './bento.png'

class LandingPage extends Component {
  render() {
    return (

      <div className="landingpage">
        <p>This is an app for you to contribute, update, and of course, browse restaurants that fit various dietary needs.</p><br />
        <p>There is no ad or complicated functions to confuse you.</p><br />
        <p>Simple but functional.</p><br />
        <p>  Click here: <button><Link to="/home"><img src={ bento } alt='bento box icon'/></Link></button> to start your healthy diet today!</p>
      </div>

    );
  }
}

export default LandingPage;
