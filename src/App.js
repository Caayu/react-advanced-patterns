import './App.css';
import CommonProps from './CommonProps';
import CompoundComponents from './CompoundComponents';
import CompundComponentsWithContext from './CompundComponentsWithContext';
import StateMachine from './StateMachine';
import StateMachineWithFetch from './StateMachineWithFetch';

function App() {
  return (
    <div className="App">
      <CommonProps />
      <hr />
      <StateMachine />
      <hr />
      <StateMachineWithFetch />
      <hr />
      <CompoundComponents />
      <hr />
      <CompundComponentsWithContext />
    </div>
  );
}

export default App;
