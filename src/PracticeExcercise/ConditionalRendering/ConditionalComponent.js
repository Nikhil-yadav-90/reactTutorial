import React, { useState } from "react";

const ConditionalComponent = () => {
  const [cond, changeCond] = useState(false);

  const conditionHandler = () => {
    cond ? changeCond(false) : changeCond(true);
  };

  return (
    <div>
      <h1>Conditional Component</h1>
      <button onClick={conditionHandler}> Click Me For Change</button>
      {cond ? (
        <h2>Component Rendering on the Click Event</h2>
      ) : (
        <h1>Please Click Button For Component to render</h1>
      )}
    </div>
  );
};

export default ConditionalComponent;
