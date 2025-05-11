const { getMaxListeners } = require('events');
const express = require('express');
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: '<username>',
        pass: 'generated pass'
    }

});

for(let a=1;a<5;a++){

let emails=[
    {name:'<reciever name>',email:'<reciever email'},
    {name:'<reciever name>',email:'reciever email'},
    {name:'<reciever name>',email:'reciever email'}
];
for (const a of emails){
    var mailOption = {
        from: "your email",
        to: a.email,
        subject:"no-reply",
        text:`Hello ${a.name}, 
            Hope you find this mail well. Your ticket have been confirmed.`
    }
    mail();
}
}
function mail(){
    transport.sendMail(mailOption,(error,info)=>{
        if(error){
            return console.error('Error sending email ',error);
        }else{
            return console.log('Email sent ',info.response);
        }
    });


}

