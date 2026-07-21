document.getElementById('coupon-btn').addEventListener('click',function(){
    const couponCode=getValueFromInput('coupon-code');
    if(couponCode=="1234"){
        alert("You got 300$ cashback using the coupon");
        //1 - history-container ke shore niye ashbo
        const history=document.getElementById('history-container');
        //2- new div create korbo
        const newHistory=document.createElement('div');
        //3- new div innerHTML korbo
        newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100">
                Got cashback using coupon at ${new Date()}
            </div>
        `
        //4-history-container a newDiv append korbo.
        history.append(newHistory);
    }
    else{
        alert("Invalid Pin!");
        return;
    }
});