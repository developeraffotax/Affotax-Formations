const nodemailer = require("nodemailer");

const sendMail = async (name, email, message) => {
	// const promise = new Promise((resolve, reject) => {
		

	// 	transporter.sendMail(
	// 		options,

	// 		(error) => {
	// 			if (!error) {
	// 				resolve(true);
	// 			} else {
	// 				reject(false);
	// 			}
	// 		}
	// 	);
	// });

	// return promise;


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });


    const {response} = await transporter.sendMail({
        to: 'affotaxit2@gmail.com',
        from: process.env.GMAIL_USER,
        subject: 'CONTACT US | AFFOTAX FORMATIONS', 
        text: `
            Name: ${name}
            Email: ${email}

            Message: ${message}
        `
    })  


    return response



};

module.exports = sendMail;
