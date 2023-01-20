import React, { useContext, useEffect, useState } from 'react'
import Button_green from './UI/Button_green/Button_green'
import { Mycontext } from './context/innerpage'
import Itempost from './API/Itempost'
import Loader from './UI/Loader/Loader'

const Description = (props) => {
  const [maintext,setmaintext]=useState('Про наші теплиці')  
  const [text,settext]=useState("Теплиці - це спеціальні будови, які використовуються для вирощування рослин в умовах, відмінних від природних. Вони використовуються для створення теплого і вологого мікроклімату, необхідного для росту і розвитку рослин. Теплиці можуть бути виготовлені з різних матеріалів, таких як скло, пластик або тканина, і можуть бути різних розмірів, від невеликих домашніх теплиць до великих промислових об'єктів. Вони часто використовуються для вирощування квітів, овочів, фруктів і навіть декоративних рослин. Теплиці дають змогу розширити сезон вирощування рослин і збільшити врожайність, що дуже важливо для фермерів і садівників.")
  
  const {isload,setisload} = useContext(Mycontext)
  const [items,setitems] = useState([[],[],[],[]],[[],[],[],[]],[[],[],[],[]],[[]])
    async function Item(type){
        setisload(true)
        if(props.id){
          const response = await Itempost.getItem(props.id)
          setitems(response.data)
        }else{
          alert('error')
        }
        
        setisload(false)
       
      
    }
    
    useEffect(() => {
      Item(0)
    }, [window.location.pathname]);
  return (
    <div className='Description'>
      {isload?<Loader/>:''} 
      <h2>{items[0][1]} </h2>
      <div className='desc_main'>
<img src={items[0][2]} />
{items[0][4]!='nope'?<>
<div className='main_right'>
<h3>Характеристика</h3>
<div className='main'>
<table className='table_' style={{width: "70%", height: "auto", borderCollapse: "collapse"}}>
  <tr>
    <td style={{border: "none"}}>{items[0][4]} </td>
    <td style={{border: "none"}}>{items[0][9]}</td>
  </tr>
  <tr>
    <td style={{border: "none"}}>{items[0][5]} </td>
    <td style={{border: "none"}}> {items[0][10]}</td>
  </tr>
  <tr>
    <td style={{border: "none"}}>{items[0][6]}</td>
    <td style={{border: "none"}}>{items[0][11]}</td>
  </tr>
  <tr>
    <td style={{border: "none"}}>{items[0][7]}</td>
    <td style={{border: "none"}}>{items[0][12]}</td>
  </tr>
  <tr>
    <td style={{border: "none"}}>{items[0][8]}</td>
    <td style={{border: "none"}}>{items[0][13]}</td>
  </tr>
</table>
   
</div>
</div>
      
      </>:''
    }
</div>
{items[0][3]==1?<h3 className='h3_d'>Працюємо під клієнта, є можливість виготовити теплицю будь-яких розмірів і конфігурацій.</h3>:''}

<h3>Опис</h3>
        <p className='pageofitem_P' dangerouslySetInnerHTML={{__html: items[0][0]}}>
</p>
<div className='question'>
<h3>Хочете замовити?</h3><Button_green  phase='1' id={items[0][3]} >ЗРОБІТЬ ЦЕ</Button_green>
</div>
    </div>
  )
}

export default Description