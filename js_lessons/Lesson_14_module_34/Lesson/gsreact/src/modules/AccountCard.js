// import react from 'react';
import './Home.css';

const AccountCard = ({ name, city, email, password }) => {
  return (
    <div className="block">
      <p>Account Card</p>
      <div>
        <p>Name: {name}</p>
        <p>City: {city}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  );
};

export default AccountCard;
