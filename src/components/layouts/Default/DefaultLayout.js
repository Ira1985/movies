import React, {Component} from "react";
import "./defaultLayout.scss"
import Header from "../../Header/Header";
import MovieContainer from "../../MovieContainer/MovieContainer";
import MovieDescription from "../../MovieDescription/MovieDescription";
import {BrowserRouter, Route} from "react-router-dom";

class DefaultLayout extends Component{
    render() {
        return (
            <BrowserRouter>
                <div className='default-layout'>
                    <Header/>
                    <Route exact path="/" component={MovieContainer} />
                    <Route path="/movie/:id" component={MovieDescription}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default DefaultLayout;
