import fs from 'fs';

export function getPage(page_path) {
    try {
        const data = fs.readFileSync(page_path, 'utf-8');
    
        return data;
    } catch (error) {
        throw error;
    }

}