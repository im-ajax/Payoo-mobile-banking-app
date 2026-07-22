document.getElementById('pay-bill-btn').addEventListener('click',function(){
    const payBank=getValueFromInput('pay-bank');
    if(payBank=="Select a Bank"){
        alert('Please select a Bank!');
        return;
    }
    const payNumber=getValueFromInput('biller-acc-number');
    if(payNumber.length!=11){
        alert("Number not valid!");
        return;
    }
    const payAmmount=getValueFromInput('bill');
    if(payAmmount>getBalance()){
        alert("Not enough money!");
        return;
    }
    const curBalance=getBalance();
    const balanceAfterPay=curBalance-Number(payAmmount);
    const payPin=getValueFromInput('pay-bill-pin');
    if(payPin!="1234"){
        alert("Invalid Pin!");
        return;
    }
    else{
        alert("Bill Paid Successfully!");
        setBalance(balanceAfterPay);
        makeTransaction('pay-bill');
    }
});