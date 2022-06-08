import React, {Component} from "react";
import "./defaultLayout.scss"
import Header from "../../Header/Header";
import {Outlet} from "react-router-dom";

class DefaultLayout extends Component{
    render() {
        return (
            <div className='default-layout'>
                <Header/>
                <Outlet/>
            </div>
        )
    }
}

export default DefaultLayout;
