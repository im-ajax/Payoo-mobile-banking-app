// machine id -> can provide input value
function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    return value;
}
// machine -> balance
function getBalance(){
    const balanceElement=document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}
//machine value -> set balance
function setBalance(value){
    const balanceElement=document.getElementById('balance');
    balanceElement.innerText=value;
}
//machine id -> will hide everyone and show that specific according to the click
function showOnly(id){
    const addMoney=document.getElementById('add-money');
    const cashOut=document.getElementById('cashout');
    const sendMoney=document.getElementById('send-money');
    const bonus=document.getElementById('coupon');
    const payment=document.getElementById('pay-bill');
    const transaction=document.getElementById('history');
    // console.log(`Add Money - ${addMoney},Cashout -${cashOut}`);
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    sendMoney.classList.add('hidden');
    bonus.classList.add('hidden')
    payment.classList.add('hidden')
    transaction.classList.add('hidden')

    const selected=document.getElementById(id);
    selected.classList.remove('hidden');
}
//transaction history maker
function makeTransaction(id){
    //1 - history-container ke shore niye ashbo
    const history=document.getElementById('history-container');
    //2- new div create korbo
    const newHistory=document.createElement('div');
    //3- new div innerHTML korbo
    if(id=='add-money'){
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">Add money Successful at ${new Date()}
            </div>
        `
    }
    else if(id=='cashout'){
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">Cash Out Succssful at ${new Date  ()}
            </div>
        `
    }
    else if(id=='send-money'){
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100">
            Send Money Success from at ${new Date()}
        </div>
    `
    }
    else if(id=='coupon'){
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100">
            Coupon code Success from at ${new Date()}
        </div>
    `
    }
    else if(id=='pay-bill'){
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">Bill paid at ${new Date()}
            </div>
        `
    }
    //4-history-container a newDiv append korbo.
    history.append(newHistory);
}