import React, { useState } from 'react';
import './App.css';

export function App(props) {
  const [inputs, setInputs] = useState({}); // Corrected state initialization

  const handleChange = (event) => { // Fixed typo in `handleChange`
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value })); // Correct variable name `inputs`
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
    alert("The name is  "+inputs.username)
    alert("The age is  "+inputs.age)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ''} // Corrected value binding
          onChange={handleChange}        // Corrected onChange binding
        />
      </label>
      <br />
      <label>
        Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ''}        // Corrected value binding
          onChange={handleChange}         // Corrected onChange binding
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;

