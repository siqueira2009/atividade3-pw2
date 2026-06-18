// Importa os controllers
import * as controllers from '../controllers/alunosControllers.js';

// Exporta a função
export default function routesAlunos(req, res) {
    // Pega as rotas primeiro e, dentro de cada rota, pega os métodos
    if (req.url == "/alunos") {
        if (req.method == "GET") {
            controllers.getAlunos(req, res);
        } else if (req.method == "POST") {
            controllers.postAluno(req, res);
        } else return "no_method"; // Caso não tenha ao método, retorna isso
    } else if (req.url.includes("/alunos/")) {
        const id = req.url.split('/')[2];

        if (req.method == "GET") {
            controllers.getAluno(req, res, id);
        } else if (req.method == "PUT") {
            controllers.putAluno(req, res, id);
        } else if (req.method == "DELETE") {
            controllers.deleteAluno(req, res, id);
        } else return "no_method" // Caso não tenha ao método, retorna isso
    } else return "no_route" // Caso não tenha rota, retorna isso
}