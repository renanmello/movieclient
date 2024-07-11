import axios from 'axios';

export default axios.create({
      baseURL: 'http://54.237.207.74:8080',
      headers:  {"ngrok-skip-browser-warning": "true",
                 "Access-Control-Allow-Headers" : "Content-Type",
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      }
//        baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
//        headers: {"ngrok-skip-browser-warning": "true"}
});