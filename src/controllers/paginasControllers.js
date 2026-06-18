// Importa todos os serviços
import * as services from '../services/paginaServices.js';

// Função para pegar a página HTML
async function getPagina(req, res) {
    try { // Primeiro tenta...
        res.setHeader('Content-Type', 'text/html'); // Setar o header como texto e HTML
        
        const response = await services.getPagina(); // Depois pegar a página via serviço

        res.statusCode = 200; // Caso consiga, retorna código 200
        res.end(response); // Depois retorna a página
    } catch (error) { // Em caso de erro 
        res.statusCode = 401; // Retorna código 401
        res.end(JSON.stringify({"Error": error.message})); // E mensagem
    }
}

// Exporta as funções para serem utilizadas nas rotas
export {
    getPagina
}