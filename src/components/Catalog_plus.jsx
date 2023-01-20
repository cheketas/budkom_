import React, { useState,useRef } from 'react'
const Catalog_plus = (props) => {
  const toggleRef = useRef();
  const contentRef = useRef();
 const [ishide,Setishide] = useState(1);
 const listRef = useRef(null);
 const [showList, setShowList] = useState(false);
 const [showListPermanently, setShowListPermanently] = useState(false);
 const [timoute, settimoute] = useState();
 const handleButtonMouseEnter = () => {
   setShowList(true);
   Setishide(0)
 };

 const handleButtonMouseLeave = () => {
   setShowListPermanently(false);
   setShowList(false);
   settimoute(setTimeout(() => {
    Setishide(1);
   }, 200))
 };

 const handleListMouseEnter = () => {
   setShowListPermanently(true);
   clearTimeout(timoute);
 };

 const handleListMouseLeave = () => {
   setShowListPermanently(false);
   setShowList(false);
   Setishide(1)
 };
  return (
    <div className='dropdown' style={{left:props.x,zIndex:3}} name={props.x} {...props}>
    <ul className="dropdown-content" style={{zIndex:3}}>
    <li className="dropdown-item">ТЕПЛИЦІ</li>
    <li className="dropdown-item">ПРОМ ПРОФІЛЬ</li>
    <li className="dropdown-item">ПВХ ВІКНА</li>
    <li className="dropdown-item" style={{zIndex:3}}>КОМПЛЕКТУЮЧІ ДЛЯ<br/> С/Г ТЕХНІКИ</li>
    <li className="dropdown-item dropdown-item--has-children"   ref={toggleRef}
         onMouseEnter={handleButtonMouseEnter}
         onMouseLeave={handleButtonMouseLeave}>
      ЧАВУННЯ ВИРОБІ
      <ul className={ishide==1 ? 'is-opens' : 'dropdown-content'}  ref={listRef}
                  onMouseEnter={handleListMouseEnter}
                  onMouseLeave={handleListMouseLeave}>
        <li className="dropdown-item">ОГОРОЖА</li>
        <li className="dropdown-item">БАЛАСИНА</li>
        <li className="dropdown-item">САДОВО-ПАРКОВІ ЛАВКИ</li>
        <li className="dropdown-item">КАНАЛІЗАЦІЙНІ ЛЮКИ</li>
        <li className="dropdown-item">....</li>
        <li className="dropdown-item">ВУЛИЧНІ ЛІХТАРІ </li>
        <li className="dropdown-item">ВУЛИЧНІ СМІТТЯРИ </li>
      </ul>
    </li>
  </ul>
    </div>
  )
}

export default Catalog_plus