import React, { useState } from 'react';

const In = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
    }
  };

  return (
    <>
      <div className="main_div">
        <p>REACT MINOR PROJ:1 </p>
        <div className="center_div">
          
          <h1>{num}</h1>
          <div className="btn">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default In;