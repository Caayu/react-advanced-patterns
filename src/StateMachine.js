import { useReducer, useState } from 'react';
import './App.css';

function reducer({ state }) {
  console.log(state)
  switch (state) {
    case 'PRESSED_ONCE':
      return {
        state: 'PRESSED_TWO'
      }
    case 'PRESSED_TWO':
      return {
        state: 'PRESSED_THREE'
      }
    case 'PRESSED_THREE':
      return {
        state: 'PRESSED_ONCE'
      }
  }
}

const Button = props => {
  const [state, dispatch] = useReducer(reducer, {
    state: 'PRESSED_ONCE'
  });
  const [counter, setCounter] = useState(0);

  return (
    <div 
      style={{ color: props.color, textDecoration: props.underline ? 'underline' : undefined }}
    >
      <div onClick={() => dispatch()}>I am button</div>
      <div>{state.state}</div>
    </div>
  );
}

function StateMachine() {
  const props = {
    increment: 2,
    underline: true
  }

  return (
    <div className="App">
      <Button {...props} color="black" />
      <Button {...props} color="blue" />
      <Button {...props} color="green" />
    </div>
  );
}

export default StateMachine;
