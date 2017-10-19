import React, { Component } from 'react';

<<<<<<< HEAD

const AnswerCard = ({ content, rating, upvoter, downvoter }) => { 
    return (
        <div>
          <p>{content}</p>
          AWESOME RATING: <p>{rating}</p>
=======
const AnswerCard = ({content, rating, upvoter, downvoter}) => { 
    return (
        <div>
          <p>{content}</p>
          <p className="rating">HELPFULNESS RATING: {rating}</p>
>>>>>>> testing
          <button onClick={upvoter}>Upvote</button>
          <button onClick={downvoter}>Downvote</button>
        </div>
    );
}

export default AnswerCard;


