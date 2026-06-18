import * as services from '../services/paginaServices.js';

async function getPagina(req, res) {
    try {
        res.setHeader('Content-Type', 'text/html');
        const response = await services.getPagina();

        res.statusCode = 200;
        res.end(response);    
    } catch (error) {
        res.statusCode = 401;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

export {
    getPagina
}