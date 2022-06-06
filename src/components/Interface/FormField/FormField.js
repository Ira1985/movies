import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import "./formField.scss"

class FormField extends PureComponent{
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        labelText: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func
    }
    constructor(props) {
        super(props)
    }
    render() {
        const {value, name, labelText, type, error, onChange, onBlur} = this.props
        return (
            <Fragment>
                <label htmlFor={name}>{labelText}</label>
                <input
                    id={name}
                    className='form__input'
                    name={name}
                    placeholder={labelText}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e)}
                    onBlur={(e) => onBlur(e)}
                />
                {!error || <p className='form__errors'>{error}</p>}
            </Fragment>
        )
    }
}

export default FormField