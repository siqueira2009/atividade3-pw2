import fs from 'fs';

const JSON_PATH = 'src/data/alunos.json';

function getRoot() {
    return {
        response: "Request received at GET /"
    }
}

function getSobre() {
    return {
        response: "Request received at GET /sobre",
        message: "My name is Lucas and I'm 16 years old"
    }
}

function getStatus() {
    return {
        response: "Request received at GET /status",
        online: true
    }
}

function getAlunos() {
    
    let data = fs.readFileSync(JSON_PATH, 'utf-8');
    data = JSON.parse(data);
    
    return {
        response: "Request received at GET /alunos",
        data: data,
    }
}

export {
    getRoot,
    getSobre,
    getStatus,
    getAlunos
}