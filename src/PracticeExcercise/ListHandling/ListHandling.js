import React from "react";
import ListComponent from "./ListComponent";

const Persons = [
  { name: "Nikhil Yadav", age: 30, Sex: "Male" },
  { name: "Manu Yadav", age: 27, Sex: "Male" },
];



const ListHandling = () => {
    
  return (
    <div>
      <h1>ListHandling Component Example</h1>        
        {Persons.map((person,index)=><ListComponent key = {index} value={person}/>)}
    </div>
  );
};

export default ListHandling;
