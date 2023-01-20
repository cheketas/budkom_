import React,{useState,useEffect} from 'react'
import Button_green from './UI/Button_green/Button_green'
const Textmain = (props) => {
  const [maintext,setmaintext]=useState('Про наші теплиці')  
  const [text,settext]=useState("Теплиці - це спеціальні будови, які використовуються для вирощування рослин в умовах, відмінних від природних. Вони використовуються для створення теплого і вологого мікроклімату, необхідного для росту і розвитку рослин. Теплиці можуть бути виготовлені з різних матеріалів, таких як скло, пластик або тканина, і можуть бути різних розмірів, від невеликих домашніх теплиць до великих промислових об'єктів. Вони часто використовуються для вирощування квітів, овочів, фруктів і навіть декоративних рослин. Теплиці дають змогу розширити сезон вирощування рослин і збільшити врожайність, що дуже важливо для фермерів і садівників.")
 
  const textp = `
Основною відмінною рисою нашого промислового ПВХ профілю є його універсальність і багатофункціональність.


На відміну від класичних віконних ПВХ профілів відомих виробників, наш металопластиковий профіль використовується без склопакетів і дає змогу замість склопакета використовувати різні огороджувальні будівельні елементи (скло, полікарбонат тощо).


Такі системи ПВХ профілів володіють унікальними технічними характеристиками і розроблялися, в першу чергу, для вирішення промислових завдань широкого спектра. Область застосування даної моделі профілю дуже широка і може бути з успіхом використана для скління промислових приміщень різного призначення.


Купуючи віконні системи, теплиці з унікального ПВХ-профілю, виробництва ТД Будком, Ви заощаджуєте кошти не тільки на вартості конструкції, а й у майбутньому, істотно скорочуєте витрати на опалення Ваших об'єктів.
  `
 
  useEffect(()=>{
    if(props.categories==2){
      setmaintext('Про наш профіль') 
      
      settext(textp)
    }else if(props.categories==3){
      setmaintext() 
      settext()
    }else if(props.categories==4){
      setmaintext()
      settext()
    }else if(props.categories==1){
      setmaintext('Про наші теплиці')
      settext("Теплиці - це спеціальні будови, які використовуються для вирощування рослин в умовах, відмінних від природних. Вони використовуються для створення теплого і вологого мікроклімату, необхідного для росту і розвитку рослин. Теплиці можуть бути виготовлені з різних матеріалів, таких як скло, пластик або тканина, і можуть бути різних розмірів, від невеликих домашніх теплиць до великих промислових об'єктів. Вони часто використовуються для вирощування квітів, овочів, фруктів і навіть декоративних рослин. Теплиці дають змогу розширити сезон вирощування рослин і збільшити врожайність, що дуже важливо для фермерів і садівників.")
    }
  },[window.location.pathname])
  return (
    <div className='Textmain'>

        <h3>{maintext}</h3>
        <p>{text}
</p>
<div className='question'>
<h3>Хочете замовити?</h3><Button_green phase='1' id={props.categories} >ЗРОБІТЬ ЦЕ</Button_green>
</div>
        
    </div>
  )
}

export default Textmain