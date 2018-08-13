let assert = require("assert");
// let moment = require('moment');
// var moment =
const settingsBills = require('../settings-bill')

describe('Settings Bill Function ', function() {

  it('should return billList', function() {
    var settings = settingsBills()

    settings.costOfCall(4)
    settings.calculateBill('call')
    console.log(settings.getActionList())
    assert.deepEqual(settings.getActionList(), [

      {
        type: 'call',
        timeStamp: '',
        cost: 4

      },

    ]);
  });
});