import React,{useState} from "react";
import { Button, makeStyles, ButtonGroup, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const MaterialUI = () => {

    const [name,setName] = useState([])

    const getValue = (e)=>{
        let data = name;
        data.push(e.target.value)
        console.log(data);
        console.log(e.target.value)
    }
  return (
    <div>
      <h1>React MUI</h1>
      {/* 
      *! 

      <button>Click Me</button>
      <Button color="primary">Material UI Button </Button>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> */}

      {/** Button UI  */}
      {/* <Button color="primary" variant="outlined">
        Click Me
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button> */}
        
        
        {/**Button Group 
         * 
         * the basic advantage of this is it apply same color contrast features to the all buttons
         * in the group
         * 
         * 
         */}


        {/* <ButtonGroup
        color='default'
        variant="contained"
       
        orientation = 'vertical'
        >

        <Button> btn 1 </Button>
        <Button>btn 2</Button>
        <Button>btn 3</Button>
        </ButtonGroup> */}



       {/** Checkboxes */} 

        {/* <Checkbox color='primary'
        value ='nikhil'
        onChange={(e)=>getValue(e)}
        />Male
        <Checkbox color='primary'
        value ='yash'
        onChange={(e)=>getValue(e)}
        />Male
        <Checkbox color='primary'
        value ='kunal'
        onChange={(e)=>getValue(e)}
        />Male
        <Checkbox color='primary'
        value ='kunal'
        indeterminate
        onChange={(e)=>getValue(e)}
        />Male



        <Checkbox color='secondary'
        value ='kunal'
        icon ={<FavoriteBorder/>}
        checkedIcon={<Favorite/>}
        />Male */}



        {/** Radio Buttons */}
        {/** Table */}




    </div>
  );
};

export default MaterialUI;
