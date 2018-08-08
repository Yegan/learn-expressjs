module.exports = function () {
  let billCallTotal = 0
  let billSMSTotal = 0
  let billTotalTotal = 0

  let currentValueOfSMS = 0
  let currentValueOfCall = 0
  let costWarning = 0
  let costCritical = 0

  //  function for Settings
  function costOfCall (CurrentCallPrice) {
    currentValueOfCall = parseFloat(CurrentCallPrice)
  }

  function costOfSMS (currentSMSPrice) {
    currentValueOfSMS = parseFloat(currentSMSPrice)
  }

  function costOfWarning (warningCosts) {
    costWarning = parseFloat(warningCosts)
  }

  function costOfCritical (criticalCosts) {
    costCritical = parseFloat(criticalCosts)
  }

  // function for triggering warning and critical level

  function levels () {
    if (billTotalTotal >= costCritical) {
      return 'danger'
    }
    if (billTotalTotal >= costWarning) {
      return 'warning'
    }
    else {
      return
    }
  }

  //  function for calculating the bill
  function calculateBill (checkedRadioButton) {
    var radioTotal = checkedRadioButton

    if (radioTotal === 'call') {
      billCallTotal += currentValueOfCall
    } else if (radioTotal === 'sms') {
      billSMSTotal += currentValueOfSMS
    }
    billTotalTotal = billSMSTotal + billCallTotal
    return billTotalTotal
  }

  // function that returns values
  function returnOftotals () {
    return {
      billCallTotal,
      billSMSTotal,
      billTotalTotal,
      currentValueOfCall,
      currentValueOfSMS,
      costWarning,
      costCritical,
      levels
    }
  }

  function reset () {
    billCallTotal = 0
    billSMSTotal = 0
    billTotalTotal = 0
    currentValueOfSMS = 0
    currentValueOfCall = 0
    costWarning = 0
    costCritical = 0
  }

  return {
    costOfCall,
    costOfSMS,
    costOfWarning,
    costOfCritical,
    returnOftotals,
    calculateBill,
    reset,
    levels

  }
}
