import './App.css';
import React, {useEffect, useState} from 'react';
// import Counter from './Counter';
import CounterClassComponent from './CounterClassComponent';

function App() {
  let [mount, setMounted] = useState(false);
  
  console.log('rendered App');

  useEffect(() => {
    let logResize = () => {
      console.log('resized');
    };
    
    window.addEventListener('resize', logResize);

    return () => window.removeEventListener('resize', logResize)
}, [mount]);
  
  return (
    <div className="App">
      {mount && <CounterClassComponent />}

      <button onClick={() => setMounted(mount => !mount)}>Toggle Mount</button>
    </div>
  );
}

export default App;