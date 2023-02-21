import { data } from "../../../data";
import React from "react";
const UseStateArray = () => {
  const [people, setpeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setpeople(newPeople);
  };
  const clearAllItems = () => {
    setpeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={clearAllItems}
      >
        Clear all
      </button>
    </div>
  );
};

export default UseStateArray;
