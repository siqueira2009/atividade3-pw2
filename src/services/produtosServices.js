import fs from 'fs';

const JSON_PATH = 'src/data/produtos.json';

function getByCategory(category) {
    try {        
        let data = fs.readFileSync(JSON_PATH, 'utf-8');
        data = JSON.parse(data);    

        const PRODUCTS = data.filter(product => product.categoria == category);
    
        if (PRODUCTS) {
            return {
                response: "Request received at GET /produtos?categoria",
                data: PRODUCTS,
            }
        } else {
            throw new Error("Product not found!");
        }
    } catch (error) {
        throw error;
    }

}

function getAll(category) {
    try {        
        let data = fs.readFileSync(JSON_PATH, 'utf-8');
        data = JSON.parse(data);    
    
        if (data) {
            return {
                response: "Request received at GET /produtos",
                data: data,
            }
        } else {
            throw new Error("No products found!");
        }
    } catch (error) {
        throw error;
    }

}

export {
    getByCategory,
    getAll
}