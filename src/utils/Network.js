import {API_PATH} from '../config';
import axios from 'axios';
// import {getData} from './API';

export async function selectCountry(){
  let apiUrl = 'country/'
  let res = await axios({
    url:API_PATH.concat(apiUrl),
    method: 'get',
    headers: {
      // 'Authorization': `Token ${localStorage.getItem('token')?localStorage.getItem('token'):''}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    })
if(res.status === 200){
    console.log(res.status,"statussssssssss")
}
return res
}
  