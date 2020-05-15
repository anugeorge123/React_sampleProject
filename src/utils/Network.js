import {API_PATH} from '../config';
import axios from 'axios';

export async function selectCountry(){
  let apiUrl = 'accounts/country/'
  let res = await axios({
    url:API_PATH.concat(apiUrl),
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    })
if(res.status === 200){
    console.log(res.status)
}
return res
}


export async function selectState(){
    let apiUrl = 'accounts/state/'
    let res = await axios({
      url:API_PATH.concat(apiUrl),
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
      })
  if(res.status === 200){
      console.log(res.status)
  }
  return res
  }

  export async function selectCity(){
    let apiUrl = 'accounts/city/'
    let res = await axios({
      url:API_PATH.concat(apiUrl),
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
      })
  if(res.status === 200){
      console.log(res.status)
  }
  return res
  }