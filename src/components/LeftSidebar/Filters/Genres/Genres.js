import React, {PureComponent} from "react";
import "./genres.scss"
import {movieService} from "../../../../services/movies.service";
import FieldChecked from "../../../Interface/FieldChecked/FieldChecked";

class Genres extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            genres: [],
            checked: []
        }
    }
    async componentDidMount() {
        const {genres} = await movieService.getGenreList()
        this.setState({
            genres
        })
    }

    onChange = (checked, name) => {
        if(checked) {
            this.setState(prevState => {
                const newChecked = [...prevState.checked]
                newChecked.push(name)
                this.props.onChange('with_genres', newChecked.toString())
                return {
                    checked: newChecked
                }
            })
        } else {
            this.setState(prevState => {
                const newChecked = prevState.checked.filter(item => item !== name)
                this.props.onChange('with_genres', newChecked.toString())
                return {
                    checked: newChecked
                }
            })
        }
    }

    render() {
        const {genres} = this.state
        return (
            <div className='genres'>
                {genres.map(genre => (
                    <FieldChecked
                        key={genre.id}
                        item={genre}
                        onChange={this.onChange}
                    />
                ))}
            </div>
        )
    }
}

export default Genres;
