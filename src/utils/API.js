import axios from 'axios';
import { API_PATH } from '../config'

export async function getData(url) {
    let headerInfo = null
    if(localStorage.getItem("token")){
      headerInfo = {
          'Authorization': `Token ${localStorage.getItem('token')?localStorage.getItem('token'):''}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      }
    }
    else{
      headerInfo = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      }
    }
    try {
       let res = await axios({
            url: API_PATH.concat(url),
            method: 'get',
            headers: headerInfo

        })
        if(res.status === 200){
            console.log(res.status)
        }
        return res
    }
    catch (err) {
        console.error(err);
    }
}

export async function createData(url, data) {
    const headers = {
        'Authorization': `Token ${localStorage.getItem('token')?localStorage.getItem('token'):''}`, 
    }
    console.log("headerrrrrrr",headers)
       try {
       let res =axios.post(API_PATH.concat(url), data, {headers} )
       console.log(res,"restttttttttttttttttttt")
       return res
    }
    catch (err) {
        console.error(err);
    }
}

export async function createUser(url, data) {

    try {
       let res =axios.post(API_PATH.concat(url), data)
       return res
    }
    catch (err) {
        console.error(err);
    }
}


