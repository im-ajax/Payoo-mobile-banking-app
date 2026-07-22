document.getElementById('coupon-btn').addEventListener('click',function(){
    const couponCode=getValueFromInput('coupon-code');
    if(couponCode=="1234"){
        alert("You got 300$ cashback using the coupon");
        makeTransaction('coupon');
    }
    else{
        alert("Invalid Pin!");
        return;
    }
});