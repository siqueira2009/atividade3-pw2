import * as services from '../services/produtosServices.js';

async function getByCategory(req, res, category) {
    try {
        const response = await services.getByCategory(category);

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 404;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

async function getAll(req, res) {
    try {
        const response = await services.getAll();

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 404;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

export {
    getByCategory,
    getAll
}