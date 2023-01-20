import React,{useState,useEffect,useContext} from 'react'
import Article from './UI/Article/Article'
import { useParams } from 'react-router';
import Blogpost from './API/Blogpost';
import Loader from './UI/Loader/Loader';
import { Mycontext } from './context/innerpage';

const Categories_7 = () => {
  const category = useParams();
  const id = category.id
  const [value,setvalue] = useState([[],[],[],[]])
  const {isload,setisload} = useContext(Mycontext)
  async function Article(id){
      setisload(true)
      const response = await Blogpost.Article(id)
      setvalue(response.data)
      setisload(false)
     
  }
  useEffect(() => {
    Article(id)
  }, []);
  return (
    <div className='Main_3'><br/>
    {isload?<Loader/>:''} 
      <h2 className='Main_3h2'>{value[0][1]}</h2> <div style={{display: 'flex', justifyContent: 'center'}}><div className='blogcat'>
         <img src={value[0][3]} width='100%' alt="image"/><br/><br/>
         {value[0][2]}
</div></div> </div>
  )
}

export default Categories_7