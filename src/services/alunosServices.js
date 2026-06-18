import fs from 'fs';
import {alunoModels} from '../models/alunoModels.js';

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

function postAluno(body) {
    try {
        if (!body.nome) {
            throw new Error("No name received!")
        }


        let data = fs.readFileSync(JSON_PATH, 'utf-8');
        data = JSON.parse(data);
        const STUDENT = alunoModels(data.length, body.nome);
        data.push(STUDENT);

        fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2), 'utf-8');
    
        return {
            response: "Request received at POST /alunos",
            data: STUDENT,
        }
    } catch (error) {
        throw error;
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

function putAluno(id, body) {
    try {
        if (!body.nome) {
            throw new Error("No name received!")
        }

        if (!id) {
            throw new Error("No ID received!");
        }

        let data = fs.readFileSync(JSON_PATH, 'utf-8');
        data = JSON.parse(data);
        const STUDENT_INDEX = data.findIndex(student => student.id == Number(id));

        if (STUDENT_INDEX == -1) {
            throw new Error(`No student with ID ${id} found!`);
        }
        
        data[STUDENT_INDEX].nome = body.nome;
    
        fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2), 'utf-8');

        return {
            response: "Request received at POST /alunos",
            data: data,
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
    postAluno,
    getAluno,
    putAluno,
    getAlunos
}