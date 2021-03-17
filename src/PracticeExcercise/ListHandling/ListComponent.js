import React from 'react';


const ListComponent = (props)=>{
    return(
        <div>
            <h2>Hello My Name is {props.value.name} </h2>
            <h4>my age is <i>{props.value.age}</i></h4>


            
        </div>
    )
}


export default ListComponent;