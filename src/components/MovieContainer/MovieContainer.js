import React, {Component} from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import MainContant from "../MainContant/MainContant";
import "./movieContainer.scss"
import Header from "../Header/Header";

export const FilterContext = React.createContext()

class MovieContainer extends Component{
    constructor() {
        super();
        this.state = {
            filters: {
                sort_by: 'popularity.desc',
                primary_release_year: ''
            }
        }
        this.onFiltersChange = this.onFiltersChange.bind(this)
    }
    onFiltersChange (name, value) {
        const newFilters = {
            ...this.state.filters,
            [name]: value
        }
        this.setState({
            filters: newFilters
        })
    }
    render() {
        const {filters} = this.state
        return (
            <FilterContext.Provider value={{
                filters,
                onFiltersChange: this.onFiltersChange
            }}>
                <div className="movie-container">
                    <Header/>
                    <div className="movie-container__content">
                        <LeftSidebar/>
                        <MainContant/>
                    </div>
                </div>
            </FilterContext.Provider>
        )
    }
}

export default MovieContainer
