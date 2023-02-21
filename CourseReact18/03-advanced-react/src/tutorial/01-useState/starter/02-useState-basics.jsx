import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>Your count is {count} </h4>
      <button type="button" className="btn" onClick={handleCount}>
        Click
      </button>
    </div>
  );
};

export default UseStateBasics;
