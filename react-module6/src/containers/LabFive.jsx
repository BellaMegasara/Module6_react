import { useState } from "react";
export const LabFive = () => {
  // state / var
  const [catData, setCatData] = useState(originalData);
  // function
  const addCatToList = (newCatData) => {
    console.log(newCatData);
  };



  // return
  return <AddCatsForm data={catData}/>;
  <div style={{ marginTop: 20px }}>
    <BigCats data={originalData} />
  </div>

};

const AddCatsForm = ({ data, addCatToListFunction }) => {
  // state / var
  const [catName, setCatName] = useState("");
  const [catLatinName, setCatLatinName] = useState("");
  const [catImageUrl, setCatImageUrl] = useState("");

  // function
  const submitHandler = () => {

  }
  // return
  return (
    <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
      <InputField
        label="Name"
        value={catName}
        callBackFunction={(name) => setCatName(name)}
      />
      <InputField
        label="Latin Name"
        value={catLatinName}
        callBackFunction={(name) => setCatLatinName(name)}
      />
      <InputField
        label="image url"
        value={catImageUrl}
        callBackFunction={(url) => setCatImageUrl(url)}
      />
    </div>
  );
};
const InputField = ({ value, label, callBackFunction }) => {
 // const [textValue, setTextValue] = useState("");

  const onChangeHandler = (event) => {
  //  setTextValue(event.target.value);
  if(callBackFunction) {
    callBackFunction(event.target.value);
  }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <label>{label}</label>
      <input type="text" value={textValue} onChange={onChangeHandler} />
    </div>
  );
};






