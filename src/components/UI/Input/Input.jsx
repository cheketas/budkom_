import React from 'react'
import classes from './Input.module.css';
const Input = React.forwardRef(({children,...props},ref) => {
  return (
    <input {...props} className={classes.myBtn} ref={ref} />
  )
});

export default Input