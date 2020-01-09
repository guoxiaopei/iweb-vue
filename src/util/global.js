var isLogin = sessionStorage.getItem('uid') ? true : false;
var uname = sessionStorage.getItem('uname');
var uid = sessionStorage.getItem('uid');

const siteName = 'iweb'; 

export default {
  isLogin,
  uname,
  uid,
  siteName
}