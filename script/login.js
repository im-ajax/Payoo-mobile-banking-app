document.getElementById('login-btn').addEventListener('click',function(){
    // get the mobile number input
    const numberInput=document.getElementById('input-number');
    const contactNumber=numberInput.value;

    // get the pin
    const inputPin=document.getElementById('input-pin');
    const pin=inputPin.value;
    // match pin & mobile number
    if(contactNumber=="01643982509" && pin=="1234"){
        // 3-1 true::>alert>homepage
        alert("Login Success");
        //window.location.replace("")
        window.location.assign("/home.html");
    }
    else{
        // 3-1 false:::>alert>return
        alert("login failed!");
        return;
    }
})