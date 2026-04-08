// import { useState } from 'react';
import './App.css';
import HomeCounter from './modules/HomeCounter';
// import Home from './modules/Home';
import HomeSimple from './modules/form_simple/HomeSimple';

function App() {
  // const [count, setCount] = useState(1);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <header>
        {/* <h1>Test</h1> */}
        {/* <HomeCounter count={count} handleClick={handleClick} />
        <HomeCounter count={count} handleClick={handleClick} /> */}
        <HomeCounter />
        <HomeCounter />
        {/* <Home /> */}
        <HomeSimple />
      </header>
    </div>
  );
}

export default App;
