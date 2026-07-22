document.getElementById('add-money-btn').addEventListener('click',function(){
    console.log("Add btn clicked");
    const bankAccount =getValueFromInput('add-money-bank');
    if(bankAccount== "Select a Bank"){
        alert("Please select a bank!");
        return;
    }
    const accno=getValueFromInput('add-money-number');
    if(accno.length!=11){
        alert("Invalid acc no");
        return;
    }
    const amount=getValueFromInput("add-money-amount");
    const currentBalance=getBalance();
    const newBalance=getBalance()+Number(amount);
    const pin=getValueFromInput('add-money-pin');
    if(pin== "1234"){
        alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);
        makeTransaction('add-money');
    }else{
        alert("Invalid pin!");
        return;
    }

});