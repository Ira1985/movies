import React, {Component} from "react";
import "./leftSidebar.scss"
import Filters from "./Filters/Filters";

class LeftSidebar extends Component{
    constructor() {
        super();
        this.state = {
            minimized: false,
        }
    }
    mininizedSidebar() {
        this.setState((state, props) => ({
            minimized: !state.minimized
        }))
    }
    render() {
        const {minimized} = this.state
        return (
            <div className={`left-sidebar${minimized ? '-minimized' : ''}`}>
                {minimized || <Filters/>}
                <button onClick={() => this.mininizedSidebar()}>{minimized ? '<' : '>'}</button>
            </div>
        )
    }
}

export default LeftSidebar;
