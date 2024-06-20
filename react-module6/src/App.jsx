import { useState } from 'react'
import './App.css'
import { Greetings, GreetingsHoC } from './components/Greeting'

// COMPONENT FUNCTION NAME -> INITIALISE
const App = () => {
  // STATES & VARIABLES
  const [name, setName] = useState("Bella");

  // FUNCTIONS

  // RETURN
  return (
    <>
      <GreetingsHoC name={"Alvin"}>
        <p>I want to welcome you to my website</p>
      </GreetingsHoC>
    </>
  );
};

export default App;
