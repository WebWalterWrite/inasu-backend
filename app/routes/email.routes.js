import router from './config.routes';
import { contactForm, subscribeForm  } from '../controllers/forms.controller';

router.post('/subscribe', subscribeForm);

router.post('/contact',contactForm);

export default router;