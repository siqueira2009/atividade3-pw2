import * as controllers from '../controllers/produtosControllers.js';

export default function routesProdutos(req, res) {
    if (req.url.includes("/produtos") ) {
        if (req.method == "GET") {
            if (req.url.includes("?")) {
                const url = new URL(req.url, `http://${req.headers.host}`);
                const category = url.searchParams.get("categoria");
        
                if (category) {
                    controllers.getByCategory(req, res, category);
                }
            } else {
                controllers.getAll(req, res);
            }
        } else return "no_method"
    } else return "no_route"
}