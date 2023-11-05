document.getElementById("submit-btn").addEventListener('click',function(){
   
    const emailField=document.getElementById("email");
    const email=emailField.value;

    const passFeild = document.getElementById("password");
    const pass = passFeild.value;

    if(email=="muntasirakib@gmail.com" && pass=="1234"){
       window.location.href='bank.html';
    }
    else{
       alert("Log in failed.");
    }
})