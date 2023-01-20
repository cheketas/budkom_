import React from 'react'
import Button_yellow from './UI/Button_yellow/Button_yellow'
import Input from './UI/Input/Input'
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='Footer'>
      <div className='subFooter'>
 <div class="main-block_footer">
  <div class="div1">
    <h2 className='title3'>КАТАЛОГ</h2>
    <p className='titlep'><span onClick={e=>navigate('/Contacts')}>Теплиці</span><br/>
    <span onClick={e=>navigate('/Contacts')}>Пром профіль</span><br/>
    <span onClick={e=>navigate('/Contacts')}>ПВХ вікна</span><br/>
    <span onClick={e=>navigate('/Contacts')}>Комплектуючі для с/г техніки</span><br/>
    <span onClick={e=>navigate('/Contacts')}>Чавунні вироби</span><br/>
    <span className='dop'>Залишилися питання?</span>
      </p>
      
  </div><div class="divider"></div>
  <div class="div2">
    <h2 className='title3'><span onClick={e=>navigate('/Contacts')}>КОНТАКТИ</span></h2>
    <p className='titlep'>+(380) 45 63 99912<br/>
    budkom@magnus.kiev.ua<br/>
    budkom_buh@ukr.net<br/>
    м.Белая Церковь,<br/>
    вул. А. Шептицкого, 43<br/>
    <span className='dop' onClick={e=>navigate('/Contacts')}>Хочете зв’язатися з нами для консультації?</span></p>
  </div><div class="divider"></div>
  <div class="div3">
    <h2 className='title3'>СОЦІАЛЬНІ МЕРЕЖІ</h2>
    <div class="images-block">
      <a href="https://google.com" target="_blank" rel="noopener noreferrer"><img src={require('../img/image 7.png')} alt="image1"  /></a>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer"><img src={require('../img/image 8.png')} alt="image2" /></a>
    </div>
    <h2 className='title4'>НОВИНИ</h2>
    <p className='title34' >Отримуйте останні новини та оновлення на 
свою еллектронну адресу, вказавши її нижче</p>
    <Input placeholder='Email' type="email"/><br/><br className='brspec' />
    <Button_yellow style={{fontSize:'14px',marginTop:'-15px'}} >Підписатися</Button_yellow>
  </div>

</div></div>
<div className='foot_div'><hr/>© Будком. Всі права збережені.</div>
    </div>
  )
}

export default Footer