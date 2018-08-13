module.exports = function () {
  let billCallTotal = 0
  let billSMSTotal = 0
  let billTotalTotal = 0

  let currentValueOfSMS = 0
  let currentValueOfCall = 0
  let costWarning = 0
  let costCritical = 0

  let actionList = []

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
    if (billTotalTotal >= costWarning && billTotalTotal < costCritical) {
      return 'warning'
    }
    if (billTotalTotal >= costCritical) {
      return 'danger'
    }
  }
  // define a function to get action list
  let getActionList = function () {
    return actionList
  }
  // function that filters list according to type

  function filter (type) {
    const filteredType = []
    for (let i = 0; i < actionList.length; i++) {
      const action = actionList[i]
      if (action.type === type) {
        filteredType.push(action)
      }
    }
    return filteredType
  }

  //  function for calculating the bill
  function calculateBill (checkedRadioButton) {
    var radioTotal = checkedRadioButton
    if (radioTotal !== undefined || radioTotal === '') {
      if (billTotalTotal < costCritical) {
        var billList = {
          type: checkedRadioButton,
          timeStamp: new Date()
        }
       
        if (radioTotal === 'call') {
          billCallTotal += currentValueOfCall
          billList.cost = currentValueOfCall
        } else if (radioTotal === 'sms') {
          billList.cost = currentValueOfSMS
          billSMSTotal += currentValueOfSMS
        }
        if (actionList !== '') {
          billTotalTotal = billSMSTotal + billCallTotal
          actionList.push(billList)

          return billTotalTotal
        }
        actionList.push(billList)

      }
    }
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
    actionList = []
  }

  return {
    costOfCall,
    costOfSMS,
    costOfWarning,
    costOfCritical,
    returnOftotals,
    calculateBill,
    reset,
    levels,
    getActionList,
    filter

  }
}