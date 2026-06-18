import * as controllers from '../controllers/alunosControllers.js';

export default function routesAlunos(req, res) {
    let noMethod = false;
    let noRoute = false;
    
    if (req.url == "/alunos") {
        if (req.method == "GET") {
            controllers.getAlunos(req, res);
        } else if (req.method == "POST") {
            controllers.postAluno(req, res);
        } else return "no_method"
    } else if (req.url.includes("/alunos/")) {
        const id = req.url.split('/')[2];

        if (req.method == "GET") {
            controllers.getAluno(req, res, id);
        } else if (req.method == "PUT") {
            controllers.putAluno(req, res, id);
        } else if (req.method == "DELETE") {
            controllers.deleteAluno(req, res, id);
        } else return "no_method"
    } else return "no_route"
}