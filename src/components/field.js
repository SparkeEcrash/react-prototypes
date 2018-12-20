import React from 'react';

const field = (props) => {
    const {name: name, label: label, type: type, value: value, onChange: onChange} = props;

    return (
        
        <div className="form-group">
            <label>{props.label}</label>
            {/* <input {...props} className="form-control"></input> */}
            <input className="form-control" name={name} type={type} value={value} onChange={onChange} autoComplete="off"></input>
        </div>
    )
}

export default field;