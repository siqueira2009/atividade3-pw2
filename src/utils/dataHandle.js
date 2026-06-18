// Importa a dependência de sistema de arquivos (para ler e alterar o JSON)
import fs from 'fs';

// Função utilitária para ler dados de um arquivo JSON
export function getData(json_path) {
    try {
        const data = fs.readFileSync(json_path, 'utf-8');
        
        return (JSON.parse(data));
    } catch (error) {
        throw error;
    }

}

// Função utilitária para atualiza dados de um arquivo JSON
export function updateData(json_path, data) {
    try {
        fs.writeFileSync(json_path, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        throw error;
    }
}