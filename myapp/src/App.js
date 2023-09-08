import React, { useState } from "react"

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const Updatetime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(Updatetime, 1000);
  return (
 <>
 <h2>React Mini Proj:2
        WATCH
 </h2>
      <h1>{ctime}</h1 >
      <h3>😎</h3>
      </>
      );
};

export default App;