// Importa as funções utilitárias e de modelo 
import { alunoModels } from '../models/alunoModels.js';
import { getData, updateData } from '../utils/dataHandle.js';

const JSON_PATH = 'src/data/alunos.json'; // Caminho do JSON dos alunos

// Função para pegar todos os alunos
function getAlunos() {
    try {
        const data = getData(JSON_PATH); // Os dados são coletados usando a função utilitária
        
        if (data) { // Se tiver dados...
            return { // Retorna um objeto com os dados
                response: "Request received at GET /alunos",
                data: data,
            }
        } else { // Se não tiver...
            throw new Error("No students found!"); // Retorna erro, falando que não há estudantes
        }
    } catch (error) { // Em caso de erro...
        throw error; // Joga esse erro para o controller
    }
}

// Função para pegar um aluno específico
function getAluno(id) {
    try { // Primeiro tenta...
        if (!id) { // Ver se tem ID, se não tiver, retorna erro
            throw new Error("No ID received!");
        }

        const data = getData(JSON_PATH); // Os dados são coletados usando a função utilitária
        const STUDENT = data.find(student => student.id == Number(id)); // Pega o estudante do ID
    
        if (STUDENT) { // Se houver estudante...
            return { // Retorna um objeto com os dados
                response: "Request received at GET /alunos",
                data: STUDENT,
            }
        } else { // Se não tiver...
            throw new Error("Student not found!"); // Retorna erro, falando que não há estudantes
        }
    } catch (error) { // Em caso de erro...
        throw error; // Joga esse erro para o controller
    }
}

// Função para adicionar aluno
function postAluno(body) {
    try { // Primeiro tenta...
        if (!body.nome) { // Ver se tem nome no body
            throw new Error("No name received!"); // Se não tiver, retorna erro
        }

        let data = getData(JSON_PATH); // Os dados são coletados usando a função utilitária
        const STUDENT = alunoModels(data.length, body.nome); // Cria um aluno usando o modelo, passando ID e nome
        data.push(STUDENT); // Adiciona esse aluno nos dados

        updateData(JSON_PATH, data); // Atualiza o JSON via função utilitária
    
        return { // Depois retorna um objeto com os dados adicionados
            response: "Request received at POST /alunos",
            data: STUDENT,
        }
    } catch (error) { // Em caso de erro...
        throw error; // Joga esse erro para o controller
    }
}

// Função para atualizar aluno
function putAluno(id, body) {
    try { // Primeiro tenta...
        if (!body.nome) { // Ver se tem nome no body
            throw new Error("No name received!"); // Se não tiver, retorna erro
        }

        if (!id) { // Ver se tem ID, se não tiver, retorna erro
            throw new Error("No ID received!");
        }

        let data = getData(JSON_PATH); // Os dados são coletados usando a função utilitária
        const STUDENT_INDEX = data.findIndex(student => student.id == Number(id)); // Pega o índice do aluno no array de data
 
        if (STUDENT_INDEX == -1) { // Se não tiver aluno...
            throw new Error(`No student with ID ${id} found!`); // Joga erro
        }
        
        data[STUDENT_INDEX].nome = body.nome; // Se tiver, atualiza os dados daquele aluno nos dados
    
        updateData(JSON_PATH, data); // Atualiza o JSON via função utilitária

        return { // Depois retorna um objeto com os dados atualizados
            response: "Request received at PUT /alunos",
            data: data,
        }
    } catch (error) { // Em caso de erro...
        throw error; // Joga esse erro para o controller
    }
}

// Função para deletar aluno
function deleteAluno(id) {
    try { // Primeiro tenta...
        if (!id) { // Ver se tem ID, se não tiver, retorna erro
            throw new Error("No ID received!");
        }

        let data = getData(JSON_PATH); // Os dados são coletados usando a função utilitária
        const STUDENT_INDEX = data.findIndex(student => student.id == Number(id)); // Pega o índice do aluno no array de data

        if (STUDENT_INDEX == -1) { // Se não tiver aluno...
            throw new Error(`No student with ID ${id} found!`); // Joga erro
        }

        data.splice(STUDENT_INDEX, 1); // Remove um elemento na posição do index

        updateData(JSON_PATH, data); // Atualiza o JSON via função utilitária

        return { // Depois retorna um objeto com mensagem de sucesso
            response: "Request received at DELETE /alunos",
        }
    } catch (error) { // Em caso de erro...
        throw error; // Joga esse erro para o controller
    }
}

// Exporta as funções para serem utilizadas nos controllers
export {
    getAlunos,
    getAluno,
    postAluno,
    putAluno,
    deleteAluno
}