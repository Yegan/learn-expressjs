let express = require('express');
let app = express();
let exphbs  = require('express-handlebars');
let bodyParser = require('body-parser');
let factory = require('./settingsBill.js')
const facFunc = factory()
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', function(req, res) {
  res.render('home')
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/settings', function(req, res){
    let smsCost = req.body.smsCost;
    let callCost = req.body.callCost;
    let warningLevel = req.body.warningLevel;
    let criticalLevel = req.body.criticalLevel;

 facFunc.costOfCall(callCost)
 facFunc.costOfSMS(smsCost)
 facFunc.costWarning(warningLevel)
 facFunc.costCritical(criticalLevel)


    // var settings = {
    //   smsCost,
    //   callCost,
    //   warningLevel,
    //   criticalLevel
    // };



    // process data
  //  globalSetings = settings;

    // note that data can be sent to the template
    res.render('home')
});

app.post('/action', function(req,res){
 facFunc.calculateBill(req.body.billType)

 let totals = {
   callTotal: facFunc.costCall(),
   smsTotal: facFunc.costSMS(),
   total:facFunc.totalCS()
 }
 console.log(totals);

res.render('home', totals)
});

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});
