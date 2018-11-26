/**
 * test false gateways to return Error
 * 
 */
const chai = require('chai')
const expect = chai.expect;
const request = require('request');


describe('test Error in False gateway', () => {
    it('check send sms url', () => {
        request({
            method: 'post',
            url: 'http://localhost:3000/sendSms',
            json: {
                auth: 'auth',
                message: 'message',
                sender: 'sender',
                receptor: 'receptor',
                gateway: 'gateway'
            }
        }, (err, resp, body) => {
            if (err) {
                throw Error('error in getting respnse')
            } else {
                expect(body).have.to.have.property('status');
                expect(body).have.to.have.property('msg');
                expect(body['status']).have.to.equal(-5)
            }
        })
    })

    it('check get info url', () => {
        request({
            method: 'post',
            url: 'http://localhost:3000/getInfo',
            json: {
                auth: 'auth',
                gateway: 'gateway'
            }
        }, (err, resp, body) => {
            if (err) {
                throw Error('error in getting respnse')
            } else {
                expect(body).have.to.have.property('status');
                expect(body).have.to.have.property('msg');
                expect(body['status']).have.to.equal(-5)
            }
        })
    })
})