import * as controllers from '../controllers/paginasControllers.js';

export default function paginaRoutes(req, res) {
    if (req.url == "/pagina") {
        if (req.method == "GET") {
            controllers.getPagina(req, res);
        } else return "no_method"
    } else return "no_route"
}