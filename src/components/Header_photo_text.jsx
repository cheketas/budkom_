import React,{useContext} from 'react'
import Button_yellow from './UI/Button_yellow/Button_yellow'

import { Mycontext } from './context/innerpage'
const Header_photo_text = () => {
  const {innerpage,setinner}=useContext(Mycontext)
  return (
    <div className='Header_photo_text'>
        <h3>НАЙЯКІСНІШІ<br/>
         ТЕПЛИЦІ 
            <br/>
            В УКРАЇНІ</h3>{innerpage}
            <Button_yellow class="">Більше {'>'}</Button_yellow>
    </div>
  )
}

export default Header_photo_text