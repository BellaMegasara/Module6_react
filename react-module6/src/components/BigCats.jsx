import { useState } from "react";
import { SingleCat } from "./SingleCat";


const BigCats = () => {
    //VAR
const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { name: 'Cougar', latinName: 'Puma concolor' },
    { name: 'Jaguar', latinName: 'Panthera onca' },
    { name: 'Leopard', latinName: 'Panthera pardus' },
    { name: 'Lion', latinName: 'Panthera leo' },
    { name: 'Snow leopard', latinName: 'Panthera uncia' },
    { name: 'Tiger', latinName: 'Panthera tigris' },
];

const sortingCats = (type) => {
};

// function setup
const alphabetCats = [...catsData];

};

    //clone the original state 
    const sortedCats = [...catsData];

    //sorting
    const alphabetSorting = () => {
        const alphabetSorting = () => {
    alphabetCats.sort((a, b) => {
        console.log("this is it", a, b);
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        }
    });
    };

    // do our array method on that clone
    sortedCats.sort((a,b) => {
        if(a.name > b.name) {
            return 1;
        } else {
            return -1;
        }
    });
    // ship it to the state


const catListHandler = () => {
    return catsData.map((cat) => {
    return <SingleCat catData={cat} />;
});
};

const filterCatData = () => {
    let filteredCats = [...catsData];
    filteredCats.filter((cat) => cat.latinName.includes("Panthera")
    );
    console.log(filteredResult);
    setCatsData(filteredResult);
};

return <ul>{catListHandler()}</ul>;
};

return (
    <div>
        <button onClick={() => sortingCats("asc")}>sort Cats (asc)</button>
        <button onClick={() => sortingCats("dec")}>sort Cats (dec)</button> 
    </div>
);
