import React from 'react'
import classes from './Article.module.css';
import { useNavigate } from "react-router-dom";
const Article = (props) => {
  const navigate = useNavigate()
  return (
    <div className={classes.Article} onClick={e=>navigate('/Blog/'+props.id)} >
        <div class={classes.main_block}>
        <div class={classes.left_block}>
        <img src={props.link} alt="image"/>
        </div>
        <div class={classes.right_block}>
        <h2>{props.name}</h2>
        <hr />
        <p class={classes.text}>{props.vartext} <span href="#" class={classes.read_more}>... читати далі</span>
        </p>
        
        </div>
        </div>
    </div>
  )
}

export default Article