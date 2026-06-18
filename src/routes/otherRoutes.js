// Importa todos os controllers
import * as controllers from '../controllers/otherControllers.js';

// Exporta a função
export default function routesOthers(req, res) {
    // Pega as rotas primeiro e, dentro de cada rota, pega os métodos
    if (req.url == "/") {
        if (req.method == "GET") {
            controllers.getRoot(req, res);
        } else return "no_method" // Caso não tenha ao método, retorna isso
    } else if (req.url == "/sobre") {
        if (req.method == "GET") {
            controllers.getSobre(req, res);
        } else return "no_method" // Caso não tenha ao método, retorna isso
    } else if (req.url == "/status") {
        if (req.method == "GET") {
            controllers.getStatus(req, res);
        } else return "no_method" // Caso não tenha ao método, retorna isso
    } else if (req.url.startsWith('/api')) {
        if (req.method == "GET") {
            if (req.url.includes("status")) {
                controllers.getStatus(req, res);
            }
        } else return "no_method" // Caso não tenha ao método, retorna isso
    } else return "no_route" // Caso não tenha rota, retorna isso
}