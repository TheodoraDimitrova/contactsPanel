import React from 'react'
import PropTypes from 'prop-types'


 const TextInputGroup=({//coming from props
     label,
     name,
     value,
     placeholder,
     type,
     onChange
 })=> {
  return (
    <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      value={value}
      name={name}
      className="form-control form-control-lg"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
  )
}
TextInputGroup.propTypes={
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}
//set default type to text
TextInputGroup.defaultProps={
    type:"text"
}


export default TextInputGroup;