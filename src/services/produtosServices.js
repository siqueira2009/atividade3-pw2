const JSON_PATH = 'src/data/produtos.json'; // Caminho do JSON dos produtos

// Função de pegar por categoria
function getByCategory(category) {
    try { // Primeiro tenta...
        const data = getData(JSON_PATH); // Os dados são coletados usando a função utilitária

        const PRODUCTS = data.filter(product => product.categoria == category); // Pega o produto com categoria certa, usando o filter
    
        if (PRODUCTS) { // Se houver produtos...
            return { // Retorna objeto com os dados
                response: "Request received at GET /produtos?categoria",
                data: PRODUCTS,
            }
        } else { // Caso contrário, retorna erro
            throw new Error("Product not found!");
        }
    } catch (error) { // Em caso de erro...
        throw error; // Joga o erro para o controller
    }
}

// Função de pegar todos os produtos
function getAll(category) {
    try { // Primeiro tenta...
        const data = getData(JSON_PATH); // Os dados são coletados usando a função utilitária
    
        if (data) { // Caso tenha dados...
            return { // Retorna objeto com os dados
                response: "Request received at GET /produtos",
                data: data,
            }
        } else { // Caso contrário, retorna erro
            throw new Error("No products found!");
        }
    } catch (error) { // Em caso de erro...
        throw error; // Joga o erro para o controller
    }

}

// Exporta as funções para serem utilizadas nos controllers
export {
    getByCategory,
    getAll
}