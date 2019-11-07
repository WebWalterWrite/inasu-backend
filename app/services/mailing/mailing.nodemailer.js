import nodemailer from 'nodemailer';

const { env: { NODEMAILER_HOST, NODEMAILER_USER, NODEMAILER_PASS, EMAIL_EXP } } = process;

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
    const content = `
        <h1>New Message</h1>
        <p>Pany tu as un nouveau message !!!</p>
        <p>Message de :</p>
        <p>${firstname} ${lastname}</p>
        <p>${message}</p>
        <p>email : ${email}</p>
    `;

    const response = await transporter.sendMail({
      from: EMAIL_EXP,
      to: EMAIL_EXP,
      subject: firstname && `${firstname} vous a écrit...`,
      text: content,
      html: content
    })
    return response;
  }
  catch (err) {
    console.log(err)
  }
};

export default sendContactEmail;