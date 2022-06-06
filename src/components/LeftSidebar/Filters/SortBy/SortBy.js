import React, {PureComponent} from "react";
import {sort_by} from "../../../../constants/filters";
import UISelect from "../../../Interface/UISelect/UISelect";

class SortBy extends PureComponent{
    constructor(props) {
        super(props)
    }
    render() {
        const {value, onChange} = this.props
        return (
            <UISelect
                name="sort_by"
                value={value}
                onChange={(name, value) => onChange(name, value)}
                labelText="Сортировать по"
            >
                {sort_by.map((item) => (
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

export default SortBy;
