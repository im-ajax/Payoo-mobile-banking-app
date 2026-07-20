document.getElementById('cashout-btn').addEventListener('click',function(){
    //1. get the agent number
    const cashoutNumber=getValueFromInput("cashout-number");
    if(cashoutNumber.length!=11){
        alert("Invalid Number!");
        return;
    }
    //2. get the amount
    const cashoutAmount=getValueFromInput("cashout-amount");
    //3. get the current balance, validate, conver to number
    const currentBalance=getBalance();
    //4 calculate balance 
    const newBalance=currentBalance - Number(cashoutAmount);
    if(newBalance<0){
        alert("Invalid Amount!");
        return ;
    }
    const pin=getValueFromInput("cashout-pin");
    if(pin==="1234"){
        alert("Cashout successful");
        setBalance(newBalance);
    }else{
        alert("Invalid Pin!");
        return;
    }
});


// document.getElementById('cashout-btn')
//     .addEventListener('click',function(){
//     //1-get the agent number first and validate
//     const cashoutNumberInput=document.getElementById('cashout-number');
//     const cashoutNumber=cashoutNumberInput.value;
//     if(cashoutNumber.length!=11){
//         alert("Invalid Agent Number");
//         cashoutNumberInput.value="";
//         cashoutAmountInput.value="";
//         cashoutPinInput.value="";
//     }
//     //2. get the amount, validate, conver to number    
//     const cashoutAmountInput=document.getElementById('cashout-amount');
//     const cashoutAmount=cashoutAmountInput.value;
//     //3. get the current balance, validate, conver to number
//     const balanceElement=document.getElementById('balance');
//     const balance=balanceElement.innerText;
//     //4. calculate the new balance
//     const newBalance=Number(balance)-Number(cashoutAmount);
//     if(newBalance<0){
//         alert("Invalid Amount");
//         cashoutAmountInput.value="";
//         cashoutPinInput.value="";
//         return;
//     }
//     //5. get the pin and verify
//     const cashoutPinInput=document.getElementById('cashout-pin');
//     const cashoutPin=cashoutPinInput.value;
//     if(cashoutPin==="1234"){
//         alert("Cashout Successful");
//         balanceElement.innerText=newBalance;
//     }
//     else{
//         alert("Invalid Pin!");
//         cashoutPinInput.value="";
//     }
    
//     //5.1 if true::show an alert > set balance 
//     //5.2 if flase::show an error alert >
//     // return 
// });