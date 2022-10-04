// get deposit and input value By Id
function getInputValue(inputId) {
    const inputField=document.getElementById(inputId)
    const inputValue=parseFloat(inputField.value)
    inputField.value='';
    return inputValue;
}
// get/set total deposit and withdraw
function setTotal(elementId,amount,isAdding) {
    const previousAmountId=document.getElementById(elementId)
    const previousAmount=parseFloat(previousAmountId.innerText)
    if (isAdding==true) {
        const currentAmount=previousAmount + amount;
        previousAmountId.innerText=currentAmount;
    } else {
        const currentAmount=previousAmount - amount;
        previousAmountId.innerText=currentAmount;
    }
}
// deposit button
const depositBtn=document.getElementById('deposit-btn')
depositBtn.addEventListener('click',function () { 
    const newDepositAmount=getInputValue('deposit-input')
    if (newDepositAmount>0) {
        const depositTotal=setTotal('total-deposit',newDepositAmount,true)
        const balanceTotal=setTotal('total-balance',newDepositAmount,true)
    } else {
        alert('invalid input')
    }
})
// withdraw button
const withdrawBtn=document.getElementById('withdraw-btn')
withdrawBtn.addEventListener('click',function () { 
    const newWithdrawAmount=getInputValue('withdraw-input')
    const previousBalanceId=document.getElementById('total-balance')
    const previousBalance=parseFloat(previousBalanceId.innerText)
    if (newWithdrawAmount>0) {
        if (newWithdrawAmount <= previousBalance) {
            const withdrawTotal=setTotal('total-withdraw',newWithdrawAmount,true)
            const balanceTotal=setTotal('total-balance',newWithdrawAmount,false)
        } else {
            alert('Not enough Balance')
        }
    } else {
        alert('invalid input')
    }
})