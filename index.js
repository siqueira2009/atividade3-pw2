import http from 'http';

import routesAlunos from './src/routes/alunosRoutes.js';
import routesProdutos from './src/routes/produtosRoutes.js';
import routesOthers from './src/routes/otherRoutes.js';
import paginaRoutes from './src/routes/paginaRoutes.js';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const status1 = routesAlunos(req, res);
    const status2 = routesProdutos(req, res);
    const status3 = routesOthers(req, res);
    const status4 = paginaRoutes(req, res);

    if (status1 == "no_route" && (status1 == status2 && status2 == status3 && status3 == status4)) {
        res.statusCode = 404;
        res.end(JSON.stringify({response: `Route ${req.url} not found!`}))
    } else if (status1 == "no_method" || status2 == "no_method" || status3 == "no_method" || status4 == "no_method") {        
        res.statusCode = 405;
        res.end(JSON.stringify({response: `Method ${req.method} not found for route ${req.url}!`}))
    }
});

const PORT = 3000;

server.listen(PORT, () => {
   console.log(`Server initialized at port ${PORT}`); 
});