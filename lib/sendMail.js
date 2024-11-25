const nodemailer = require("nodemailer");

const sendMail = (name, fromEmail, message) => {
	const promise = new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		});

		transporter.sendMail(
			{
				from: "info@affotax.com",
				to: "affotaxit2@gmail.com",
				subject: `Message from Contact Us Page | AffotaxFormations`,
				text: `
				Name: ${name}
				Email: ${fromEmail}
				Message:${message}
				`,
			},

			(error) => {
				if (!error) {
					resolve(true);
				} else {
					reject(false);
				}
			}
		);
	});

	return promise;
};

module.exports = sendMail;
