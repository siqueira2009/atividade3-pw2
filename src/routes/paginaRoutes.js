import * as controllers from '../controllers/paginasControllers.js';

export default function paginaRoutes(req, res) {
    if (req.url == "/pagina" && req.method == "GET") {
        controllers.getPagina(req, res);
    }
}