import React, {Component} from "react";
import './App.css';
import DefaultLayout from "./components/layouts/Default/DefaultLayout";

class App extends Component{
  render() {
      return (
          <div className="App">
              <DefaultLayout/>
          </div>
      );
  }
}

export default App;
