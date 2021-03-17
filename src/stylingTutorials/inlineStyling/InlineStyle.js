import React from "react";

const style = {
    color:'red',
    border:'1px solid blue',
    padding: '2px',
    backgroundColor:'white',
    cursor:'pointer',
    boxShadow:'5px 5px #e2dfdf'
  }

const buttonStyle = ({name}) => {
    return(

    <button style = {style}>{name}</button>
    )
};


export default buttonStyle;