import React, { Component } from 'react';


const AnswerCard = ({ content, rating, upvoter, downvoter }) => { 
    return (
        <div>
          <p>{content}</p>
          AWESOME RATING: <p>{rating}</p>
          <button onClick={upvoter}>Upvote</button>
          <button onClick={downvoter}>Downvote</button>
        </div>
    );
}

export default AnswerCard;


