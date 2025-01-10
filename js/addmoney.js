document.getElementById('add-money-btn').
addEventListener('click',function(e){
    e.preventDefault();
    // available balance
    const myCurrentBalance=availableBalance('current-balance');
    // input value of bank
    // const agentBank=getInputByValue('input-select-bank');
    // console.log(agentBank);
    // input add amount
    const addAmountMoney=getInPutByValue('input-add-money')
    console.log(addAmountMoney);
    // add money pin number
    const addMoneyPinNumber=getInPutByValue('add-money-pin');
    console.log(addMoneyPinNumber)
    const d = new Date();

    if(addMoneyPinNumber===1234 && addAmountMoney!=isNaN){
        const myNewBalance=addAmountMoney + myCurrentBalance;
        document.getElementById('current-balance').innerText=myNewBalance;
        // transactions history added here
        const p=document.createElement('p');
        p.innerText= ` ${d} You added ${addAmountMoney} tk  and now your total balance ${myNewBalance} tk.`
        console.log(p)
        document.getElementById('transactions-container').appendChild(p);

    }
    else{
        alert('invalid pin number please try again')
    }
});