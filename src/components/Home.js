import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
          <h4>Welcome to Quorion! Sign Up is coming soon.</h4> 
          <p>But for now, why don't you answer or ask some questions!</p>
          <Link style={{ marginRight: '5px', color: 'white' }} to={`/questions`}><button style={{ backgroundColor: '#009933', borderColor: '#009933' }}>Answer Questions</button></Link>
          <Link style={{ color: 'white' }} to={`/questions/new`}><button style={{ backgroundColor: '#b92b27', borderColor: '#b92b27' }}>Ask Question</button></Link>
        </div>
    );
}

export default Home;
