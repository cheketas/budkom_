import React,{useState} from 'react'

import classes from './Photo.module.css';
const Photo = (props) => {
   
      const [zIndex, setZIndex] = useState(0);

const handleMouseEnter = () => {
  setTimeout(() => {
    setZIndex(5);
  }, 0);
}
const handleMouseLeave = () => {
  setTimeout(() => {
    setZIndex(1);
  }, 100);
}
const bg = {
  backgroundImage: `url('${props.src}')`,
  zIndex:zIndex
}
  return (
    <button {...props} className={classes.myBtn} style={bg} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} >
            <div className={classes.blur}></div>
           <div className={classes.text_no_blur}></div> 
      </button>
  )
}

export default Photo