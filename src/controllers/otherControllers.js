// Importa todos os serviços
import * as services from '../services/otherServices.js';

// Função para GET em /
async function getRoot(req, res) {
    try { // Primeiro tenta...
        const response = await services.getRoot(); // Chamar o service de GET em /

        res.statusCode = 200; // Caso consiga, retorna o código 200
        res.end(JSON.stringify(response)); // Retorna a resposta
    } catch (error) { // Em caso de erro...
        res.statusCode = 500; // Retorna código 500
        res.end(JSON.stringify({"Error": error.message})); // E mensagem
    }
}

// Função para pegar o sobre
async function getSobre(req, res) {
    try { // Primeiro tenta...
        const response = await services.getSobre(); // Chamar o service de pegar sobre

        res.statusCode = 200; // Caso consiga, retorna código 200
        res.end(JSON.stringify(response)); // Retorna resposta
    } catch (error) { // Em caso de erro...
        res.statusCode = 500; // Retorna código 500
        res.end(JSON.stringify({"Error": error.message})); // E mensagem
    }
}

// Função para pegar status
async function getStatus(req, res) {
    try { // Primeiro tenta...
        const response = await services.getStatus(); // Chamar service de pegar status

        res.statusCode = 200; // Caso consiga, retorna código 200
        res.end(JSON.stringify(response)); // E mensagem
    } catch (error) { // Em caso de erro...
        res.statusCode = 500; // Retorna código 500
        res.end(JSON.stringify({"Error": error.message})); // E mensagem
    }
}

// Exporta as funções para serem utilizadas nas rotas
export {
    getRoot,
    getSobre,
    getStatus
}