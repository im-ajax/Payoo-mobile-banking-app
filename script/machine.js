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
    // console.log(`Add Money - ${addMoney},Cashout -${cashOut}`);
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    const selected=document.getElementById(id);
    selected.classList.remove('hidden');

}