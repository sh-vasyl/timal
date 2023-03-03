import nodemailer from 'nodemailer';
const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
	host: config.MAILHOST,
	port: config.MAILPORT,
	auth: {
		user: config.MAILUSER,
		pass: config.MAILPASSWORD,
	},
});

export default defineEventHandler(async (event) => {
	try {

		const body = await readBody(event);

		await content(body)
			.then(async (data) => {
				const mail = await transporter.sendMail({
					form: `"${data.name}"`,
					to: config.CONTACTMAIL,
					subject: data.name,
					html: `
						<strong>Name:</strong> ${data.name}</br>
						<strong>Phone:</strong> ${data.phone}</br>
						<strong>Instagram:</strong> ${data.instagram}</br>
						<strong>Country:</strong> ${data.country}</br>
						<strong>City:</strong> ${data.city}</br>
						<strong>Categories:</strong> ${data.categories}`
				});

				console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mail));
				return Promise.resolve();
			})
			.catch((errors) => {
				return Promise.reject(errors);
			});

		return 'Posted!';
	} catch (error) {
		sendError(event, createError({ statusCode: 400, statusMessage: error }));
	}
});

async function content(body) {
	return Promise.resolve({
		name: body.name,
		phone: body.phone,
		instagram: body.instagram,
		country: body.country,
		city: body.city,
		categories: body.categories
	})
}
