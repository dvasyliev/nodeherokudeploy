const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const path = require('path');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dvasyliev.spam@gmail.com',
        pass: 'sP22a191Mm'
    }
});

const mailOptions = {
    from: 'dvasyliev.spam@gmail.com',
    to: 'dvasyliev.dev@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
