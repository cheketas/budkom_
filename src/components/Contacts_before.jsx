import React from 'react'
import { useParams } from 'react-router';
const Contacts_before = () => {
  const category = useParams();
const phase = category.phase
  return (
    <div className='Contacts_before'>
       <h2>{phase?'Замовлення':'Контакти'}</h2>
        <h3 className='noh3'>{phase?'Для того, щоб замовити товар, використовуйте один з номерів телефону':'Для того, щоб з нами зв’язатися, використовуйте один з номерів телефону'}:</h3>
        <h4 >
        +(380) 45 63 99912<br/>
+(380) 96 81 29944<br/>
+(380) 93 81 69944<br/>
+(380) 99 45 19994
</h4><h3>АБО</h3>
    </div>
  )
}

export default Contacts_before