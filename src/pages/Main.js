import React,{useState,useEffect,useRef,createContext} from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { Mycontext } from '../components/context/innerpage'
import { BrowserRouter,Link,Route, Routes,   } from 'react-router-dom';
 

const Main = () => {
  const [innerpage,setinner] = useState(0);
  const [blog,setblog] = useState([555]);
  const [lastid,setlastid] = useState(0); 
  const [isload,setisload] = useState(false);
  const [up,setUp] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.pageYOffset>window.innerHeight ){
        setUp(1)
      }else{
        setUp(0)
      }
    })
   
  }, []); 
  const contextValue = {
    innerpage,
    setinner,
    blog,
    setblog,
    lastid,
    setlastid,
    isload,
    setisload
  }
  return (
    <div className="Main">
      <Mycontext.Provider value={contextValue}>
      <BrowserRouter>
      <Header  />
        <Content  />
        
        <img src='/img/up.png' onClick={e=>{window.scrollTo({
      top: 0,
      behavior: "smooth"
  });}} className={up==0? 'uppng' : 'uppng uppng2'} />
        <br/>
      <br/>
        {isload?'':<Footer/>}
        </BrowserRouter>
        </Mycontext.Provider>
    </div>
  )
}

export default Main