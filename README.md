# Projeto CRUD - Backend
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/wendellmoraisz/crud-server/blob/main/LICENSE)

O projeto tem como objetivo realizar o controle de usuários, baseando-se no modelo de CRUD (Create, Read, Update, Delete).

# Tecnologias utilizadas
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)

# Funcionalidades
  - [x] Registrar um novo usuário no Banco de Dados
  - [x] Atualizar cadastro
  - [x] Remover cadastro
  - [x] Fornecer lista de usuários cadastrados

# Requisitos mínimos para executar o projeto
- Ter o [Node.js](https://nodejs.org/en/download/) instalado na sua máquina.
- Ter o [MySQL](https://dev.mysql.com/downloads/mysql/) instalado na sua máquina.

# Como rodar o server

Crie um novo Schema no MySQL Workbench.

Execute os [comandos SQL](/src/models/database/createUsersTable.sql) no MySQL (se o seu editor de código for o VSCode, recomendo utilizar a extensão vscode-database).

Insira as credenciais do seu BD nas linhas 15 e 16 do arquivo index.ts

```bash

# clone o repositório
git clone https://github.com/wendellmoraisz/crud-server

# entre no diretório do projeto e execute os seguintes comandos no seu terminal:
npm install
npm start
```
