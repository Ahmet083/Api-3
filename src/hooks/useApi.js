
//  import axios, { Axios } from "axios";

//  //const axios = require('axios').default

//  export default function useApi() {
//    const baseApiUrl = "https://api.adoptez1artisan.com/"
   
//    axios.defaults.baseURL = baseApiUrl

//    const token = localStorage.getItem("token")
//    if ( token ) {
//       console.log("TOKEN_MEVCUT", token)
//       //axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
//       axios.defaults.headers.common['Authorization'] = `Bearer ${ token }`
//    }
//     return axios

//  }



import axios from 'axios'

const useApi = () => {
  const baseApiUrl = 'https://api.adoptez1artisan.com/'

  axios.defaults.baseURL = baseApiUrl

  const token = localStorage.getItem('token')
  if (token) {
    console.log('>> TOKEN MEVCUT ', token)

    axios.defaults.headers.common['Authorization'] = `Bearer  ${token}`
  }

  return axios
}

export default useApi