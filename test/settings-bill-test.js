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
