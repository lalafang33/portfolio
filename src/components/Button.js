import React from 'react';
import './Button.css'


const Button = (props) => {
  return (
    <button 
      className='overall-btn'
      style={{
        cursor: 'pointer',
      }}
      onMouseOver={(e) => e.target.style.cursor = 'pointer'}
      onMouseOut={(e) => e.target.style.cursor = 'default'}
    >
      {props.children}
    </button>
  )
}

export default Button;