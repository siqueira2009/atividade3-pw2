// Importa os controllers
import * as controllers from '../controllers/paginasControllers.js';

// Exporta a função
export default function paginaRoutes(req, res) {
    // Pega as rotas primeiro e, dentro de cada rota, pega os métodos
    if (req.url == "/pagina") {
        if (req.method == "GET") {
            controllers.getPagina(req, res);
        } else return "no_method" // Caso não tenha ao método, retorna isso
    } else return "no_route" // Caso não tenha rota, retorna isso
}