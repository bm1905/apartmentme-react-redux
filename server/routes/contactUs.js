const express = require('express');
const router = express.Router();
var nodemailer = require("nodemailer");
const config = require('../config');

// Send Message Route.

// Test route.
router.get('', function(req, res) {
    res.json({'secret': true});
});


router.post('', function (req, res) {
    const output = `
	<h4>Somebody sent a message form Contact Us Form in ApartmentMe.</h4>
	<h3>Message Details</h3>
	<ul>
		<li>Name: ${req.body.name}</li>
		<li>Email: ${req.body.email}</li>
		<li>Subject: ${req.body.subject}</li>
	</ul>
	<h3>Message</h3>
	<p>${req.body.message}</p>
    `;
    
    // Nodemailer setup.
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: config.EMAIL,
            pass: config.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: "ApartmentMe Contact Request Message",
        to: "apartmentme680@gmail.com",
        subject: "Message from ApartmentMe Website",
        text: "",
        html: output
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log("Message Sent: %s", data.messageId);

        return res.json(data.messageId);
    });
});

module.exports = router;