import React from 'react';
import './App.css';
import State from './state/State.js'
import StateCallBack from './state/StateCallBack.js'
import StateUpdate from './state/StateUpdate.js'
import BindingText from './binding/BindingText.js'
import BindingInput from './binding/BindingInput.js'
import BindingRadio from './binding/BindingRadio.js'
import BindingCheckbox from './binding/BindingCheckbox.js';

function App() {
  return (
    <div className="App">
      <section>
        <p>useState</p>
        <State />
        <StateCallBack />
        <StateUpdate />
      </section>
      <section>
        <p>binding</p>
        <BindingText />
        <BindingInput />
        <BindingRadio />
        <BindingCheckbox />
      </section>
    </div>
  );
}

export default App;
