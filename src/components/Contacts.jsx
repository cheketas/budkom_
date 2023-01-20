import React from 'react'
import Othercat from './Othercat'
import MainOther from './MainOther'

const Contacts = (props) => {
  return (
    <div className='Categories'>
        <Othercat/>
        <MainOther contacts='1'  />
    </div>
  )
}

export default Contacts