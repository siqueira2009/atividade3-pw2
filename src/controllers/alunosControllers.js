// Importa todos os serviços
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

// Função para pegar TODOS os alunos
async function getAlunos(req, res) {
    try { // Primeiro tenta...
        const response = await services.getAlunos(); //... chamar o service de pegar TODOS os alunos

        res.statusCode = 200; // Se conseguir, retorna código 200
        res.end(JSON.stringify(response)); // E a resposta
    } catch (error) { // Caso dê erro...
        res.statusCode = 404; //... retorna código 404
        res.end(JSON.stringify({"Error": error.message})); // E a mensagem de erro
    }
}

// Função para pegar UM aluno específico
async function getAluno(req, res, id) {
    try { // Primeiro tenta...
        const response = await services.getAluno(id); // Pegar o aluno específico (usando ID)

        res.statusCode = 200; // Caso consiga, retorna código de 200
        res.end(JSON.stringify(response)); // E a reposta
    } catch (error) { // Em caso de erro...
        res.statusCode = 404; //... retorna código 404
        res.end(JSON.stringify({"Error": error.message})); // E a mensagem de erro
    }
}

// Função para adicionar um aluno
async function postAluno(req, res) {
    try { // Primeiro tenta...
        const body = await getRequestBody(req); // Pegar as informações do body
        const response = await services.postAluno(body); // Tenta chamar o service de postar aluno

        res.statusCode = 201; // Caso consiga, retorna código de 201
        res.end(JSON.stringify(response)); // Retorna a mensagem
    } catch (error) { // Caso dê erro...
        res.statusCode = 400; // Retorna código 400
        res.end(JSON.stringify({"Error": error.message})); // Retorna a mensagem
    }
}

// Função que atualiza os dados de um aluno específico
async function putAluno(req, res, id) {
    try { // Primeiro tenta...
        const body = await getRequestBody(req); // Pegar as informações do body
        const response = await services.putAluno(id, body); // Tenta chamar o service de atualizar aluno

        res.statusCode = 200; // Caso consiga, retorna código 200
        res.end(JSON.stringify(response)); // Retorna a mensagem
    } catch (error) { // Caso de erro...
        res.statusCode = 404; // Retorna código 404
        res.end(JSON.stringify({"Error": error.message})); // Retorna a mensagem
    }
}

// Função que deleta um aluno específico
async function deleteAluno(req, res, id) {
    try { // Primeiro tenta...
        const response = await services.deleteAluno(id); // Chamar o service de deletar aluno por ID

        res.statusCode = 204; // Caso consiga, retorna código 204
        res.end(JSON.stringify(response)); // Retorna a mensagem
    } catch (error) { // Caso dê erro...
        res.statusCode = 404; // Retorna código 404
        res.end(JSON.stringify({"Error": error.message})); // Retorna mensagem
    }
}

// Exporta as funções para serem utilizadas nas rotas
export {
    getAlunos,
    getAluno,
    postAluno,
    putAluno,
    deleteAluno
}