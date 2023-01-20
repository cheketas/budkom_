import React from 'react'
import Description from './Description'
import Textmain from './Textmain'

import { useParams } from 'react-router';
const Categories_2 = () => {
  const category = useParams();
  const categories = category.categories
const id = category.type
  return (
    <div className='Categories_2'>
        
        <Description id={id} />
    </div>
  )
}

export default Categories_2