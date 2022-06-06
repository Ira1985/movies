import React, {PureComponent} from "react";
import {year} from "../../../../constants/filters";
import UISelect from "../../../Interface/UISelect/UISelect";

class PrimaryYear extends PureComponent{
    constructor(props) {
        super(props)
    }
    render() {
        const {value, onChange} = this.props
        return (
            <UISelect
                name="primary_release_year"
                value={value}
                onChange={(name, value) => onChange(name, value)}
                labelText="Год выхода"
            >
                {year.map((item) => (
                    <option
                        key={item.value}
                        value={item.value}
                    >
                        {item.label}
                    </option>
                ))}
            </UISelect>
        )
    }
}

export default PrimaryYear;
