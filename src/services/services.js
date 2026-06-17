import fs from 'fs';

const JSON_PATH = 'src/data/alunos.json';

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

function getAluno(id) {
    try {        
        let data = fs.readFileSync(JSON_PATH, 'utf-8');
        data = JSON.parse(data);
    
        const STUDENT = data.find(student => student.id == Number(id));
    
        if (STUDENT) {
            return {
                response: "Request received at GET /alunos",
                data: STUDENT,
            }
        } else {
            throw new Error("Student not found!");
        }
    } catch (error) {
        throw error;
    }

}

function getAlunos() {
    try {
        let data = fs.readFileSync(JSON_PATH, 'utf-8');
        data = JSON.parse(data);
        
        if (data) {
            return {
                response: "Request received at GET /alunos",
                data: data,
            }
        } else {
            throw new Error("No students found!")
        }
    } catch (error) {
        throw error;
    }

}

export {
    getRoot,
    getSobre,
    getStatus,
    getAluno,
    getAlunos
}