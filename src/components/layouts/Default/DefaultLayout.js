import React, {Component} from "react";
import "./defaultLayout.scss"
import MovieContainer from "../../MovieContainer/MovieContainer";
//import SimpleComponent from "../../SimpleComponent/SimpleComponent";

class DefaultLayout extends Component{
    render() {
        return (
            <div className='default-layout'>
              <MovieContainer/>
            </div>
        )
    }
}

export default DefaultLayout;
