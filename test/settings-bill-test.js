'use strict'

let assert = require('assert')
let SettingsBillFactory = require('../settingsBill')

describe('The function Settings Bill', function(){
//   it("'The function should take in a call or sms value and tally this total accordingly", function(){


//     var factorySettings = SettingsBillFactory();
//     factorySettings.costOfCall(5)
//     factorySettings.costOfWarning(10)
//     factorySettings.costOfCritical(15)
//     factorySettings.calculateBill('call');
//     assert.equal(factorySettings.totalCS(),5);
//   });

//   it("'The function is testing the cost of a call and checking the total bill", function(){


//     var factorySettings = SettingsBillFactory();
//     factorySettings.costOfCall(10)
//     factorySettings.costOfWarning(20)
//     factorySettings.costOfCritical(30)
//     factorySettings.calculateBill('call');
//     assert.equal(factorySettings.totalCS(),10);
// });
//     it("'The function is checking the cost of sms and call and giving the total.", function(){


//       var factorySettings = SettingsBillFactory();
//       factorySettings.costOfSMS(5)
//       factorySettings.costOfCall(2)
//       factorySettings.costOfWarning(20)
//       factorySettings.costOfCritical(30)
//       factorySettings.calculateBill('call');
//       factorySettings.calculateBill('sms');
//       assert.equal(factorySettings.totalCS(),7);

//   });

//   it("'The function is testing whether the bill total is above critical", function(){


//     var factorySettings = SettingsBillFactory();
//     factorySettings.costOfSMS(5)
//     factorySettings.costOfCall(5)
//     factorySettings.costOfWarning(5)
//     factorySettings.costOfCritical(9)
//     factorySettings.calculateBill('call');
//     factorySettings.calculateBill('sms');
//     assert.equal(factorySettings.totalCS(),10);

// });
//   it("'The function is testing the price of two calls", function(){


//     var factorySettings = SettingsBillFactory();
//     // set the price to 5
//     factorySettings.costOfCall(5)

//     // make 2 calls
//     factorySettings.calculateBill('call');
//     factorySettings.getCostOfCall();
//     factorySettings.calculateBill('call');

//     // now the total should be 5 + 5 = 10
//     assert.equal(10, factorySettings.callTotal());
    
// });

});

describe('Settings bill Function', function(){

  // it('Should return warning', function(){
  //   var factorySettings = SettingsBillFactory();
  //   factorySettings.costOfCall(4)

  //   factorySettings.costOfWarning(7)
  //   factorySettings.costOfCritical(10)


  //   factorySettings.calculateBill('call')
  //   factorySettings.calculateBill('call')
  //   factorySettings.calculateBill('call')
  
  //     assert.equal(factorySettings.levels(),'critical' )

  // })

  it('should return billList', function() {
    var settings = SettingsBillFactory()

    settings.costOfCall(4)
    settings.calculateBill('call')

    assert.deepEqual(settings.getActionList(), [

      {
        cost: 4,
        timeStamp: "",
        type: 'call'

      },

    ]);
  });
  
})
