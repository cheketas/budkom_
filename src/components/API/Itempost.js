import axios from "axios"
export default class Itempost {
    static async getButton(type){
        try{
            const data = {
                type: type
              }
              const response = await axios.post('http://budkomphp/itempost.php', data, {
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
    static async getButton_(type){
        try{
            const data = {
                type: type,
                cat: '1',
              }
              const response = await axios.post('http://budkomphp/itempost.php', data, {
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
    static async getItem(type){
        try{
            const data = {
                type: type,
                id: '1',
              }
              const response = await axios.post('http://budkomphp/itempost.php', data, {
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