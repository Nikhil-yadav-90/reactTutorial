import React,{useState} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';


const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    //*! This is simple handler function which runs in the hook 


    const exampleHandler = (e)=>{
        e.preventDefault();
        setCount(prevCount => prevCount + 1)
    }
    //*!  useHotkey hook for binding keys with the handler functions
    //todo  numpad keys still not assigning
    useHotkeys('up', exampleHandler) 
    return (
      <p>
        Pressed {count} times.
      </p>
    );
  };


  export default ExampleComponent;