import React from 'react'
import Othercat from './Othercat'
import MainOther from './MainOther'
const Categories = (props) => {
  
  return (
    <div className='Categories'>
        <Othercat path={props.path} />
        {
          props.path=='0'? <MainOther  categoriest='1' />:''
        }
        {
          props.path=='1'? <MainOther  categoriestt='1' />:''
        }
        {
          props.path=='2'? <MainOther contacts='1' />:''
        }
        {
          props.path=='3'? <MainOther about='1' />:''
        }
        {
          props.path=='4'? <MainOther oandd='1' />:''
        }
        {
          props.path=='5'? <MainOther photo='1' />:''
        }
        {
          props.path=='6'? <MainOther blog='1' />:''
        }
    </div>
  )
}

export default Categories