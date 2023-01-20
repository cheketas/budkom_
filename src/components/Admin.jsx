import React, { createRef, useRef,useState } from 'react'
import Input from './UI/Input/Input'
import Button_yellow from './UI/Button_yellow/Button_yellow'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Admin = () => {
    const myRef = useRef(null);
    const myRefS = useRef(null);
    const name = useRef(null);
    const image = useRef(null);
    const dexr = useRef(null);
    const navigate = useNavigate()
    const [admin,setadmin] = useState(false)
    function go(){
        if(myRef.current.value=='admin' && myRefS.current.value=='Qwerty3213'){
            setadmin(true) 
        }else{
            alert('неправильно')
        }
    }
    const [file, setFile] = useState();

    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleUpload = () => {
      const formData = new FormData();
      formData.append('file', file);
     
      const data = {
        names: name.current.value,
        dexrs: dexr.current.value
      }
      console.log(data)
      // Send the file to the server using axios
      axios.post('http://budkomphp/uploadblog.php', formData,   {
        headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },params: data
      }).then(response => {
        if(response.data=="Success"){
            alert('OK')
            navigate('/Blog')
        }else{
            alert('ERROR')
            alert(response.data)
        }
      });
    };
  return (
    <div  className='Admin'><h2>Адмін панель</h2>
    {admin?<>
    <h3>Добрий день!</h3>
    <Input   ref={name} style={{border:'1px solid gray',width:'50%'}} placeholder='Назва' /><br/><br/>
    <Input  onChange={handleFileChange} type="file" accept="image/*"  ref={image} style={{border:'1px solid gray',width:'50%'}}  /><br/><br/>
    <textarea  placeholder='Текст' ref={dexr}  style={{border:'1px solid gray',width:'80%',height:'10rem',borderRadius:'5px',fontSize:'20px'}}  ></textarea><br/><br/>
<div onClick={handleUpload}><Button_yellow >Завантажити</Button_yellow></div><br/><br/>

    </>
    :
    <>
    <Input   ref={myRef} style={{border:'1px solid gray',width:'50%'}} /><br/><br/><Input  type='password' ref={myRefS} style={{border:'1px solid gray',width:'50%'}} /><br/><br/><div onClick={go}><Button_yellow>Вхід</Button_yellow></div>
    </>
    
    }
        </div>
  )
}

export default Admin