import axios from "axios"
export default class Blogpost {
    static async getFirst(number){
        try{
            const data = {
                type: '1'
              }
              const response = await axios.post('http://budkomphp/blog.php', data, {
                headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }
              })
              console.log(response)
              return response
              
        }
        catch(e){
            console.log(e)
        }
    }
    static async getNextone(numberoflast){
        try{
            const data = {
                type: '2',
                id: numberoflast,
              }
              const response = await axios.post('http://budkomphp/blog.php', data, {
                headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }
              })
              console.log(response)
              return response
              
        }
        catch(e){
            console.log(e)
        }
    }
    static async Article(id){
        try{
            const data = {
                type: '3',
                id: id,
              }
              const response = await axios.post('http://budkomphp/blog.php', data, {
                headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }
              })
              console.log(response)
              return response
              
        }
        catch(e){
            console.log(e)
        }
    }

}