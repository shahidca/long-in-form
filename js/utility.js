// get input by id value
function getInputByValue(id){
    const getInputValue=document.getElementById(id).innerText;
    return getInputValue

};
// get input by id  value
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
// show all section
function showSectionById(id){
    // section hide
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('withdraw-money-form').classList.add('hidden');
    document.getElementById('transactions-container').classList.add('hidden');
    // show section
    document.getElementById(id).classList.remove('hidden');

}