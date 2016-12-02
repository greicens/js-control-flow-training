console.log("login.js loaded");
var userLogin = {userName: "x10", password: '1010'};

function askPassword(){
  return window.prompt("Enter password for user " + userLogin.userName);
}

function verifyLogin(){
  if(askPassword() !== userLogin.password){
    var i = 3;
    while(askPassword() !== userLogin.password && i < 3){
      window.alert("Password Incorrect!");
      askPassword();
      i++;
    }
   }else{
    window.alert("Password Correct!");
  }

}

verifyLogin();
