import { useState } from 'react';
import './App.css';

function StateMachineWithFetch() {
  const [state, setState] = useState('idle');

  function clicked() {
    setState('loading');
    fetch('/data.json').then(() => {
      setState('loaded');
    }).catch(err => {
      setState('error');
    });
  }

  if (state === 'loading') {
    return <div>Loading...</div>
  }

  if (state === 'error') {
    return <div>Error fetching your request</div>
  }

  return (
    <div className="App" onClick={clicked}>
      Current state: {state}
    </div>
  );
}

export default StateMachineWithFetch;
