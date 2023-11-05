document.getElementById("deposit-btn").addEventListener('click',function(){
    const DepositAmountInt=getInputElementById('deposit-input');
    
    if(isNaN(DepositAmountInt)){
        alert("Please enter a valid deposit amount!!");
        return;
    }

   
   const PreviousDepositAmountInt=getTextElementById("previous-deposit-amount");
   const totalDepositAmount=DepositAmountInt+PreviousDepositAmountInt; 
   setTextElementById("previous-deposit-amount",totalDepositAmount)
  

   const TotalAmountFloat=getTextElementById("total-amount");
   const GrandTotal= TotalAmountFloat+DepositAmountInt;
   
   setTextElementById("total-amount",GrandTotal)

})

document.getElementById("Withdraw-btn").addEventListener('click',function() {
  
   const withdrawAmountFloat = getInputElementById("Withdraw-input")
    if(isNaN( withdrawAmountFloat)){
        alert("Please enter a valid withdraw amount!!");
        return;
    }

    const previousWithdrawAmountFloat = getTextElementById("previous-withdraw-amount");

    const TotalAmountFloat=getTextElementById("total-amount");
 
  if( withdrawAmountFloat>TotalAmountFloat){
    alert('Baper hotel e eto tk nai!!')
    return;
  }

    const TotalWithdrawAmount =previousWithdrawAmountFloat+withdrawAmountFloat;

    setTextElementById("previous-withdraw-amount",TotalWithdrawAmount)

    const GrandTotal= TotalAmountFloat-withdrawAmountFloat;
   
    setTextElementById("total-amount",GrandTotal)


})