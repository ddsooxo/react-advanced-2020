import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    //  we pass in the id. filter out the array and all the items who's id are not matching the id parameter, 
    //  those are returned in our newPeople 
    let newPeople = people.filter((person)=> person.id !== id);
    setPeople(newPeople);
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={()=> removeItem(id)}> remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear all items </button>
    </>
  );
};

export default UseStateArray;
