// Importa funções utilitárias
import { getPage } from "../utils/pageHandle.js"

const PAGE_PATH = './src/data/page.html'; // Caminho do HTML

// Função para pegar a página
function getPagina() {
    return getPage(PAGE_PATH); // Retorna os dados extraídos da página
}

// Exporta as funções para serem utilizadas nos controllers
export {
    getPagina
}