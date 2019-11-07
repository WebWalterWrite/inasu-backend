import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import emailRoute from './routes/email.routes';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(cors());


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', emailRoute);

export default app;