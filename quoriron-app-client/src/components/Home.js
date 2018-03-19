import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
          <h4>Welcome to Quorion! Sign Up is coming soon.</h4> 
          <p>But for now, why don't you answer or ask some questions!</p>
          <Link style={{ marginRight: '5px', color: 'white' }} to={`/questions`}><Button style={{ backgroundColor: '#009933', borderColor: '#009933' }}>Answer Questions</Button></Link>
          <Link style={{ color: 'white' }} to={`/questions/new`}><Button style={{ backgroundColor: '#b92b27', borderColor: '#b92b27' }}>Ask Question</Button></Link>
        </div>
    );
}

export default Home;
