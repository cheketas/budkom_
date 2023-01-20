import React from 'react'
import Button_catalogue from './UI/Button_catalogue/Button_catalogue'
import { useParams } from 'react-router';
const Othercat = () => {
const category = useParams();
const categories = category.categories
const categoriest = category.cattypes
  return (
    <div className='Othercat'>
        
        {
          categories? 
          <>
         <p>інші категорії</p></>
          :''
        }
        
        {
          categoriest? 
          <>
          <p>каталог</p></>
          :''
        }
        {
          !categories && !categoriest ? 
          <>
          <p>каталог</p></>
          :''
        }
        {
          categories == 1 && !categoriest?
          <>
          <Button_catalogue href='/Categories/2'  src='/img/01313.jpg' size='1px'>ПРОМИСЛОВИЙ<br/> ПРОФІЛЬ</Button_catalogue><br/><br/>
        <Button_catalogue href='/Categories/3'  src='/img/LS-01-300x225.jpg'>ЧАВУННІ  <br/>ВИРОБИ</Button_catalogue><br/><br/>
        <Button_catalogue href='/Categories/4'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue>
          </>
          :''
        }
        {
          categories == 2 && !categoriest?
          <>
          <Button_catalogue href='/Categories/1' src='/img/main2 1.png'>ТЕПЛИЦІ</Button_catalogue><br/><br/>
           <Button_catalogue href='/Categories/3'  src='/img/LS-01-300x225.jpg'>ЧАВУННІ  <br/>ВИРОБИ</Button_catalogue><br/><br/>
        <Button_catalogue href='/Categories/4'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue>
         
          </>
          :''
        }
        {
          categories == 3 && !categoriest?
          <>
             <Button_catalogue href='/Categories/1' src='/img/main2 1.png'>ТЕПЛИЦІ</Button_catalogue><br/><br/>
             <Button_catalogue href='/Categories/2'  src='/img/01313.jpg' size='1px'>ПРОМИСЛОВИЙ<br/> ПРОФІЛЬ</Button_catalogue><br/><br/>
        <Button_catalogue href='/Categories/4'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue>
         
         
          </>
          :''
        }
        {
          categories == 4 && !categoriest?
          <>
              <Button_catalogue href='/Categories/1' src='/img/main2 1.png'>ТЕПЛИЦІ</Button_catalogue><br/><br/>
              <Button_catalogue href='/Categories/3'  src='/img/LS-01-300x225.jpg'>ЧАВУННІ  <br/>ВИРОБИ</Button_catalogue><br/><br/>
       
             <Button_catalogue href='/Categories/2'  src='/img/01313.jpg' size='1px'>ПРОМИСЛОВИЙ<br/> ПРОФІЛЬ</Button_catalogue>
         
          </>
          :''
        }
        {
          categories == 0 && !categoriest?
          <>
              <Button_catalogue href='/Categories/3'  src='/img/LS-01-300x225.jpg'>ЧАВУННІ  <br/>ВИРОБИ</Button_catalogue><br/><br/>
             <Button_catalogue href='/Categories/4'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue><br/><br/>
             
             <Button_catalogue href='/Categories/1' src='/img/main2 1.png'>ТЕПЛИЦІ</Button_catalogue><br/><br/>
            
       <Button_catalogue href='/Categories/2'  src='/img/01313.jpg' size='1px'>ПРОМИСЛОВИЙ<br/> ПРОФІЛЬ</Button_catalogue>
       
          </>
          :''
        }
        {
          categoriest?
          <>
             <Button_catalogue href='/Categories/3'  src='/img/LS-01-300x225.jpg'>ЧАВУННІ  <br/>ВИРОБИ</Button_catalogue><br/><br/>
             <Button_catalogue href='/Categories/4'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue><br/><br/>
             
             <Button_catalogue href='/Categories/1' src='/img/main2 1.png'>ТЕПЛИЦІ</Button_catalogue><br/><br/>
            
       <Button_catalogue href='/Categories/2'  src='/img/01313.jpg' size='1px'>ПРОМИСЛОВИЙ<br/> ПРОФІЛЬ</Button_catalogue>
       
          </>
          :''
        }
        {
          !categoriest && !categories?
          <>
             <Button_catalogue href='/Categories/1' src='/img/main2 1.png'>ТЕПЛИЦІ</Button_catalogue><br/><br/>
            
       <Button_catalogue href='/Categories/2'  src='/img/01313.jpg' size='1px'>ПРОМИСЛОВИЙ<br/> ПРОФІЛЬ</Button_catalogue><br/><br/>
        <Button_catalogue href='/Categories/3'  src='/img/LS-01-300x225.jpg'>ЧАВУННІ  <br/>ВИРОБИ</Button_catalogue><br/><br/>
        <Button_catalogue href='/Categories/4'  src='/img/web-components-argiculture-1-300x225.jpg'>ЗАПЧАСТИНИ <br/>ДЛЯ С/Г ТЕХНІКИ </Button_catalogue>
           
       
          </>
          :''
        }
        </div>
  )
}

export default Othercat