document.getElementById('add-money-btn').
addEventListener('click',function(e){
    e.preventDefault();
    // available balance
    const myCurrentBalance=availableBalance('current-balance');
    // input add amount
    const addAmountMoney=getInPutByValue('input-add-money')
    console.log(addAmountMoney);
    // add money pin number
    const addMoneyPinNumber=getInPutByValue('add-money-pin');
    console.log(addMoneyPinNumber)

    if(addMoneyPinNumber===1234){
        const myNewBalance=addAmountMoney + myCurrentBalance;
        document.getElementById('current-balance').innerText=myNewBalance;
        console.log('successfully money added')

    }else{
        alert('invalid pin number please try again')
    }
});