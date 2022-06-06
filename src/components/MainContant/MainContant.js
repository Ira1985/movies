import React, {Component} from "react";
import "./mainContant.scss"
import MoviesList from "./MoviesList/MoviesList";

class MainContant extends Component{
    render() {
        return (
            <div className='main-container'>
                <MoviesList/>
            </div>
        )
    }
}

export default MainContant
