import React,{useState,useRef,useEffect,useContext} from 'react'
import Button_green from './UI/Button_green/Button_green'
import Catalog_plus from './Catalog_plus'
import { Mycontext } from './context/innerpage'
import { useNavigate } from "react-router-dom";
const Header_main = () => {
  const [coordinatx,Setcoordinatx]=useState('')
  const [coordinaty,Setcoordinaty]=useState('')
  const [open,Setopen]=useState('')
  const listRef = useRef(null);
  const [showList, setShowList] = useState('img_header_arrrow');
  const navigate = useNavigate()
  const [timoute, settimoute] = useState();
  const [hover,Sethover]=useState(0)
  const handleButtonMouseEnter = () => {
    setShowList('img_header_arrrow img_header_arrrow_')
    Setopen(1)
    
  };
  
  const handleButtonMouseLeave = () => {
    
    settimoute(setTimeout(() => {
      if(hover==0){
      setShowList('img_header_arrrow')
      Setopen(0); 
      clearTimeout(timoute);
      }
    }, 20))
  };

  const handleListMouseEnter = () => {
    Sethover(1)
    Setopen(1)
    clearTimeout(timoute);
  };

  const handleListMouseLeave = () => {
    Sethover(0)
    setShowList('img_header_arrrow')
    clearTimeout(timoute);
    Setopen(0)
  };
  
    useEffect(() => {
      function handleScroll() {
       
if(window.pageYOffset<10){
  handleListMouseLeave()
  
}
        handleListMouseLeave()
       
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  function onClick (e) {
    const element = e.target;
const elementRect = element.getBoundingClientRect();
const x = elementRect.x;
const y = elementRect.y;
    
    Setcoordinatx(x)
    Setcoordinaty(y)
    
    console.log(coordinatx)
  
};
const {innerpage,setinner}=useContext(Mycontext)
  
  return (
    <div className='Header_main' onMouseLeave={handleButtonMouseLeave}>
        <div class="header-container">
        <img src={require('../img/logo3.png')} class="header-logo" onClick={e=>navigate('')} onMouseEnter={handleButtonMouseLeave} />
        <h3 onMouseEnter={handleButtonMouseEnter}
          className='h3_' style={{display:'flex'}}><span onMouseOver={e=>onClick(e)}>КАТАЛОГ</span><img className={showList} src={require('../img/image 9.png')} style={{verticalAlign:'middle'}}/></h3>
        
        <h3 onMouseEnter={handleButtonMouseLeave} onClick={e=>navigate('/AboutUs')} className='h3_ h3_n'>О КОМПАНІЇ</h3>
        <h3 onMouseEnter={handleButtonMouseLeave} className='h3_ h3_n' onClick={e=>navigate('/Blog')}>БЛОГ</h3>
        <h3 onMouseEnter={handleButtonMouseLeave} className='h3_ h3_n' onClick={e=>navigate('/Photo')}>ГАЛЕРЕЯ</h3>
        <h3 className='h3_ h3_n'  onClick={e=>navigate('/Delivery')}>ОПЛАТА ТА ДОСТАВКА</h3>
        <h3 className='h3_ h3_n' onClick={e=>navigate('/Contacts')}>КОНТАКТИ</h3>
        
        <Button_green class="header-button" phase='0' id='0'>ЗАМОВИТИ</Button_green>
        {
                  open? <Catalog_plus ref={listRef}
                  onMouseEnter={handleListMouseEnter}
                  onMouseLeave={handleListMouseLeave} x={coordinatx} y={coordinaty} /> : ''
                }
        </div>
    </div>
  )
}

export default Header_main