// Importa a dependência de sistema de arquivos (para ler e alterar o JSON)
import fs from 'fs';

// Função utilitária para ler arquivos HTML
export function getPage(page_path) {
    try {
        const data = fs.readFileSync(page_path, 'utf-8');
    
        return data;
    } catch (error) {
        throw error;
    }

}