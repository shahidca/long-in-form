document.getElementById('transfer-money-btn')
.addEventListener('click', function(e){
    e.preventDefault()
   
    // available balance 
    const myCurrentBalance=availableBalance('current-balance');
    
    // input transfer amount
    const transferInputValue=getInPutByValue('transfer-input-money');
    // date and time
    const d=new Date();
    
    // input transfer pin
    const transferPinNumber=getInPutByValue('transfer-pin-number')
    
    if(transferPinNumber===1234 && transferInputValue < myCurrentBalance && transferInputValue !==isNaN){
        const myNewBalance=myCurrentBalance - transferInputValue;
        document.getElementById('current-balance').innerText=myNewBalance;
        const p=document.createElement('p');
        p.innerText=`${d} you send ${transferInputValue} tk and now you are total balance is ${myCurrentBalance}tk `;
        document.getElementById('transactions-container').appendChild(p)
        
    }else{
        alert('Please try again')
    }
});