import React, { Component} from "react";
import "./App.css";

import button from "./Components/Button"
import Button from "./Components/Button";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Button/>
      </div>
    );
  }
}

export default App;