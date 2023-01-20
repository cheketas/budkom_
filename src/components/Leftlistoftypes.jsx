import React, { useState,useEffect,useContext } from 'react'
import Button_catalogue from './UI/Button_catalogue/Button_catalogue'
import Photo from './UI/Photo/Photo'
import Itempost from './API/Itempost'
import { Mycontext } from './context/innerpage'
import Loader from './UI/Loader/Loader'

const Leftlistoftypes = (props) => {
const {isload,setisload} = useContext(Mycontext)
const [items,setitems] = useState([[],[],[],[]],[[],[],[],[]],[[],[],[],[]],[[]])
  async function Item(type){
      setisload(true)
      if(props.categories){
        const response = await Itempost.getButton(props.categories)
        setitems(response.data)
      }else{
        const response = await Itempost.getButton_(props.categoriest)
        setitems(response.data)
      }
      
      setisload(false)
     
    
  }
  
  useEffect(() => {

    Item(0)
  }, [window.location.pathname]);
  return (
    <div className='Leftlistoftypes'>
       
        
        {props.photo=='1' ? 
  <>
    <Photo  src='/img/main2 1.png'></Photo><br/><br/>
    <Photo  src='/img/main2 1.png'></Photo>
  </> : 
  <>
  {
           props.categories?
          <>
          {isload?<Loader/>:''} 
          {
        
        items.map(
          (items_,index) => {
            if (index % 3 === 0 && items_[0]) {
              return (
                <div className='list_row'>
                  <Button_catalogue key={items_[0]} href={"/Categories/" +props.categories+"/"+ items_[0]} src={items_[2]}>{items_[1]}</Button_catalogue>
                  {items[index + 1] && <Button_catalogue key={items[index + 1][0]} src={items[index + 1][2]} href={"/Categories/" +props.categories+ "/"+ items[index + 1][0]}>{items[index + 1][1]}</Button_catalogue>}
                  {items[index + 2] && <Button_catalogue key={items[index + 2][0]} src={items[index + 2][2]} href={"/Categories/" +props.categories+ "/"+ items[index + 2][0]}>{items[index + 2][1]}</Button_catalogue>}
                  {!items[index + 2]&&items[index + 1]?<Button_catalogue key={items[index + 1][0]-100001} src='/img/black.jpg' href={"/Contacts/"}>Є питання?</Button_catalogue>:''}
                </div>
              )
            }
          }
        )
      }
     
           </>
          :''
        }
      {
           props.categoriest?
          <>
          {isload?<Loader/>:''} 
          {
        
        items.map(
          (items_,index) => {
            if (index % 3 === 0 && items_[0]) {
              return (
                <div className='list_row'>
                  <Button_catalogue key={items_[0]} href={"/Categories/0/" + items_[0]} src={items_[2]}>{items_[1]}</Button_catalogue>
                  {items[index + 1] && <Button_catalogue key={items[index + 1][0]} src={items[index + 1][2]} href={"/Categories/0/" + items[index + 1][0]}>{items[index + 1][1]}</Button_catalogue>}
                  {items[index + 2] && <Button_catalogue key={items[index + 2][0]} src={items[index + 2][2]} href={"/Categories/0/" + items[index + 2][0]}>{items[index + 2][1]}</Button_catalogue>}
                  {!items[index + 2]&&items[index + 1]?<Button_catalogue key={items[index + 1][0]-100001} src='/img/black.jpg' href={"/Contacts/"}>Є питання?</Button_catalogue>:''}
                </div>
              )
            }
          }
        )
      }
     
           </>
          :''
        }  


     

   </>
}
    </div>
  )
}

export default Leftlistoftypes