/**
    Kavenegar sms gateway
    Author : Raychat
**/

// for make http or https requests
const request = require('request')

/** 
  @param {object} auth
  @param {string} message
  @param {string} sender
  @param {string} receptor
  @param {function} callback
**/

module.exports.sendSms = (auth, message, sender, receptor, callback) => {

    let sendingData = {
        receptor: receptor, // required
        message: message // required        
    }

    let { token } = auth

    if (sender != 'false') {
        sendingData['sender'] = sender
    }

    console.log('sending data', sendingData)

    request.post({
        url: `https://api.kavenegar.com/v1/${token}/sms/send.json`,
        form: sendingData
    }, function (err, httpResponse, body) {
        if (!err) {
            body = JSON.parse(body)
            body.status = 200
            callback({ status: 200, result: 'successfully sent message' })
        } else {
            callback('Error in getting and passing data')
        }
    })
},

    /** 
      @param {string} apikey
      @param {function} callback
    **/
    module.exports.getInfo = (auth, callback) => {

        let { token } = auth

        request.post({
            url: `https://api.kavenegar.com/v1/${token}/account/info.json`,
        }, function (err, httpResponse, body) {
            if (!err) {

                body = JSON.parse(body)
                let value = body.entries.remaincredit
                body.status = 200
                callback({ status: 200, result: `${value / 10} تومان` })
            } else {
                callback({ status: 401, result: 'error in getting data successfully' })
            }
        })
    }