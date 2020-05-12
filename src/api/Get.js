import {API_PATH} from '../config';
import axios from 'axios';

export function selectCountry(){
      const endpoint = API_PATH.concat('country/');
       axios.get(endpoint)
       .then(function (response) {
        console.log(response.data.data,'res');
        return response.data.data
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  