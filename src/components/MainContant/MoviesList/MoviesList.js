import React, {Component} from "react";
import {movieService} from "../../../services/movies.service";
import "./moviesList.scss";
import MovieItem from "./MovieItem/MovieItem";
import Pagination from "./Pagination/Pagination";
import FilterContextHOC from "../../../HOCComponents/FilterContextHOC";

class MoviesList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            page: 1,
            loading: false
        }

        this.onChangePage = this.onChangePage.bind(this)
    }
    componentDidMount() {
        const {filters} = this.props;
        const {page} = this.state;
        this.getMovies({
            ...filters,
            page
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {page} = this.state;
        const filter = {
            ...this.props.filters,
            page
        }
        if (this.props.filters !== prevProps.filters) {
            this.getMovies(filter)
        }
        if (this.state.page !== prevState.page) {
            this.getMovies(filter)
        }
    }

    async getMovies (filters) {
        this.setState({
            loading: true
        })
        const res = await movieService.getMovieList(filters)
        this.setState((state, props) => (
            {
                movieList: res.results,
                loading: false
            }
        ))
    }

    onChangePage(page) {
        this.setState((state, props) => (
            {
                page
            }
        ))
    }

    render() {
        const {movieList, page, loading} = this.state
        return (
            <div className="movies">
                {loading ? <p>Loading...</p> :
                    <div className="movies-list">
                        {movieList.map(movie => <MovieItem
                            key={movie.id}
                            item={movie}
                        />)}
                    </div>}
                <div className="movies-pagination">
                    <Pagination
                        page={page}
                        onChangePage={this.onChangePage}
                    />
                </div>
            </div>
        )
    }
}

export default FilterContextHOC(MoviesList)
