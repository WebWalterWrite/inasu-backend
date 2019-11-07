import nodemailer from 'nodemailer';

const { env: { NODEMAILER_HOST, NODEMAILER_USER, NODEMAILER_PASS } } = process;

const transporter = nodemailer.createTransport({
  host: NODEMAILER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS
  }
});

transporter.verify((error, success) => error 
? console.log('error nodemailer :', error)
: success && console.log("Nodemailer : Server is ready to take our messages")
);

const sendContactEmail = async data => {
  try {
    const { email, firstname, lastname, textarea: message } = data;

    const response = await transporter.sendMail({
      from: 'contact@digithainomad.com',
      to: 'contact@digithainomad.com',
      subject: firstname && `${firstname} vous a écrit...`,
      text: message,
      html: message
    })
    return response;
  }
  catch (err) {
    console.log(err)
  }
};

export default sendContactEmail;