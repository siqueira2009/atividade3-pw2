import * as controllers from '../controllers/produtosControllers.js';

export default function routesProdutos(req, res) {
    if (req.url.includes("/produtos") && req.method == "GET") {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const category = url.searchParams.get("categoria");

        if (category) {
            controllers.getByCategory(req, res, category);
        }
    }
}