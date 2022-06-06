import React, {Component} from "react";
import PropTypes from "prop-types";
import "./uiSelect.scss"

class UISelect extends Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        labelText: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        multi: PropTypes.bool
    }

    constructor(props) {
        super(props)
    }
    render() {
        const {name, labelText, value, onChange, children, multi} = this.props
        return (
            <label className='ui-select'>
                {labelText}:
                <select
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                    multiple={multi}
                >
                    {children}
                </select>
            </label>
        )
    }
}

export default UISelect;
