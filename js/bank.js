const depositBtn=document.getElementById('deposit-btn')
depositBtn.addEventListener('click',()=>{
    // get depositInput
    const depositInput=document.getElementById('deposit-input')
    const newDepositAmount=parseFloat(depositInput.value)

   if (newDepositAmount>0) {
     //update deposit 
     const previousDeposit=document.getElementById('total-deposit')
     const previousDepositAmount=parseFloat(previousDeposit.innerText);
     const currentTotalDeposit=previousDepositAmount + newDepositAmount;
     previousDeposit.innerText=currentTotalDeposit;
 
 // update balance
     const previousBalance=document.getElementById('total-balance')
     const previousBalanceAmount=parseFloat(previousBalance.innerText)
     const newBalance=previousBalanceAmount +newDepositAmount;
     previousBalance.innerText=newBalance;
   } else {
    alert('data type error')
   }

// clear input field
    depositInput.value=''
})

const withdrawBtn=document.getElementById('withdraw-btn')
withdrawBtn.addEventListener('click',()=>{
    // get withdrawInput
    const withdrawInput=document.getElementById('withdraw-input')
    const newWithdrawAmount=parseFloat(withdrawInput.value)

    if (newWithdrawAmount>0) {
    //get withdraw 
    const previousWithdraw=document.getElementById('total-withdraw')
    const previousWithdrawAmount=parseFloat(previousWithdraw.innerText);
    

// get balance
    const previousBalance=document.getElementById('total-balance')
    const previousBalanceAmount=parseFloat(previousBalance.innerText)
   if (previousBalanceAmount < newWithdrawAmount) {
    alert('withdraw amount is higher than current balance')  
   } else {
    // set withdraw
    const currentTotalWithdraw=previousWithdrawAmount + newWithdrawAmount;
    previousWithdraw.innerText=currentTotalWithdraw;
    // set balance
    const newBalance=previousBalanceAmount -newWithdrawAmount;
    previousBalance.innerText=newBalance;
   }
   } else {
        alert('data type error')
    }
   
    // clear input field
    withdrawInput.value=''

})

