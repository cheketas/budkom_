import React,{useEffect, useState} from 'react'
import Input from './UI/Input/Input'
import Button_yellow from './UI/Button_yellow/Button_yellow'
import { useParams } from 'react-router';
import axios from "axios"
const Contacts_form_ = () => {
  
const category = useParams();
const phase = category.phase
const id = category.id
const [phases,setchoises] = useState(phase)
const [ids,setids] = useState(id)

const [name,setname] = useState('')
const [mail,setmail] = useState('')
const [text,settext] = useState('')

  const [choise,setchoise] = useState(0)
  const [cont,setCont] = useState(1)
    function change(n){
      setchoises('1')
      setids(n)
    }
  useEffect(() => {
    setids(id)
    setchoises(phase)
  }, [window.location.pathname]);
  const Mail = () => {
    const data = {
      type: '1',
      name: name,
      mail: mail,
      text: text,
      categories: ids
    }
    axios.post('http://budkomphp/mail.php', data,   {
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    }).then(response => {
      if(response.data=="Success"){
          alert('OK')
      }else{
          alert('ERROR')
          alert(response.data)
      }
    });
  };
  return (
    <div className='Contacts_form_'>
<h3 className='noh3'>Скористайтеся формою нижче, щоб відправити лист на пошту:</h3>
<h3><span>Ваше ім’я:</span></h3>
<Input style={{border:'1px solid gray',width:'50%'}} onChange={e=>setname(e.target.value)}/>
<h3><span>Ваш Email:</span></h3>
<Input  style={{
    border:'1px solid gray',width:'50%'
  }} onChange={e=>setmail(e.target.value)} />
  
  {
phase ?
<>
<h3><span>Товар:</span></h3>
<div className='tovar'>
{
phases == '0' && choise != 1 ?
<>
<div className='leftt'>
<img src='/img/6569357.png' alt="product"  onClick={e=>setchoise(1)} /><p>виберіть</p>
</div>
</>

: null
}
{
phases == '1' ?
<>
{
  ids=='1'?
  <>
  <div className='leftt'>
<img src='/img/6569357.png' alt="product" /><p>теплиці</p>
</div>
  </>:''
}
{
  ids=='2'?
  <>
  <div className='leftt'>
<img src='/img/6569357.png' alt="product" /><p> пром профіль</p>
</div>
  </>:''
}
{
  ids=='3'?
  <>
  <div className='leftt'>
<img src='/img/6569357.png' alt="product" /><p> чугунні вироби</p>
</div>
  </>:''
}
{
  ids=='4'?
  <> 
  <div className='leftt'>
  <img src='/img/6569357.png' alt="product" /><p> с/г запчастини</p>
  </div>
  </>:''
}



</>

: null
}

{
choise === 1 && phases != '1' ?
<>
<div className='leftt'>
<img src='/img/6569357.png' alt="product" onClick={e=>change('1')} /><p>теплиці</p>
</div>
<div className='leftt'>
<img src='/img/6569357.png' alt="product" onClick={e=>change('2')} /><p>пром профіль</p>
</div>
<div className='leftt'>
<img src='/img/6569357.png' alt="product" onClick={e=>change('3')} /><p> чугунні вироби</p>
</div>
<div className='leftt'>
<img src='/img/6569357.png' alt="product" onClick={e=>change('4')} /><p> с/г запчастини</p>
</div>



</>

: null
}
</div>
</> : null
}


   
  
<h3><span>Ваше повідомлення:</span></h3>
<textarea   onChange={e=>settext(e.target.value)} style={{border:'1px solid gray',width:'80%',height:'10rem',borderRadius:'5px',fontSize:'20px'}}  ></textarea><br/><br/>
<div onClick={()=>Mail()} ><Button_yellow >Відправити</Button_yellow></div><br/><br/>
<span style={{fontFamily:'InterLight'}}>якщо, що наш Email: <b>budkom@magnus.kiev.ua</b> та <b>budkom_buh@ukr.net</b></span>
<h3>А ЦЕ</h3>
    </div>
  )
}

export default Contacts_form_