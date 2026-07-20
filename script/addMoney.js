document.getElementById('add-money-btn').addEventListener('click',function(){
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
        //1 - history-container ke shore niye ashbo
        const history=document.getElementById('history-container');
        //2- new div create korbo
        const newHistory=document.createElement('div');
        //3- new div innerHTML korbo
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">
                Add Money Success from ${bankAccount}, acc-no ${accno} at ${new Date()}
            </div>
        `
        //4-history-container a newDiv append korbo.
        history.append(newHistory);
    }else{
        alert("Invalid pin!");
        return;
    }

});