import './style.css'
//page reload at port 3000 due to "start" in package.json

document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("accessToken")){
    window.location.href="dashboard/dashboard.html";
  }
  else{
    window.location.href="login/login.html"
    // window.location.href = 'http://www.google.com'; //Will take you to Google.
  }
})
