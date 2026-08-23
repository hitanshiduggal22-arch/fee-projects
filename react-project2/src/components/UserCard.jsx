import React from 'react';

const UserCard = (props) => {
  return (
    <div className="user-container">
      <img 
        className="user-img" 
        src={props.image} 
        alt={props.name} 
      />

      <div className="card-content">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default UserCard;

