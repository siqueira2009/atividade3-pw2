import * as services from '../services/alunosServices.js';

// Função para ler body
// Ela faz com que body, que chega em 'chunks', seja construído de parte em parte que chega
const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            resolve(JSON.parse(body));
        });
    });
};


async function getRoot(req, res) {
    try {
        const response = await services.getRoot();

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 401;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

async function getSobre(req, res) {
    try {
        const response = await services.getSobre();

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 401;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

async function getStatus(req, res) {
    try {
        const response = await services.getStatus();

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 401;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

async function postAluno(req, res) {
    try {
        const body = await getRequestBody(req);

        const response = await services.postAluno(body);

        res.statusCode = 201;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 400;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

async function getAluno(req, res, id) {
    try {
        const response = await services.getAluno(id);

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 404;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

async function putAluno(req, res, id) {
    try {
        const body = await getRequestBody(req);
        const response = await services.putAluno(id, body);

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 404;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

async function deleteAluno(req, res, id) {
    try {
        const body = await getRequestBody(req);
        const response = await services.deleteAluno(id);

        res.statusCode = 204;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 404;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

async function getAlunos(req, res) {
    try {
        const response = await services.getAlunos();

        res.statusCode = 200;
        res.end(JSON.stringify(response));    
    } catch (error) {
        res.statusCode = 401;
        res.end(JSON.stringify({"Error": error.message}));
    }
}

export {
    getRoot,
    getSobre,
    getStatus,
    postAluno,
    getAluno,
    putAluno,
    deleteAluno,
    getAlunos
}