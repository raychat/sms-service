const soap = require('soap');

const getInfo = (auth, callback) => {

    let url = 'http://www.smsmelli.com/class/sms/webservice3/server.php?wsdl';

    soap.createClient(url, function (err, client) {
        if (err) {
            callback('Error in getting and passing data');
            return;
        } else {
            client.GetCredit(auth, function (err, result) {
                if (err) {
                    callback({ status: 401, message: 'error in getting data successfuly' });
                    return;
                } else {
                    if (result.return.attributes["$value"] !== '-1') {
                        callback({ status: 200, 'result': `${(Math.floor(result.return["$value"] / 10))} toman` });
                        return;
                    } else {
                        callback({ status: 400, message: 'error in data you have sent' });
                        return;
                    }
                }
            });
        }
    });
}


const sendSms = (auth, message, sender, receptor, callback) => {

    let url = 'http://www.smsmelli.com/class/sms/webservice3/server.php?wsdl';
    let args = {
        user: auth.user,
        pass: auth.pass,
        fromNum: sender,
        toNum: receptor,
        messageContent: message,
        messageType: '1'
    }

    soap.createClient(url, function (err, client) {
        if (err) {
            callback('Error in getting and passing data');
            return;
        } else {
            client.sendSMS(args, function (err, result) {
                if (err) {
                    callback({ status: 401, message: 'error in getting data successfuly' });
                    return;
                } else {

                }

            });
        }

    });


}

module.exports = {

    getInfo

}