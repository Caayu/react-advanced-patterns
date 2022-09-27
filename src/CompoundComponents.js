import React, { useEffect, useState } from 'react';
import './App.css';

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(true);

  const allChildren = React.Children.map(children, child => {
    if (child.type !== Label && child.type !== CheckboxInput) {
      
      // DOM element
      throw new Error('No custom element supported');
    }

    const clone = React.cloneElement(child, {
      checked,
      setChecked
    });
    return clone;
  });

  return allChildren;
}

const CheckboxInput = ({ checked, setChecked }) => {
  const [_checked, _setChecked] = useState(!!checked);

  useEffect(() => {
    if (!setChecked) {
      console.warn('CheboxInput should be called inside Checkbox for maximum benefit');
    }
  }, []);

  return (
    <input
      type="checkbox"
      checked={_checked}
      onChange={e => {
        _setChecked(e.target.checked)
        if (setChecked) {
          setChecked(e.target.checked)
        }
      }}
    />
  );
}

const Label = ({ setChecked, children }) => {
  if (!setChecked) {
    throw new Error('Label should be called from Checkbox')
  }

  return <label htmlFor="something" onClick={e => setChecked(state => !state)}>{children}</label>;
}

function CompoundComponents() {
  return (
    <Checkbox>
      <CheckboxInput />
      <Label>Checkbox label</Label>
    </Checkbox>
  );
}

export default CompoundComponents;
