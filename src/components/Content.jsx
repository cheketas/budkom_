import React,{useState,useRef,createContext,useContext, useEffect} from 'react'
import Main_ from './Main_'
import Categories from './Categories'
import { Mycontext } from './context/innerpage'
import { BrowserRouter,Link,Route, Routes,   } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Contacts from './Contacts';
import Main_3 from './Main_3';
import Categories_6 from './Categories_6';
import Categories_7 from './Categories_7';
import Admin from './Admin';
const Content = (ref) => {
  const {innerpage,setinner,isload,setisload}=useContext(Mycontext)

  const [showMain, setShowMain] = useState(true);
const [showLoader, setShowLoader] = useState(false);
const navigate = useNavigate()
const element = useRef(null);

let otherClassName = ''


useEffect(() => {

  if(window.pageYOffset>window.innerHeight && window.location.pathname!='/' || window.pageYOffset<window.innerHeight*0.5 && window.location.pathname!='/' ){
    
      window.scrollTo({
        top: window.innerHeight*0.9,
        behavior: "smooth"
    });
    
    
  }
 
}, [window.location.pathname]); 



  return (
    <div ref={element} className={`Content ${otherClassName}`} >
     
      <Routes>
      <Route path="" element={<Main_ />} />
      <Route  exact path="/Categories" element={<Main_ />} />
      <Route exact path="/Categories/:categories" element={<Categories path='0' />} />
      <Route exact path="/Categories/3/:cattypes" element={<Categories path='0' />} />
      <Route exact path="/Categories/:categories/:type" element={<Categories path='1' />} />
      <Route exact path="/Categories/Contacts" element={<Categories path='2' />} />
      <Route  exact path="/Contacts" element={<Categories path='2'  />} />
      <Route  exact path="/Contacts/:phase/:id" element={<Categories path='2'  />} />
      <Route  exact path="/AboutUs" element={<Categories path='3' />} />
      <Route  exact path="/Delivery" element={<Categories path='4' />} />
      <Route  exact path="/Photo" element={<Categories path='5' />} />
      <Route  exact path="/Blog" element={<Main_3 blog='1' />} />
      <Route  exact path="/Blog/:id" element={<Categories_7 blog='1' />} />
      <Route  exact path="/Admin" element={<Admin />} />
      <Route path="*" element={<Main_ />}  />
    </Routes>
        
    </div>
  )
}
 
export default Content