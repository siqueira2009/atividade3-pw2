import { getPage } from "../utils/pageHandle.js"

const PAGE_PATH = './src/data/page.html';

function getPagina() {
    return getPage(PAGE_PATH);
}

export {
    getPagina
}