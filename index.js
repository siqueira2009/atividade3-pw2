import http from 'http';
import routesAlunos from './src/routes/alunosRoutes.js';
import routesProdutos from './src/routes/produtosRoutes.js';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    routesProdutos(req, res);
    routesAlunos(req, res);
});

const PORT = 3000;

server.listen(PORT, () => {
   console.log(`Server initialized at port ${PORT}`); 
});