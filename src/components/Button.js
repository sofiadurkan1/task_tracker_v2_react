import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text,clickHandler}) => {
   
    return (
        <button onClick ={clickHandler}className="btn" style={{backgroundColor: color}}>{text}</button>
      
    )
}

Button.defaultProps = {
    color:'steelblue'
}

Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
    handleClick:PropTypes.func,
}

export default Button
