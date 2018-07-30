module.exports =function (){

  var billCallTotal = 0;
  var billSmsTotal = 0;
  var billTotalTotal = 0;

  var costSettingSMS = 0;
  var costSettingCall = 0;
  var costOfWarning = 0;
  var costOfCritical = 0;

  //function for Settings
  function costOfCall(callCost) {
    costSettingCall = parseFloat(callCost);
  }

  function costCall(){
    return billCallTotal;
  }

  function costOfSMS(smsCost){
    costSettingSMS = parseFloat(smsCost);
  }

  function costSMS(){
    return billSmsTotal;
  }

  function costWarning(warningCosts){
    costOfWarning = parseFloat(warningCosts)
  }

  function warningCost(){
    return costOfWarning
  }

  function costCritical(criticalCosts){
    costOfCritical = parseFloat(criticalCosts);
  }
  function criticalCost(){
    return costOfCritical;
  }

  function totalCS(){
    return billTotalTotal
  }




  //function for Bill Total
  function calculateBill(checkedRadioButton) {
  var radioTotal = checkedRadioButton

  if (radioTotal === 'call') {
    billCallTotal += costSettingCall;
  } else if (radioTotal === 'sms') {
    billSmsTotal += costSettingSMS;
  }
  billTotalTotal = billSmsTotal + billCallTotal;
  return billTotalTotal;

}

    return{
      costOfCall,
      costCall,
      costOfSMS,
      costSMS,
      calculateBill,
      costWarning,
      warningCost,
      costCritical,
      criticalCost,
      totalCS
    }

}
