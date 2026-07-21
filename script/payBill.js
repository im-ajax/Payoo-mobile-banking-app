document.getElementById('pay-bill-btn').addEventListener('click',function(){
    const bankacc=getValueFromInput('pay-bank');
    if(bankacc=="Select a Bank"){
        alert("Please select a bank");
        return;
    }
    // account number extract.
    const accountNumber=getValueFromInput('');
    if(accountNumber!=11){
        alert("Invalid Pin!");
        return;
    }
    const payBill=getValueFromInput('bill');
    const cAmmount=getBalance();
    const nBalance=cAmmount-Number(payBill);
    if(nBalance<0){
        alert("Not enough money!");
        return;
    }
    // setting the pin
    const payPin=getValueFromInput('pay-bill-pin');
    if(payPin==="1234"){
        alert("Bill Successfully paid!");
        setBalance(nBalance);
        const history=document.getElementById('history-container');
        //2- new div create korbo
        const newHistory=document.createElement('div');
        //3- new div innerHTML korbo
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">
                Cashout Success from acc-no ${accno} at ${new Date()}
            </div>
        `
    }
    else{
        alert("Invalid Pin!");
        return;
    }
});