import { useState } from "react";

//BUTTON COMPONENTS INITIALISED
export const Button = ({ label }) => {
//STATES & VARIABLES
const [count, setCount] = useState(0);


//FUNTIONS
const handleClick = () => {
    setCount((count) => count + 1);
};


//RETURN
return(
    <button onClick={handleClick}>
        {label} count: {count}
    </button>
);
};