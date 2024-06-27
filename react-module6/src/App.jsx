import { useState } from 'react'
import './App.css'
import { Greetings, GreetingsHoC } from './components/Greetings'
import { LabTwo } from './containers/LabTwo';
import { LabOne } from './containers/LabOne';

// COMPONENT FUNCTION NAME -> INITIALISE
const App = () => {
  const [contentName, setContentName] = useState("");

  // STATES & VARIABLES
  const contentDictionary = {
    LabOne: "Lab 1",
    LabTwo: "Lab 2",
  };

  // FUNCTIONS
  const displayHandler = () => {
    if(contentName === "") {
      return <div>nothing to display</div>;
    }
    if (contentName === "Lab 1") {
    return <LabOne />;
    }
    
    if (contentName === "Lab 2") {
     return <LabTwo />;
    }
  };

  switch (contentName) {
    case "Lab 1":
      return <LabOne />
    case "Lab 2":
      return <LabTwo />
    default:
      return <div>Click on a Lab button to see the content</div>;
  }
};

  // RETURN
  return (
    <div className="main-app-container">
      <p>
        This is the welcome page that will display the button for each lab
      </p>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <button onClick={() => setContentName('Lab 1')}>Lab 1</button>
        <button onClick={() => setContentName('Lab 1')}>Lab 2</button>
      </div>
      <div style={{display:"flex", width:"100%", border: "red 1px solid"}}>
       
        {displayHandler()}
      </div>
      </div>


  );
};

export default App;
