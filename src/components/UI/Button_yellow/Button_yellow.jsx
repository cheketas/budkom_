import React from 'react';
import classes from './Button_yellow.module.css';
import { useNavigate } from "react-router-dom";
const Button_yellow = ({children,...props}) => {
  const navigate = useNavigate()
  return (
      <button {...props} className={classes.myBtn} onClick={e=>navigate(props.href)}>
          {children} 
      </button>
  )
};

export default Button_yellow;