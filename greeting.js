//form 태그를 사용함으로써 이하의 필요가 사라졌다. 하지만 개선해야 할 점이 생겼다. form태그가 백엔드로 정보를 submit 되면서 웹페이지 전체를 새로고침을 해버린다.
const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const nomadoLink=document.querySelector("form a");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";
const savedUsername = localStorage.getItem(USERNAME_KEY);
//const loginFormButton=document.querySelector("#login-form button");
/*function onLoginBtnClick(){
  const username=loginFormInput.value;
  //아래의 if문은 index.html 파일에서 input 속성 15글자 제한이 없다는 가정하에 꼭 필요한 것. html기능을 활용할 수 있다면 활용하는 것이 맞기는 하지만 사용자를 결코 믿어서는 안 된다는 점에서 if문을 사용하는 것은 바람직하다. 연습이니까.
  if(username===""){
    alert("Please write your name!");
  }else if(username.length<16){
    console.log(username);
  }else{
    alert("15자 이내로 입력하세요.");
  }

  console.log(username);
}
loginFormButton.addEventListener("click",onLoginBtnClick);*/
//--------------------------------------------------------
//우리가 함수를 실행하는 게 아니라 js가 실행하는 것이다.
function onLoginSubmit(e){
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  paintingGreeting(username);
}
function paintingGreeting(username){
  greeting.innerText=`Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
if(savedUsername===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  paintingGreeting(savedUsername);
}



