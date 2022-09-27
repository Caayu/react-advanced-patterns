import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';

const CheckboxInterface = createContext(null);

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(true);

  return (
    <CheckboxInterface.Provider value={{ checked, setChecked }}>
      {children}
    </CheckboxInterface.Provider>
  );
}

const CheckboxInput = () => {
  const context = useContext(CheckboxInterface);

  if (!context) {
    throw new Error('Label should be called from Checkbox');
  }

  const { checked, setChecked } = context;
    
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={e => {
        setChecked(e.target.checked)
      }}
    />
  );
}

const Label = ({ children }) => {
  const context = useContext(CheckboxInterface);

  if (!context) {
    throw new Error('Label should be called from Checkbox');
  }

  const { setChecked } = context;

  return <label htmlFor="something" onClick={e => setChecked(state => !state)}>{children}</label>;
}

function CompundComponentsWithContext() {
  return (
    <Checkbox>
      <CheckboxInput />
      <Label>Checkbox label</Label>
    </Checkbox>
  );
}

export default CompundComponentsWithContext;
