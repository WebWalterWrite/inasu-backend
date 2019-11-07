import app from './app/index';
import http from 'http';


const server = http.createServer(app);

const { PORT=4000 } = process.env;

server.listen( PORT, () => console.log('Server listening on port : ', PORT));

