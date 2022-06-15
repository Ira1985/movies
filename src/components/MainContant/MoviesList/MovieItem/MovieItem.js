import React, {Component} from "react";
import "./movieItem.scss";
import {Link} from "react-router-dom";
import {store} from "../../../../redux/store";
import {movieService} from "../../../../services/movies.service";

class MovieItem extends Component{
    constructor(props) {
        super(props)
    }
    getFullImageLink() {
        const {item} = this.props
        return `https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`
    }
    async pushToFavorite() {
        const {item} = this.props
        await movieService.pushToFavoriteMovie(store.getState().user.id, localStorage.getItem('session_id'), {
            media_type: 'movie',
            media_id: item.id,
            favorite: true
        })
    }
    pushToWatching() {
        console.log('pushToWatching')
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
            <div className='movie-item'>
                <Link to={`movie/${item.id}`}>
                    <div
                        className='movie-image'
                        style={imageStyle}
                    />
                    <p>{item.title}</p>
                    <span>Рейтинг: {item.vote_average}</span>
                </Link>
                <div className='movie-item__actions'>
                    <button className='movie-item__action' onClick={() => this.pushToFavorite()}>Любимый</button>
                    <button className='movie-item__action' onClick={this.pushToWatching}>Посмотреть</button>
                </div>
            </div>
        )
    }
}

export default MovieItem;
