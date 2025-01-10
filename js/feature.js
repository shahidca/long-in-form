// show and hide section here
// add money button
document.getElementById('add-money-button').
addEventListener('click', function(){
    console.log('add money button clicked')
    showSectionById('add-money-form')
});
// cash out button
document.getElementById('cash-out-button').
addEventListener('click', function(){
    showSectionById('withdraw-money-form')
})
// transactions button
document.getElementById('transactions-button').
addEventListener('click', function(){
    showSectionById('transactions-container');
})
// transfer money button
document.getElementById('transfer-money-button').
addEventListener('click', function(){
    showSectionById('transfer-form-container')
})