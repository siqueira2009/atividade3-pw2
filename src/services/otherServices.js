// Função para GET em /
function getRoot() {
    return { // Retorna objeto com resposta
        response: "Request received at GET /"
    }
}

// Função para pegar sobre
function getSobre() {
    return { // Retorna objeto com respostas
        response: "Request received at GET /sobre",
        message: "My name is Lucas and I'm 16 years old"
    }
}

// Função para pegar status
function getStatus() {
    return { // Retorna objeto com respostas
        response: "Request received at GET /status",
        online: true
    }
}

// Exporta as funções para serem utilizadas nos controllers
export {
    getRoot,
    getSobre,
    getStatus
}