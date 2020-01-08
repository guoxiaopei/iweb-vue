var isLogin = sessionStorage.getItem('uid') ? true : false;
var uname = sessionStorage.getItem('uname');

const siteName = 'iweb'; 

export default {
  isLogin,
  uname,
  siteName
}