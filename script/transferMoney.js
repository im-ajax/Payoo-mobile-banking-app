document.getElementById('send-money-btn').addEventListener('click',function(){
    // console.log("send money btn clicked");
    // get the number
    const userNumber=getValueFromInput('send-money-number');
    if(userNumber.length!=11){
        alert('Invalid Number!');
        return;
    }
    // get the amount and update it.
    const sendAmount=getValueFromInput('send-money-amount');
    const curBalance=getBalance();
    const updatedBalance=curBalance-Number(sendAmount);
    if(updatedBalance<0){
        alert("Invalid Amount!");
        return;
    }
    // validate the pin and show alerts and then store it in the transactions
    const pin=getValueFromInput("send-money-pin");
    if(pin==="1234"){
        alert("Cashout successful");
        setBalance(newBalance);
        const history=document.getElementById('history-container');
        //2- new div create korbo
        const newHistory=document.createElement('div');
        //3- new div innerHTML korbo
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">
                send Success from acc-no ${accno} at ${new Date()}
            </div>
        `
    }else{
        alert("Invalid Pin!");
        return;
    }
});