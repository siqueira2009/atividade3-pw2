// Importa todos os serviços
import * as services from '../services/produtosServices.js';

// Função para pegar por categoria
async function getByCategory(req, res, category) {
    try { // Primeiro tenta
        const response = await services.getByCategory(category); // Chamar o service de pegar por categoria

        res.statusCode = 200; // Caso consiga, retorna o código 200
        res.end(JSON.stringify(response)); // E a resposta
    } catch (error) { // Em caso de erro...
        res.statusCode = 404; // Retorna código 404
        res.end(JSON.stringify({"Error": error.message})); // E a mensagem
    }
}

// Função para pegar todos os produtos
async function getAll(req, res) {
    try { // Primeiro tenta...
        const response = await services.getAll(); // Chamar o service de pegar todos os produtos

        res.statusCode = 200; // Caso consiga, retorna código 200
        res.end(JSON.stringify(response)); // E a resposta
    } catch (error) { // Em caso de erro...
        res.statusCode = 404; // Retorna código 404
        res.end(JSON.stringify({"Error": error.message})); // E a mensagem
    }
}

// Exporta as funções para serem utilizadas nas rotas
export {
    getByCategory,
    getAll
}