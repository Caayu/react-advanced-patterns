import './App.css';
import CommonProps from './CommonProps';
import CompoundComponents from './CompoundComponents';
import CompoundComponentsWithContext from './CompoundComponentsWithContext';
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
      <CompoundComponentsWithContext />
    </div>
  );
}

export default App;
