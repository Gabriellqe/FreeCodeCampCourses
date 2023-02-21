import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 36,
    hobby: "Read Books",
  });

  const displayPerson = () => {
    setPerson({ name: "john", age: 28, hobby: "scream at the computer" });
  };
  return (
    <div>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
