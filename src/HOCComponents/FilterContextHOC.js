import React, {Component} from "react";
import {FilterContext} from "../components/MovieContainer/MovieContainer";

export default (UIComponent) => class FilterContextHOC extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <FilterContext.Consumer>
                {context => <UIComponent {...this.props} {...context}/>}
            </FilterContext.Consumer>
        )
    }
}
