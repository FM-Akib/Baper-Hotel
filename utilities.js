function getInputElementById(inputId){
    const DepositAmount= document.getElementById(inputId);
    const stringDepositAmount=DepositAmount.value;
    const DepositAmountInt=parseFloat(stringDepositAmount);
    DepositAmount.value='';
    return DepositAmountInt;
  }
  
  
  function getTextElementById(inputId){
    const previousDepositAmount=document.getElementById(inputId);
    const stringPreviousDepositAmount=previousDepositAmount.innerText;
    const PreviousDepositAmountInt=parseFloat(stringPreviousDepositAmount);
    return PreviousDepositAmountInt;
  }
  
  function setTextElementById(elementid,newValue){
    const TextElement=document.getElementById(elementid);
    TextElement.innerText=newValue;
  }
  
  