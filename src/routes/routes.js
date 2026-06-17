import * as controllers from '../controllers/controllers.js';

export default function routes(req, res) {
    if (req.url == "/" && req.method == "GET") {
        controllers.getRoot(req, res);
    }

    if (req.url == "/sobre" && req.method == "GET") {
        controllers.getSobre(req, res);
    }

    if (req.url == "/status" && req.method == "GET") {
        controllers.getStatus(req, res);
    }

    if (req.url == "/alunos" && req.method == "GET") {
        controllers.getAlunos(req, res)
    }

    if (req.url.includes("/alunos/") && req.method == "GET") {
        const id = req.url.split('/')[2];

        controllers.getAluno(req, res, id);
    }
}