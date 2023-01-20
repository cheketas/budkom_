import React from 'react'
import Button_green from './UI/Button_green/Button_green'

const Main_2 = () => {
  return (
    <div className='Main_2'>
<div class="main-block">
  <div class="div_left">
    <h2>Переваги нашої компанії</h2>
    <div class="block1">
      <div class="img-block">
        <img src={require('../img/image 3.png')} alt="image"/>
      </div>
      <div class="text-block">
        <p>Висока якість продукції</p>
      </div>
    </div><br/>
    <div class="block2">
      <div class="img-block">
        <img src={require('../img/image 3.png')} alt="image"/>
      </div>
      <div class="text-block">
        <p>Передові технології</p>
      </div>
    </div><br/>
    <div class="block3">
      <div class="img-block">
        <img src={require('../img/image 3.png')} alt="image"/>
      </div>
      <div class="text-block">
        <p>Індивідуальний підхід</p>
      </div>
    </div><br/>
    <div class="block4">
      <div class="img-block">
        <img src={require('../img/image 3.png')} alt="image"/>
      </div>
      <div class="text-block">
        <p>Найкращі теплиці в Україні </p>
      </div>
    </div><br/>
    <Button_green phase='0' id='0' >ЗАТЕЛЕФОНУВАТИ / НАПИСАТИ</Button_green>
  </div>
  <div class="div_right">
    <div>
    <p>Ось уже 15 років роботи у сфері виробництва Торговий дім "БУДКОМ", асоціюється з високоякісними виробами будь-якої складності, здатними задовольнити будь-яку потребу клієнта.</p>
    
    <hr size='0.1' />
    <p>Наша фірма динамічно розвивається. Нові потужності, власні розробки, освоювані передові технології, сучасні матеріали, висока якість продукції, що випускається, індивідуальний підхід відкривають додаткові можливості для задоволення Ваших потреб.</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Main_2