import http from 'http';
import routes from './src/routes/routes.js';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    routes(req, res);
});

const PORT = 3000;

server.listen(PORT, () => {
   console.log(`Server initialized at port ${PORT}`); 
});