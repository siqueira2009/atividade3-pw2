import http from 'http';

import routesAlunos from './src/routes/alunosRoutes.js';
import routesProdutos from './src/routes/produtosRoutes.js';
import routesOthers from './src/routes/otherRoutes.js';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    routesAlunos(req, res);
    routesProdutos(req, res);
    routesOthers(req, res);
});

const PORT = 3000;

server.listen(PORT, () => {
   console.log(`Server initialized at port ${PORT}`); 
});