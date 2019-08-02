import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] ='AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
//It must be named as above
axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
  //this callback error is specifically target the sent request, like internet connecting problems
});

axios.interceptors.response.use(response => {
    console.log(response);
    //Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
    //This is for response.
})
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
