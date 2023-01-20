import React from 'react';
import classes from './Button_green.module.css';
import { useNavigate } from "react-router-dom";
const Button_green = ({children,...props}) => {
  const navigate = useNavigate()
  return (
      <button {...props} className={classes.myBtn} onClick={e=>navigate('/Contacts/'+props.phase+'/'+props.id)}>
          {children}
      </button>
  )
};

export default Button_green;
