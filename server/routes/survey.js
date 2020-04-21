const express = require('express');
const router = express.Router();
var nodemailer = require("nodemailer");
const config = require('../config');

// Test Route.
router.get('', function (req, res) {
    res.json({ 'secret': true });
});

router.post('', function (req, res) {
    const output = `
	<h4>Somebody recently completed a Survey Form in ApartmentMe.</h4>
	<h3>Survey Details</h3>
	<ul>
        <li>Did you find the website user friendly?
            <br /> 
            ${req.body.q1}
        </li>
        <li>Did the website match your expectations?
            <br /> 
            ${req.body.q2}
        </li>
        <li>Are you trying to list or search for apartments?
            <br /> 
            ${req.body.q3}
        </li>
        <li>How likely are you to post your apartments/search for apartments to this website?
            <br /> 
            ${req.body.q4}
        </li>
        <li>Where did you hear about us?
            <br /> 
            ${req.body.q5}
        </li>
        <li>Do you have any suggestions or feedback?
            <br /> 
            ${req.body.q6}
        </li>
	</ul>
	<h3>End of the Survey</h3>
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