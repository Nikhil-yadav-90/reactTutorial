import React, { Component } from "react";
import "./App.css";
import FormatUI from "./Components/Forms/FormsUI";
import Input from "./Components/UI/Input";
// 1. import Hooks from './HooksTutorials/setStateHooks/SetStateHooks';
// 2. import InlineStyle from './stylingTutorials/inlineStyling/InlineStyle';.
// 3.import ConditionalComponent from './PracticeExcercise/ConditionalRendering/ConditionalComponent'
// import UserInput from "./PracticeExcercise/UserInput/UserInput";
// import UserOutput from "./PracticeExcercise/UserOutput/UserOutput";
// 4.import ListHandling from "./PracticeExcercise/ListHandling/ListHandling";
// 5.import KeyEvent from "./KeyEvents/KeyEvents";
// 6.import ExampleComponent from "./KeyEvents/KeyEventsII";
// 7.aimport MaterialUI from "./MaterialUI/MaterialApp";
// 7.bimport CustomizedTables from "./MaterialUI/MaterialTable";
// 8a.import InputElement from './Components/UI/Input'
// 8b.const formHelper = require('./Helpers/FormHelper/FormHelper.js');

function App() {
  return (
    <div className="App">
      {/* 1. <Hooks/> */}
      {/* 2. <InlineStyle  name='Inline Style Click Button'/> */}
      {/* 3.<ConditionalComponent/> */}
      {/* 4.<ListHandling/> */}
      {/* 5.<KeyEvent/> */}
      {/* 6.<ExampleComponent/> */}
      {/* 7.<MaterialUI/>
      <CustomizedTables/> */}
      {/* 8.<InputElement elementType ={formHelper.Consigoner.elementType} elementConfig={formHelper.Consigoner.elementconfig} 
       />
       <InputElement elementType ={formHelper.Password.elementType}
       elementConfig={formHelper.Password.elementconfig} 
       /> */}
       <FormatUI/>
    </div>
  );
}

// class App extends Component {
//   state = {
//     userName:'Nikhil'
//   }

// changeHandler = (event)=>{
//    this.setState({
//      username:event.target.value
//    })
// };

//   render() {
//     console.log(this.state.userName)
//     return (
//       <div className="App">
//         <UserInput changed = {this.changeHandler}/>
//         <UserOutput userName={this.state.userName}/>
//         <UserOutput userName="Yash" value= {this.state.username} />
//         <UserOutput userName="Kunal " />

//       </div>
//     );
//   }
// }
export default App;
