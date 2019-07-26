import React from 'react';

const RangeInput = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input
            className="form-input"
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value}
            min={props.min}
            max={props.max}
            onChange={props.handleChange}
            />
            <label htmlFor={props.name} className="form-label">{props.value}</label>
        </div>
    )
}

export default RangeInput;