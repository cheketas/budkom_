import React from 'react'
import Categories_1 from './Categories_1'
import Categories_2 from './Categories_2'
import { BrowserRouter,Link,Route, Routes,  useNavigate } from 'react-router-dom';
import Categories_3 from './Categories_3';
import Categories_4 from './Categories_4';
import Categories_5 from './Categories_5';
import Categories_6 from './Categories_6';
import Categories_7 from './Categories_7';
const MainOther = (props) => {
  
  return (
    <div className='MainOther'>
      {
        props.categoriestt ? <Categories_2  />: ''
      }
      {
        props.categoriest ? <Categories_1  />: ''
      }
      {
        props.contacts ? <Categories_3/>: ''
      }
      {
        props.about ? <Categories_4/>: ''
      }
      {
        props.oandd ? <Categories_5/>: ''
      }
      {
        props.photo ? <Categories_6/>: ''
      }
      {
        props.blog ? <Categories_7/>: ''
      }
    </div>
  )
}

export default MainOther