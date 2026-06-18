function getRoot() {
    return {
        response: "Request received at GET /"
    }
}

function getSobre() {
    return {
        response: "Request received at GET /sobre",
        message: "My name is Lucas and I'm 16 years old"
    }
}

function getStatus() {
    return {
        response: "Request received at GET /status",
        online: true
    }
}

export {
    getRoot,
    getSobre,
    getStatus
}