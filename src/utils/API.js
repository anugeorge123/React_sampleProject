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
            // timeout: 8000,
            headers: headerInfo

        })
        if(res.status === 200){
            // test for status you want, etc
            console.log(res.status)
        }
        // Don't forget to return something
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
    try {
       let res =axios.post(API_PATH.concat(url), data, {headers} )
       return res
    }
    catch (err) {
        console.error(err);
    }
}





export async function patchData(url, data) {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')?localStorage.getItem('token'):''}`,
    }
    try {
       let res =axios.patch(API_PATH.concat(url), data ,{ headers: headers})
       return res
    }
    catch (err) {
        console.error(err);
    }
}

export async function deleteData(url) {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('token')?localStorage.getItem('token'):''}`,

    }
    try {
       let res = axios.delete(API_PATH.concat(url),{ headers: headers})
       return res
    }
    catch (err) {
        console.error(err);
    }
}