import './style.css'
import {APP_URL} from } "./common"
//page reload at port 3000 due to "start" in package.json

document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("accessToken")){
    window.location.href=`${APP_URL}/dashboard/dashboard.html`;
  }
  else{
    window.location.href=`${APP_URL}/login/login.html`
    // window.location.href = 'http://www.google.com'; //Will take you to Google.
  }
})
