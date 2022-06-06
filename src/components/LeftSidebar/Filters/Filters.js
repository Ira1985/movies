import React, {Component} from "react";
import "./filters.scss"
import SortBy from "./SortBy/SortBy";
import PrimaryYear from "./PrimaryYear/PrimaryYear";
import Genres from "./Genres/Genres";
import FilterContextHOC from "../../../HOCComponents/FilterContextHOC";

class Filters extends Component{
    handleChange = (name, value) => {
        this.props.onFiltersChange(name, value)
    }
    render() {
        const {filters} = this.props
        return (
            <form
                className='filters-form'
            >
                <SortBy
                    value={filters.sort_by}
                    onChange={this.handleChange}
                />
                <PrimaryYear
                    value={filters.primary_release_year}
                    onChange={this.handleChange}
                />
                <Genres onChange={this.handleChange}/>
            </form>
        )
    }
}

export default FilterContextHOC(Filters)
