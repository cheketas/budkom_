import React,{useContext,useEffect} from 'react';
import classes from './Button_catalogue.module.css';
import { Mycontext } from '../../context/innerpage';
import { useNavigate } from "react-router-dom";
const Button_catalogue = ({children,...props}) => {
  const {innerpage,setinner}=useContext(Mycontext)
  const navigate = useNavigate()
  let bg = {
    backgroundImage: `url('${props.src}')`,
  }
  let bg2 = {
    backgroundImage: `url('${props.src}')`,
    fontSize:'1.6rem'
  }
 
    if(props.size){
      bg=bg2
    }
 
  
  return (
      <button {...props} className={classes.myBtn} style={bg}  onClick={e=>navigate(props.href)}>
            <div className={classes.blur}></div>
           <div className={classes.text_no_blur}>{children}</div> 
      </button>
  )
};

export default Button_catalogue;
