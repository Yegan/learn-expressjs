let express = require('express')
let app = express()
let exphbs = require('express-handlebars')
let bodyParser = require('body-parser')
let factory = require('./settingsBill')
let facFunc = factory()

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('home', facFunc.returnOftotals())
})

// Route settings, saving values or storing values on the server

app.post('/settings', function (req, res) {
  // extract all the settings values
  let CurrentCallPrice = req.body.callCost
  let currentSMSPrice = req.body.smsCost
  facFunc.costOfSMS(currentSMSPrice)
  facFunc.costOfCall(CurrentCallPrice)

  let warningLevel = req.body.warningLevel
  let criticalLevel = req.body.criticalLevel
  facFunc.costOfWarning(warningLevel)
  facFunc.costOfCritical(criticalLevel)
  res.redirect('/')
})

app.post('/action', function (req, res) {
  // extracbillTypet all the settings values
  let billType = req.body.billType
  facFunc.calculateBill(billType)
  res.redirect('/')
})

app.post('/clear', function (req, res) {
  facFunc.reset()
  res.redirect('/')
})

app.get('/actions', function (req, res) {
  res.render('display')
})

let PORT = process.env.PORT || 3007

app.listen(PORT, function () {
  console.log('App starting on port', PORT)
})
