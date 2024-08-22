import axios from 'axios';

export default axios.create({
      baseURL: 'https://newbuild-v1-0.onrender.com',
      headers:  {"Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Credentials":"false",
                 "Access-Control-Allow-Methods": "*",
                 "Access-Control-Max-Age":"1800",
                 "Access-Control-Allow-Headers":"X-CSRF-Token,X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" 
      }
//        baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
//        headers: {"ngrok-skip-browser-warning": "true"}
});