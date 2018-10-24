const request=require('request');
const expect=require('chai').expect;


const getInfoAuth={
    user:'opall',
    pass:'12345678'
}

const message='';
const sender='';
const receptor=[];



describe('TEST SMSMELLI SMS SERVICE',()=>{

    it('check getting info ',(done)=>{

        request({

            method:'post',
            headers:{'Content-Type':'application/json'},
            url:'http://localhost:3000/getInfo',
            json:{
                auth:getInfoAuth,
                gateway:'smsmelli'
            }
        },(err,res,body)=>{

            expect(body).have.to.have.property('status');
            expect(body).have.to.have.property('msg');
            expect(body).have.to.have.property('success');
            if(body.success===true){                
                expect(body.msg).have.to.have.property('result');
                done();
            }else{
                expect(body.msg).have.to.have.property('message');
                throw Error(body.msg.message)
                done();                
            }

        })
    })

    it('test sending sms',(done)=>{

        request({
            method:'post',
            headers:{'Content-Type':'application/json'},
            url:'http://localhost:3000/sendSms',
            json:{
                auth:getInfoAuth,
                message,
                sender,
                receptor,
                gateway:'smsmelli'
            }
        },(err,res,body)=>{

            expect(body).have.to.have.property('status');
            expect(body).have.to.have.property('msg');
            expect(body).have.to.have.property('success');
            if(body.success===true){                
                expect(body.msg).have.to.have.property('result');
                done();
            }else{
                expect(body.msg).have.to.have.property('message');
                throw Error(body.msg.message)
                done();                
            }
        })
    })
})