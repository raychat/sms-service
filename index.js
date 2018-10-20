var express = require('express')
var bodyParser = require('body-parser')
var gateways = require('./gateways/gateways.json')
var app = express()
const port = 3000


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse application/json
app.use(bodyParser.json())
app.use(express.static('assets'))


/** 
  @param {string || object} auth
  @param {string} message
  @param {string} sender
  @param {string} receptor
  @param {string} gateway
**/
app.post('/sendSms', (req, res) => {
    const {
        auth, // required
        message, // required
        sender, // optional
        receptor, //required
        gateway // required
    } = req.body

    if (!auth || !message || !receptor || !gateway) {
        res.send({
            status: -1,
            msg: "Please send all required parametrs"
        })
        return
    }
    //TODO check gateway is exsist or not

    require(`./gateways/${gateway}`).sendSms(auth, message, sender, receptor, (result) => {
        if (result) {
            // if result is success
            if (result.status) {
                if (result.status === 200) {
                    res.send({"status": 1,"msg": result,"success": true})
                } else {
                    res.send({"status": -2,"msg": result,"success": false})
                }
            }
            // when something wrong happen
            else {
                res.send({"status": -3,"msg": result,"success": false})
            }
        }
    })
})

/** 
  @param {string || object} auth
  @param {string} gateway
**/
app.post('/getInfo', (req, res) => {
    const {
        auth, // required
        gateway // required
    } = req.body

    if (!auth) {
        res.send({status: -1,msg: "please send all required fields"})
    }
    require(`./gateways/${gateway}`).getInfo(auth, (result) => {
        if (result) {
            // if result is success
            if (result.status) {
                if (result.status === 200) {
                    res.send({"status": 1,"msg": result,"success": true})
                } else {
                    res.send({"status": -2,"msg": result,"success": false})
                }
            }
            // when something wrong 
            else {
                res.send({"status": -3,"msg": result,"success": false})
            }
        }
    })
})




// gateways list 
app.get('/gateways', (req, res) => {
    res.send(gateways)
})



app.listen(port)
console.log(`service started at port ${port}`)