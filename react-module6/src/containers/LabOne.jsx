import { GreetingsHoC } from "../components/Greetings";
//estionContainerStyle = {
 //   backgroundColor: "lightgray"
//}

export const LabOne = () => {
   const labelStyle = {
    textAlign: "left",
   };

const labQuestionContainerStyle = {
    backgroundColor: "lightgrey",
    color: "black",
    padding: "5px",
} 
//state/variables



//functions

//return
    return (
        <div style={{margin: "5px", width: "100%" }}>
        <h6 style={labelStyle}>Lab 1 a & b</h6>

        <div style={labQuestionContainerStyle}>
        <GreetingsHoC name={"Bella"}>
        <p>I want to welcome you to my website, blah blah</p>
             </GreetingsHoC>
        </div>
        </div>
    );
};

export const labelAndContent = ({labelText, children}) => {
    // state/variable
    const labelStyle = {
        textAlign: "left"
    };

    //function

    //return
    
    return( 
    <div>  
        <p style={labelStyle}>{labelText}</p>  
        { children }
    </div>
    )
};