import * as controllers from '../controllers/otherControllers.js';

export default function routesOthers(req, res) {
    if (req.url == "/" && req.method == "GET") {
        controllers.getRoot(req, res);
    }

    if (req.url == "/sobre" && req.method == "GET") {
        controllers.getSobre(req, res);
    }

    if (req.url == "/status" && req.method == "GET") {
        controllers.getStatus(req, res);
    }
}