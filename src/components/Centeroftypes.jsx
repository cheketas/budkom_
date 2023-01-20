import React from 'react'
import Button_catalogue from './UI/Button_catalogue/Button_catalogue'
import Photo from './UI/Photo/Photo'
const Centeroftypes = (props) => {
  return (
    <div className='Centeroftypes'>
         {props.photo=='1' ? 
  <>
    <Photo  src='/img/main2 1.png'></Photo><br/><br/>
    <Photo  src='/img/main2 1.png'></Photo>
  </> : 
  <>
   {
           props.categories == 't'?
          <>
         <Button_catalogue href='/Categories/t' src='/img/main2 1.png'>ТЕПЛИЦІ</Button_catalogue><br/><br/>
         <Button_catalogue href='/Categories/t' src='/img/main2 1.png'>ТЕПЛИЦІ</Button_catalogue><br/><br/>
          
           </>
          :''
        }
        {
           props.categories == 'p'?
          <>
         <Button_catalogue href='/Categories/p'  src='/img/01313.jpg' size='1px'>ПРОМИСЛОВИЙ<br/> ПРОФІЛЬ</Button_catalogue><br/><br/>

         <Button_catalogue href='/Categories/p'  src='/img/01313.jpg' size='1px'>ПРОМИСЛОВИЙ<br/> ПРОФІЛЬ</Button_catalogue><br/><br/>
        
          </>
          :''
        }
        {
           props.categories == 'ch'?
          <>
            <Button_catalogue href='/Categories/ch'  src='/img/LS-01-300x225.jpg'>ВИРОБИ <br/>З ЧАВУННА</Button_catalogue><br/><br/>
            <Button_catalogue href='/Categories/ch'  src='/img/LS-01-300x225.jpg'>ВИРОБИ <br/>З ЧАВУННА</Button_catalogue><br/><br/>
       
            <Button_catalogue href='/Categories/ch'  src='/img/LS-01-300x225.jpg'>ВИРОБИ <br/>З ЧАВУННА</Button_catalogue><br/><br/>
       
          </>
          :''
        }
        {
           props.categories == 'sg'?
          <>
                <Button_catalogue href='/Categories/sg'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue><br/><br/>
         
                <Button_catalogue href='/Categories/sg'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue><br/><br/>
                <Button_catalogue href='/Categories/sg'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue><br/><br/>
         
         <Button_catalogue href='/Categories/sg'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue><br/><br/>
   
          </>
          :''
        }
   </>
}
    </div>
  )
}

export default Centeroftypes