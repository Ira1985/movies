import React, {Component} from "react";
import "./movieDescription.scss";
import {movieService} from "../../services/movies.service";

class MovieDescription extends Component{
    constructor(props) {
        super(props)
        this.state = {
            movie: null
        }
    }
    async componentDidMount() {
        const {match: {params}} = this.props
        const data = await movieService.getMovieDetails(params.id)
        this.setState({
            movie: data
        })
    }

    render() {
        const {movie} = this.state
        return (
            <div>
                {!movie || <div>{movie.overview}</div>}
            </div>
        )
    }
}

export default MovieDescription;
