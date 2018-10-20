const chai = require('chai');
const request = require('request');
const expect = chai.expect;


let username = 'YOUR USERNAME';
let password = 'YOUR PASSWORD';
let message = 'salam test melipayamak';
let sender = 'YOUR SENDING NUMBER';
let receptor = 'YOUR TEST NUMBER';
let gateway = 'melipayamak';
let auth = {
    username,
    password
}



describe('TEST MELLI PAYAMAK SERVICE', () => {

    it('test sending sms', (done) => {

        request.post({

            url: 'http://localhost:3000/sendSms',
            form: {
                auth,
                message,
                sender,
                receptor,
                gateway
            }
        }, (err, res, body) => {

            if(err){

                throw Error('eroor')
                done()

            }else{

                expect((JSON.parse(body))['status']).have.to.equal(1);
                done()
            }            
        })
    })


    it('test get sms info',(done)=>{

        request.post({

            url: 'http://localhost:3000/getInfo',
            form: {
                auth,
                gateway
            }
        }, (err, res, body) => {
            
            if(err){

                throw Error('eroor')
                done()

            }else{
                expect((JSON.parse(body))['status']).have.to.equal(1);
                done()
            }            
        })
    })
})