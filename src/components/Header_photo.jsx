import React,{useState,useEffect,useContext} from 'react'

import { Mycontext } from './context/innerpage'
const Header_photo = () => {
  const [photo, setphoto] = useState("header-photo");
  const [photo2, setphoto2] = useState("header-photo2");
  const [photoh, setphotoh] = useState(0);
  const [src1, setsrc1] = useState('/img/main2 1.png');
  const [src2, setsrc2] = useState('/img/main3 1.png');
  
  const {innerpage,setinner}=useContext(Mycontext)
  

  useEffect(() => {
    if(photoh!=0){
      if(photoh%2!=0){  
        setphoto("header-photo slide-out-left");
      setphoto2("header-photo2 slide-out-left");
        
      }else{
        setphoto("header-photo2 slide-out-left");
      setphoto2("header-photo slide-out-left");
      }
      
      
      setTimeout(() => {
        
        if(photoh%2!=0){  
          setinner(2)
          setphoto2("header-photo");
          setphoto("header-photo2");
          
        }else{
          setinner(1)
          setphoto2("header-photo2");
          setphoto("header-photo");
        }
        
        
      }, 999);
      
    }
      setTimeout(() => { 
        setphotoh(photoh+1)
      },10000);
    
  },[photoh])

  
  return (
    <div className='Header_photo'>
        <img src={src1} class={photo} />
        <img src={src2} class={photo2} />
    </div>
  )
}

export default Header_photo