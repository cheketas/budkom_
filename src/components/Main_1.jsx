import React from 'react'
import Button_catalogue from './UI/Button_catalogue/Button_catalogue'

const Main_1 = () => {
  return (
    <div className='Main_1'>
        <Button_catalogue href='/Categories/1' src='/img/main2 1.png'>ТЕПЛИЦІ</Button_catalogue>
        <Button_catalogue href='/Categories/2'  src='/img/01313.jpg' size='1px'>ПРОМИСЛОВИЙ<br/> ПРОФІЛЬ</Button_catalogue>
        <Button_catalogue href='/Categories/3'  src='/img/LS-01-300x225.jpg'>ЧАВУННІ<br/>ВИРОБИ</Button_catalogue>
        <Button_catalogue href='/Categories/4'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue>
    </div>
  )
}

export default Main_1