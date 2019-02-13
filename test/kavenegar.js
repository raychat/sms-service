const chai = require('chai');
const request = require('request');
const expect = chai.expect;

// config
const token = 'YOR Token';
const gateway = 'kavenegar';
let message = 'salam test kavanegar';
let sender = 'sender Number';
let receptor = 'YOUR TEST NUMBER';

describe('TEST KAVENEGAR SMS SERVICE', () => {
    it('test getting info', (done) => {
        request.post({
            url: 'http://localhost:3000/getInfo',
            form: {
                auth: {
                    token: token
                },
                gateway
            }
        }, (err, res, body) => {
            if (err) {
                throw Error(err)
                done()
            } else {
                expect((JSON.parse(body))['status']).have.to.equal(1);
                done()
            }
        })
    })


    it('test sending sms', (done) => {
        request.post({
            url: 'http://localhost:3000/sendSms',
            form: {
                auth: {
                    token: token
                },
                gateway,
                message,
                sender,
                receptor
            }
        }, (err, res, body) => {
            if (err) {
                throw Error(err)
                done()
            } else {
                expect((JSON.parse(body))['status']).have.to.equal(1);
                done()
            }

        })
    })
})