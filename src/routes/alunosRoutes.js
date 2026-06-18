import * as controllers from '../controllers/alunosControllers.js';

export default function routesAlunos(req, res) {
    if (req.url == "/" && req.method == "GET") {
        controllers.getRoot(req, res);
    }

    if (req.url == "/sobre" && req.method == "GET") {
        controllers.getSobre(req, res);
    }

    if (req.url == "/status" && req.method == "GET") {
        controllers.getStatus(req, res);
    }

    if (req.url == "/alunos") {
        if (req.method == "GET") {
            controllers.getAlunos(req, res);
        } else if (req.method == "POST") {
            controllers.postAluno(req, res);
        }
    }

    if (req.url.includes("/alunos/")) {
        const id = req.url.split('/')[2];

        if (req.method == "GET") {
            controllers.getAluno(req, res, id);
        } else if (req.method == "PUT") {
            controllers.putAluno(req, res, id);
        } else if (req.method == "DELETE") {
            controllers.deleteAluno(req, res, id);
        }

    }
}