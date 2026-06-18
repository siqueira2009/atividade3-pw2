// Importa os controllers
import * as controllers from '../controllers/produtosControllers.js';

// Exporta a função
export default function routesProdutos(req, res) {
    // Pega as rotas primeiro e, dentro de cada rota, pega os métodos
    if (req.url.includes("/produtos") ) {
        if (req.method == "GET") {
            if (req.url.includes("?")) { // Se tiver parâmetros
                const url = new URL(req.url, `http://${req.headers.host}`); // Cria uma URL para interpretar as queries
                const category = url.searchParams.get("categoria"); // Pega o valor do parâmetro
        
                // Chama o de pegar categoria específica, se tiver uma
                // Caso contrário, chama a de pegar todas
                if (category) { 
                    controllers.getByCategory(req, res, category);
                } else {
                    controllers.getAll(req, res);
                }
            } else { // Caso contrário, chama a de pegar todas
                controllers.getAll(req, res);
            }
        } else return "no_method" // Caso não tenha ao método, retorna isso
    } else return "no_route" // Caso não tenha rota, retorna isso
}