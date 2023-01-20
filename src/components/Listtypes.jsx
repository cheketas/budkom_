import React from 'react'
import Button_catalogue from './UI/Button_catalogue/Button_catalogue'
import Leftlistoftypes from './Leftlistoftypes'
import Rightlistoftypes from './Rightlistoftypes'
import Centeroftypes from './Centeroftypes'
const Listtypes = (props) => {
  /*<Centeroftypes photo={props.photo} categories={props.categories} categoriest={props.categoriest} />
  <Rightlistoftypes photo={props.photo} categories={props.categories} categoriest={props.categoriest} />*/
  return (
    <div className='Listtypes'>
       <Leftlistoftypes photo={props.photo} categories={props.categories} categoriest={props.categoriest} />
       
    
    </div>
  )
}

export default Listtypes