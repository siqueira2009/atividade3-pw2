import fs from 'fs';

import {alunoModels} from '../models/alunoModels.js';
import { getData, updateData } from '../utils/dataHandle.js';

const JSON_PATH = 'src/data/alunos.json';

function getAlunos() {
    try {
        const data = getData(JSON_PATH);
        
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

function getAluno(id) {
    try {        
        if (!id) {
            throw new Error("No ID received!");
        }

        const data = getData(JSON_PATH);
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

function postAluno(body) {
    try {
        if (!body.nome) {
            throw new Error("No name received!")
        }

        let data = getData(JSON_PATH);
        const STUDENT = alunoModels(data.length, body.nome);
        data.push(STUDENT);

        updateData(JSON_PATH, data);
    
        return {
            response: "Request received at POST /alunos",
            data: STUDENT,
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

        let data = getData(JSON_PATH);
        const STUDENT_INDEX = data.findIndex(student => student.id == Number(id));

        if (STUDENT_INDEX == -1) {
            throw new Error(`No student with ID ${id} found!`);
        }
        
        data[STUDENT_INDEX].nome = body.nome;
    
        updateData(JSON_PATH, data);

        return {
            response: "Request received at PUT /alunos",
            data: data,
        }
    } catch (error) {
        throw error;
    }
}

function deleteAluno(id) {
    try {
        if (!id) {
            throw new Error("No ID received!");
        }

        let data = getData(JSON_PATH);
        const STUDENT_INDEX = data.findIndex(student => student.id == Number(id));

        if (STUDENT_INDEX == -1) {
            throw new Error(`No student with ID ${id} found!`);
        }

        data.splice(STUDENT_INDEX, 1);

        updateData(JSON_PATH, data);

        return {
            response: "Request received at DELETE /alunos",
        }
    } catch (error) {
        throw error;
    }
}

export {
    getAlunos,
    getAluno,
    postAluno,
    putAluno,
    deleteAluno
}