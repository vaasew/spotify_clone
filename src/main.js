import './style.css';
const APP_URL = import.meta.env.VITE_APP_URL;

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("accessToken")) {
    window.location.href = `${APP_URL}/dashboard/dashboard.html`;
  } else {
    window.location.href = `${APP_URL}/login/login.html`;
  }
})
//page reload at port 3000 due to "start" in package.json


    // window.location.href = 'http://www.google.com'; //Will take you to Google.

