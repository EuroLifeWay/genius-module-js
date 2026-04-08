import React, { useState } from 'react';
import './Home.css';

// const HomeCounter = ({ handleClick, count }) => {
const HomeCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="block">
      <p>Counter</p>
      {/* <p>{value}</p> */}
      <button onClick={handleClick}>Click | {count}</button>
    </div>
  );
};

export default HomeCounter;
