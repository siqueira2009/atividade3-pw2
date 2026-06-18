import * as controllers from '../controllers/otherControllers.js';

export default function routesOthers(req, res) {
    if (req.url == "/") {
        if (req.method == "GET") {
            controllers.getRoot(req, res);
        } else return "no_method"
    } else if (req.url == "/sobre") {
        if (req.method == "GET") {
            controllers.getSobre(req, res);
        } else return "no_method"
    } else if (req.url == "/status") {
        if (req.method == "GET") {
            controllers.getStatus(req, res);
        } else return "no_method"
    } else if (req.url.startsWith('/api')) {
        if (req.method == "GET") {
            if (req.url.includes("status")) {
                controllers.getStatus(req, res);
            }
        } else return "no_method"
    } else return "no_route"
}