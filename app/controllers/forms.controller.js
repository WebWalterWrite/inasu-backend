import isValidForm from '../services/validation/form.validation';
import sendTemplate from '../services/mailing/mailing.mailjet';
import sendContactEmail from '../services/mailing/mailing.nodemailer';

/**
 * @description - Envoyer les données formulaires par mail avec confirmation pour l'expéditeur
 */
export const contactForm = async (req, res) => {
  try {

    const form = req.body;

    // Vérifier si des erreurs existent
    const isErrorsForm = isValidForm('contact', form);
    
    // Envoyé les erreurs 
    if(isErrorsForm)
      return res.json(isErrorsForm);

    
    // Envoyé mail si aucune erreur
    const { accepted, rejected } = !isErrorsForm && await sendContactEmail(form);

    // Si mail rejeté renvoyé la reponse avec les données du formulaire
    rejected.length && res.json({success: false, data: form});

    // Si ok envoyé mail de confirmation à l'expéditeur
    const { response: { status }} = accepted.length && await sendTemplate('confirm',form );

    // Vérifié status de l'envoi
    status === 200 ? res.json({ success: true }) : res.json({ success: false })
  }
  catch (error) {
    console.log(error)
  }
};

/**
 * @description - Envoyer mail de confirmation
 *
 */
export const subscribeForm = async (req, res) => {
  try{

  const { email } = req.body;
  
  // Vérifer si des erreurs existent
  const isErrorsForm = isValidForm('subscribe', email);
  
  // Envoyé le mail si aucune erreurs
  const { response: { status }} = !isErrorsForm && await sendTemplate('subscribe', req.body);
  
  /*
  Retourner le status de l'envoi  
  #### A faire !! traiter l'erreur d'echec d'envoi ###
  */
  status === 200 ? res.json({success: true}) : res.json({success: false});
  }
  catch(error){
    console.log(error)
  }
};