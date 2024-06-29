
import { useState } from "react";

export const Emoji = () => {
// STATE
const [feeling, setFeeling] = useState("happy");
const happy ="┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿< ";
const angry ="•`_´•"

// FUNCT

const changeFeeling = () => {
    console.log("feeling", feeling);
    if (feeling === "happy") {
        setFeeling("angry");
        return;
    }

    setFeeling("happy");
    
};


const displayHandler = () => {
    if (feeling === "happy") {
        return happy;
    }

    if (feeling === "angry") {
        return angry;
    }
};

//RETURN

return(
    <div>
        {displayHandler()}
    <button onClick={changeFeeling}>
        change
    </button>
    </div>
)};