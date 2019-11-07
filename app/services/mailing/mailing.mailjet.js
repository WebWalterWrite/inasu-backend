import dotEnv from 'dotenv';
import mailjet from 'node-mailjet';
import templates from './templates.mailing';
dotEnv.config();
const mj = mailjet.connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

//const getTemplateId = name => Object.values(templates).find( el => el.name === name);


/**
 * @description - Envoyer le mail de confirmation suite à la newletters
 * @param {string} email - mail depuis le fomrulaire 
 */
const sendTemplate = async (name, ...rest) => {
  try {

  const [{firstname, lastname, email}] = rest;
 
  const mailResult = await mj.post("send", { version: 'v3.1'}).request({
      Messages: [
        {
          From: {
            Email: 'contact@inasu.io',
            Name: 'Inasu Team',
          },
          To: [
            {
              Email: email,
              Name: (firstname && lastname) && `${firstname} ${lastname}` || null ,
            },
          ],
          TemplateID: Object.values(templates).find( el => el.name === name).id,
          TemplateLanguage: true,
          Subject: name === 'subscribe' 
          ? '🚀 Your are on the list!'
          : `${firstname} We have you message`,
          Variables: {
            firstname: name === 'confirm' && firstname
          }
        },
      ]
    })

   return mailResult;

  } catch (error) {
    console.log(error)
  }
};

export default sendTemplate;

