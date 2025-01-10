// get input by id value
function getInputByPhone(id){
    const inputPhoneNumber=document.getElementById(id).value;
    return inputPhoneNumber

};
// get input by id pin number value
function getInPutByValue(id){
    const pin=document.getElementById(id).value;
    const pinNumber=Number(pin)
    return pinNumber;
}
// available balance function here
function availableBalance(id){
    const currentBalance=document.getElementById(id).innerText;
    const currentBalanceNumber=Number(currentBalance)
    return currentBalanceNumber;
}