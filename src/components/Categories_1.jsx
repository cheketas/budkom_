import React from 'react'
import Textmain from './Textmain'
import Listtypes from './Listtypes'
import { useParams } from 'react-router';
const Categories_1 = (props) => {
const category = useParams();
const categories = category.categories
const categoriest = category.cattypes
  return (
    <div className='Categories_1'>
      
        {
          categories == 1 && !categoriest?<p>теплиці</p>:''
        }
        {
          categories == 2 && !categoriest?<p>промисловий профіль</p>:''
        }
        {
          categories == 3 && !categoriest?<p>чавунні вироби</p>:''
        }
        {
          categories == 4 && !categoriest?<p>запчастини для с/г техніки</p>:''
        }

        {
          categoriest==1?<p>балясини</p>:''
        }
        {
          categoriest==2?<p>садово-паркові лавки</p>:''
        }
        {
          categoriest==3?<p>каналізаційні люки</p>:''
        }
        {
          categoriest==4?<p>дощоприймачі каналізації</p>:''
        }
        {
          categoriest==8?<p>вуличні урни</p>:''
        }
        <Listtypes categories = {categories} categoriest={categoriest} />
        <Textmain  categories = {categories} />
    </div>
  )
}

export default Categories_1