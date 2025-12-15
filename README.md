# Checklist App – Teste Técnico Fullstack

Este repositório contém uma aplicação **fullstack** desenvolvida como teste técnico, utilizando **Node.js + Express + Sequelize** no backend e **Angular 15** no frontend.

A aplicação implementa autenticação com **JWT** e um **CRUD completo de checklist**, onde cada usuário possui seus próprios itens.


# Tecnologias Utilizadas

## Backend

* Node.js
* Express
* Sequelize ORM
* SQLite (banco relacional)
* JWT (autenticação)
* Bcrypt (hash de senha)

## Frontend

* Angular 15
* TypeScript
* Angular Router
* Reactive Forms
* HTTP Interceptor
* Guards de autenticação


# Estrutura do Projeto

fullstack-checklist/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── app.js
│   └── package.json
│
├── frontend/
│   └── checklist-app/
│       ├── src/app/
│       │   ├── pages/
│       │   ├── services/
│       │   ├── guards/
│       │   ├── interceptors/
│       │   └── app.module.ts
│       └── package.json
│
└── README.md

##  Pré-requisitos

Antes de iniciar, tenha instalado:

* Node.js (versão 18 ou superior)
* npm
* Angular CLI 15

# Como executar o projeto

## Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd fullstack-checklist
```

## Backend

### Instalar dependências

```bash
cd backend
npm install
```

## Configurar banco de dados

O projeto utiliza **SQLite**, não sendo necessário configurar credenciais.
O banco será criado automaticamente ao rodar a aplicação.

## Executar backend

```bash
npm start
```

📍 Backend rodando em:

```
http://localhost:3000
```

## Frontend

### Instalar dependências

```bash
cd ../frontend/checklist-app
npm install
```

## Executar frontend

```bash
ng serve
```

Frontend rodando em:

```
http://localhost:4200
```

## Funcionalidades

### Autenticação

* Cadastro de usuário
* Login com email e senha
* Geração de token JWT
* Proteção de rotas autenticadas

## Checklist

* Listar itens do checklist
* Criar novo item
* Marcar/desmarcar como concluído
* Remover item
* Cada usuário possui seu próprio checklist

##  Fluxo da Aplicação

1. Usuário acessa `/register` e cria conta
2. Usuário realiza login em `/login`
3. Token JWT é armazenado no cliente
4. Usuário é redirecionado para `/checklist`
5. CRUD do checklist disponível apenas para usuários autenticados

## Scripts Disponíveis

## Backend

```bash
npm start
```

## Frontend

```bash
ng serve
```
