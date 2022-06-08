import React, {Component} from "react";
import './App.css';
import DefaultLayout from "./components/layouts/Default/DefaultLayout";
import MovieContainer from "./components/MovieContainer/MovieContainer";
import MovieDescription from "./components/MovieDescription/MovieDescription";
import {BrowserRouter, Routes, Route} from "react-router-dom";

class App extends Component{
  render() {
      return (
          <BrowserRouter>
              <div className="App">
                  <Routes>
                      <Route path='/' element={<DefaultLayout/>}>
                          <Route index element={<MovieContainer/>}/>
                          <Route path='movie/:id' element={<MovieDescription/>}/>
                      </Route>
                  </Routes>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;
