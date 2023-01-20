import React,{useContext} from 'react'
import Header_main from './Header_main'
import Header_photo from './Header_photo'
import Header_photo_text from './Header_photo_text'
import { Mycontext } from './context/innerpage'
const Header = () => {
  return (
    <div className='Header'>
        <Header_main/>
        <Header_photo/>
        <Header_photo_text/>
    </div>
  )
}

export default Header