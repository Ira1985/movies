import React, {Component} from "react";
import "./fieldChecked.scss"
import PropTypes from "prop-types"

class FieldChecked extends Component{
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    }
    constructor(props) {
        super(props)
    }
    onChange = (event) => {
        this.props.onChange(event.target.checked, event.target.name)
    }
    render() {
        const {item} = this.props
        return (
            <div className='field-checked'>
                <input
                    id={item.id}
                    className='field-checked__checkbox'
                    type="checkbox"
                    name={item.id}
                    value={item.name}
                    onChange={this.onChange}
                />
                <label htmlFor={item.id}>
                    {item.name}
                </label>
            </div>
        )
    }
}

export default FieldChecked;
