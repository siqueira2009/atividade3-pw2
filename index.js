// Importações nativas do Node
import http from 'http';

// Importação de funções de routes
import routesAlunos from './src/routes/alunosRoutes.js';
import routesProdutos from './src/routes/produtosRoutes.js';
import routesOthers from './src/routes/otherRoutes.js';
import paginaRoutes from './src/routes/paginaRoutes.js';

// Criação do servidor, usando o método do http
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    // Pega os status retornados de cada route (útil para saber se tem a rota/método)
    const status1 = routesAlunos(req, res);
    const status2 = routesProdutos(req, res);
    const status3 = routesOthers(req, res);
    const status4 = paginaRoutes(req, res);

    // IFs para para caso não tenho rota ou método
    if (status1 == "no_route" && (status1 == status2 && status2 == status3 && status3 == status4)) {
        res.statusCode = 404;
        res.end(JSON.stringify({response: `Route ${req.url} not found!`}))
    } else if (status1 == "no_method" || status2 == "no_method" || status3 == "no_method" || status4 == "no_method") {        
        res.statusCode = 405;
        res.end(JSON.stringify({response: `Method ${req.method} not found for route ${req.url}!`}))
    }
});

// Coloca o servidor para ouvir na porta 3000
const PORT = 3000;

server.listen(PORT, () => {
   console.log(`Server initialized at port ${PORT}`); 
});