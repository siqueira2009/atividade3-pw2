# API Node Puro

Esta API REST foi desenvolvida em **Node.js puro** (sem frameworks) como exercício de arquitetura em camadas, separando responsabilidades entre rotas, controllers, services, models e utils.

---

## 📁 Estrutura do projeto

```
├── index.js               → Servidor HTTP e roteamento principal
├── package.json
└── src/
    ├── controllers/       → Recebem req/res e chamam os services
    │   ├── alunosControllers.js
    │   ├── produtosControllers.js
    │   ├── otherControllers.js
    │   └── paginasControllers.js
    ├── data/              → Arquivos JSON usados como banco de dados
    │   ├── alunos.json
    │   ├── produtos.json
    │   └── page.html
    ├── models/            → Estrutura dos objetos criados
    │   └── alunoModels.js
    ├── routes/            → Funções de roteamento por domínio
    │   ├── alunosRoutes.js
    │   ├── produtosRoutes.js
    │   ├── otherRoutes.js
    │   └── paginaRoutes.js
    ├── services/          → Lógica de negócio e acesso aos dados
    │   ├── alunosServices.js
    │   ├── produtosServices.js
    │   ├── otherServices.js
    │   └── paginaServices.js
    └── utils/             → Funções utilitárias reutilizáveis
        ├── dataHandle.js
        └── pageHandle.js
```

---

## 🚀 Como executar

```bash
npm run dev
# Servidor disponível em http://localhost:3000
```

> O comando `dev` utiliza `--watch`, reiniciando automaticamente ao salvar alterações.

---

## 🛣️ Rotas

Todas as rotas respondem em `http://localhost:3000`.

---

### `GET /`

Retorna uma confirmação de que o servidor está respondendo.

**Resposta:**
```json
{
  "response": "Request received at GET /"
}
```

---

### `GET /sobre`

Retorna uma descrição pessoal do autor.

**Resposta:**
```json
{
  "response": "Request received at GET /sobre",
  "message": "My name is Lucas and I'm 16 years old"
}
```

---

### `GET /status` ou `GET /api/status`

Retorna o status atual da API.

**Resposta:**
```json
{
  "response": "Request received at GET /status",
  "online": true
}
```

---

### `GET /pagina`

Retorna uma página HTML servida diretamente pela API.

**Resposta:** `text/html` com o conteúdo de `src/data/page.html`.

---

### `GET /alunos`

Retorna a lista completa de alunos cadastrados.

**Resposta:**
```json
{
  "response": "Request received at GET /alunos",
  "data": [
    { "id": 0, "nome": "Paulo Elana", "turma": "2º DS (AMS)" },
    { "id": 1, "nome": "Rafael Cruz", "turma": "2º DS (AMS)" },
    ...
  ]
}
```

---

### `GET /alunos/:id`

Retorna um aluno específico pelo ID.

**Resposta de sucesso:**
```json
{
  "response": "Request received at GET /alunos",
  "data": { "id": 1, "nome": "Rafael Cruz", "turma": "2º DS (AMS)" }
}
```

**Resposta de erro (404):**
```json
{ "Error": "Student not found!" }
```

---

### `POST /alunos`

Adiciona um novo aluno à lista.

**Body (JSON):**
```json
{
  "nome": "Nome do aluno",
  "turma": "Turma do aluno"
}
```

> ⚠️ O campo `nome` e `turma` são obrigatórios. A ausência deles retorna erro `400`.

**Resposta de sucesso (201):**
```json
{
  "response": "Request received at POST /alunos",
  "data": { "id": 5, "nome": "Nome do aluno", "turma": "Turma do aluno" }
}
```

---

### `PUT /alunos/:id`

Atualiza o nome de um aluno existente.

**Body (JSON):**
```json
{
  "nome": "Novo nome",
  "turma": "Nova turma"
}
```

**Resposta de sucesso (200):**
```json
{
  "response": "Request received at PUT /alunos",
  "data": [ ... ]
}
```

---

### `DELETE /alunos/:id`

Remove um aluno pelo ID.

**Resposta de sucesso (204):**
```json
{
  "response": "Request received at DELETE /alunos"
}
```

---

### `GET /produtos`

Retorna a lista completa de produtos.

**Resposta:**
```json
[
  { "nome": "Monitor AOC 24G4",              "categoria": "Eletrônicos" },
  { "nome": "Placa de vídeo RX7600 Gigabyte","categoria": "Eletrônicos" },
  { "nome": "O Senhor dos Anéis: As Duas Torres", "categoria": "Livros" }
]
```

---

### `GET /produtos?categoria=:categoria`

Filtra os produtos por categoria via query string.

**Exemplo:** `GET /produtos?categoria=Eletrônicos`

**Resposta:**
```json
[
  { "nome": "Monitor AOC 24G4",               "categoria": "Eletrônicos" },
  { "nome": "Placa de vídeo RX7600 Gigabyte", "categoria": "Eletrônicos" }
]
```

---

## 🔍 Arquitetura em camadas

| Camada | Responsabilidade |
|---|---|
| `routes/` | Identifica a URL e o método HTTP, despacha para o controller correto |
| `controllers/` | Lida com `req`/`res`, lê o body e aciona o service correspondente |
| `services/` | Contém a lógica de negócio e acessa o arquivo JSON via utils |
| `models/` | Define a estrutura dos objetos criados (ex: novo aluno) |
| `utils/` | Funções reutilizáveis de leitura/escrita de JSON e HTML |

### Tratamento de erros

O servidor retorna os seguintes status codes:

| Código | Situação |
|---|---|
| `200` | Sucesso em GET e PUT |
| `201` | Aluno criado com sucesso (POST) |
| `204` | Aluno removido com sucesso (DELETE) |
| `400` | Body inválido ou campo obrigatório ausente |
| `404` | Rota ou recurso não encontrado |
| `405` | Método HTTP não permitido para a rota |

---

## 👤 Autor

<div align="center">

Atividade feita por **Lucas Siqueira** para a matéria de PWII do professor **Rafael Cruz**

[![GitHub](https://img.shields.io/badge/GitHub-siqueira2009-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/siqueira2009)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucasdesouzasiqueira-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucasdesouzasiqueira/)

</div>