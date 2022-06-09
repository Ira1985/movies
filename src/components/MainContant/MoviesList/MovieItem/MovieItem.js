import React, {Component} from "react";
import "./movieItem.scss";
import {Link} from "react-router-dom";

class MovieItem extends Component{
    constructor(props) {
        super(props)
    }
    getFullImageLink() {
        const {item} = this.props
        return `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`
    }
    render() {
        const {item} = this.props
        const imageStyle = {
            backgroundImage: 'url(' + this.getFullImageLink() + ')',
            backgroundRepeat: "no-repeat",
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center'
        };
        return (
            <Link to={`movie/${item.id}`}>
                <div className='movie-item'>
                    <div
                        className='movie-image'
                        style={imageStyle}
                    />
                    <p>{item.title}</p>
                    <span>Рейтинг: {item.vote_average}</span>
                </div>
            </Link>
        )
    }
}

export default MovieItem;
