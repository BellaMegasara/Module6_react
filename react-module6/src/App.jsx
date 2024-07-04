import { useState } from 'react'
import './App.css'
import { Greetings, GreetingsHoC } from './components/Greetings'
import { LabTwo } from './containers/LabTwo';
import { LabOne } from './containers/LabOne';
import { LabThree } from './containers/LabThree';
import { LabFour } from './containers/LabFour';
import { LabFive } from './containers/LabFive';
import { LabFive } from './containers/LabFive';

// COMPONENT FUNCTION NAME -> INITIALISE


const App = () => {
  const [contentName, setContentName] = useState("");


  // STATES & VARIABLE

  const contentConfig = [{ lab: "Lab 1"}, {lab: "Lab 2" }, {lab: "Lab 3"}, {lab: "Lab 4"}];

  // FUNCTIONS
  const displayHandler = () => {
  switch (contentName) {
    case contentConfig[1].lab:
      return LabTwo;
    case contentConfig[2].lab:
      return LabThree;
    case contentConfig[3].lab:
      return LabFour;
    case contentConfig[4].lab:
      return LabFive;
    default:
      console.assert(first, second)
      return <div>Click on a Lab button to see the content</div>;
  };
};

const buttonConstructor = () => {
  const buttonElementArray = contentConfig.map((content) => {
    return (
      <button
      key={content.lab}
      onClick={() => setContentName(content.lab)}
      style={{margin: "5px"}}
      >
        {content.lab}
      </button>
    );
  });
  return buttonElementArray;
};

  // RETURN
  return (
    <div className="main-app-container">
      <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: "5px"}}>
       {buttonConstructor()}
      </div>

      <div style={{display:"flex", width:"100%", border: "red 1px solid"}}>
       
        {displayHandler()}
      </div>
      </div>


  );
};

export default App;
