import {API_PATH} from '../config';
import axios from 'axios';

export async function selectCountry(){
  let res = await axios({
    url:API_PATH.concat('country/'),
    method: 'get'
    })
if(res.status === 200){
    console.log(res.status,"statussssssssss")
}
return res
}
  