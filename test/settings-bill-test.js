'use strict'
let assert = require('assert')
let SettingsBillFactory = require('../settingsBill')

describe('Settings bill Function', function () {

  it ('should return billList', function () {
    var settings = SettingsBillFactory()

    settings.costOfCall(4);
    settings.costOfSMS(4);
    settings.costOfCritical(20)
    settings.costOfWarning(10)

    settings.calculateBill('call')
    console.log(settings.getActionList())
    assert.deepEqual (settings.getActionList(), [

      {
        'cost': 4,
        'timeStamp': 'a few seconds ago',
        'type': 'call'

      }

    ])
  })
})

describe ('The function Settings Bill', function() {
  it ("'The function should take in a call or sms value and tally this total accordingly", function() {
 var factorySettings = SettingsBillFactory()
    factorySettings.costOfCall(5)
    factorySettings.costOfSMS(2)
    factorySettings.costOfWarning(10)
    factorySettings.costOfCritical(15)
    factorySettings.calculateBill('call')

   let  callTotal = factorySettings.returnOftotals()
      assert.equal(callTotal.billCallTotal, 5)
  });

  it("'The function is testing the cost of a call and checking the total bill", function() {
    var factorySettings = SettingsBillFactory()
    factorySettings.costOfSMS(10)
    factorySettings.costOfWarning(20)
    factorySettings.costOfCritical(30)
    factorySettings.calculateBill('sms')

    let  SMSTotal = factorySettings.returnOftotals()

    assert.equal(SMSTotal.billSMSTotal,10)
})
})