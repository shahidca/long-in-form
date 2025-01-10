document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault()
    console.log('withdraw button clicked')
    // available balance
    const myCurrentBalance=availableBalance('current-balance');
    // withdraw input agent number value
    const withdrawAgentNumber=getInPutByValue('withdraw-input-agent-number');
    console.log(withdrawAgentNumber)
    // withdraw input amount value
    const withdrawInputAmount=getInPutByValue('input-withdraw-amount');
    console.log(withdrawInputAmount)
    // withdraw pin number
    const d= new Date();
    const withdrawPinNumber=getInPutByValue('withdraw-pin-number');
    console.log(withdrawPinNumber)
    if(withdrawPinNumber===1234 && withdrawInputAmount < myCurrentBalance && withdrawInputAmount!=isNaN){
        const myNewBalance= myCurrentBalance - withdrawInputAmount;
        document.getElementById('current-balance').innerText=myNewBalance;
        console.log('successfully you are withdraw amount');
        // transactions history added here
        const p=document.createElement('p');
        p.innerText= ` ${d} You withdraw ${withdrawInputAmount} tk  and now your total balance ${myNewBalance} tk.`
        console.log(p)
        document.getElementById('transactions-container').appendChild(p);
    }else{
        alert('invalid pin number please try again')
    }
})