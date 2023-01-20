import React from 'react'
import { useParams } from 'react-router';
const Contacts_after = () => {
  const category = useParams();
  const phase = category.phase
  return (
    <div className='Contacts_after'>
<h3 className='noh3'>Наша фактична адреса:</h3>
<h4>м.Белая Церковь, вул. А. Шептицкого, 43</h4>
<h4 style={{marginBottom:'0'}} className='noh3'><strong>Чекаємо {phase?'ваших замовлень':'на ваші запити'}  і будемо раді відповісти на всі ваші запитання! <br/>
Зв'яжіться з нами!</strong></h4>
    </div>
  )
}

export default Contacts_after