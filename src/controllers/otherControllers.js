import * as services from '../services/otherServices.js';


async function getRoot(req, res) {
    try {
        const response = await services.getRoot();

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

async function getSobre(req, res) {
    try {
        const response = await services.getSobre();

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

async function getStatus(req, res) {
    try {
        const response = await services.getStatus();

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

export {
    getRoot,
    getSobre,
    getStatus
}