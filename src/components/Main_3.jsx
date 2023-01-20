import React, { useState,useEffect,useContext } from 'react'
import Article from './UI/Article/Article'
import Button_yellow from './UI/Button_yellow/Button_yellow'

import { Mycontext } from '../components/context/innerpage'
import axios from 'axios'; 
import Blogpost from './API/Blogpost';
import Loader from './UI/Loader/Loader';
const Main_3 = (props) => {
  const {blog,setblog,lastid,setlastid,innerpage,setinner} = useContext(Mycontext);
  const [visibleb,setvisibleb] = useState(true)
  const {isload,setisload} = useContext(Mycontext)
  async function Blogposts(number){
    if(!props.blog || blog[0]==555 && props.blog){
      console.log(innerpage)
      setisload(true)
      const response = await Blogpost.getFirst(number)
      setblog(response.data)
      setisload(false)
      setlastid(blog[blog.length - 1][4])
      if(props.blog){
        Nextone()
      }
    }
    
  }
  async function Nextone(){
    if(props.blog && blog[0]!=555){
      setisload(true)
      const response = await Blogpost.getNextone(blog[blog.length - 1][4])
      /*
      for(let i = 0; i < response.data.length; i++) {
        blog.push(response.data[i]);
      }
      setblog([...blog]);
      */
      let newBlog = blog.concat(response.data);
      setblog([...newBlog]);
      setisload(false)

    }
    
  }
  async function Forward(){
    if(props.blog && blog[0]!=555){
      setisload(true)
      const response = await Blogpost.getNextone(blog[blog.length - 1][4])
      
      let newBlog = blog.concat(response.data);
      setblog([...newBlog]);
      if(!response.data[1]){
        setvisibleb(false)
      }
      setisload(false)
    }
    
  }
  useEffect(() => {
    Nextone()
    Blogposts(1)
  }, []); 
  return (
    <div className='Main_3'><br/>
      <h2 className='Main_3h2'> Блог Budkom</h2> 
      <div style={{display: 'flex', justifyContent: 'center'}}><div className='d76'>
      <br/> {
        
        blog.map(
          (blogs) => <><Article key={blogs[0]} link={blogs[3]} vartext={blogs[2]} name={blogs[1]} id={blogs[0]}  /><br/> </>
        )
      }
     {isload?<Loader/>:''} 
      {
        props.blog?
         <>
        
      <center>
       {visibleb?<div onClick={Forward}><Button_yellow href='' >Далі</Button_yellow></div>:''} 
      </center>
        </>
        :
        <>
        <center>
        <Button_yellow href='/Blog' >Більше статей</Button_yellow>
      </center>
        </>
      }
      
      </div></div>
    </div>
  )
}

export default Main_3