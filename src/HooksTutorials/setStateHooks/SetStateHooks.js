import React,{useState}  from "react";



const SetStateHooks = () => {
  const [state, setState] = useState({ count: 10 });

  const counterHandeler = () => {
    console.log(state.count);

    setState({ count: state.count + 2 });
  };
  return (
    <div>
      <h1>React Tutorial </h1>
      <h2>useState Hooks</h2>
      

      <h3>Counter :{state.count}</h3>
      <button onClick={counterHandeler}>Change Counter</button>
    </div>
  );
};

export default SetStateHooks;
