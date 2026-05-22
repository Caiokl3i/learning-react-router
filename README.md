# Aprendendo React Router

Repositório de estudos com a progressão dos exercícios sobre **React Router** em um app React com Vite.

## Sobre

Este projeto documenta, em código, conceitos fundamentais de roteamento no React: configuração do router, layouts com `Outlet`, navegação, rotas aninhadas, parâmetros dinâmicos, redirecionamentos e tratamento de páginas inexistentes.

## Tecnologias

- [React](https://react.dev/) 19
- [React Router](https://reactrouter.com/) 7
- [Vite](https://vite.dev/)
- [ESLint](https://eslint.org/)

## O que foi implementado

1. **Configuração do router** — `createBrowserRouter` e `RouterProvider`
2. **Reaproveitamento de estrutura** — layout em `App` com `Outlet` e rotas filhas
3. **Página de erro** — `errorElement` para rotas inválidas (404)
4. **Navegação entre páginas** — componente `Link` na navbar
5. **Rotas aninhadas** — `/contact/:id` com `useParams`
6. **Redirect programático** — `useNavigate` para voltar à home
7. **Redirecionamento de rota antiga** — `Navigate` de `/oldcontact` para `/contact`

## Estrutura do projeto

```
src/
├── main.jsx              # Configuração das rotas
├── App.jsx               # Layout principal (Navbar + Outlet + Footer)
├── components/
│   └── Navbar.jsx
└── routes/
    ├── Home.jsx
    ├── Contact.jsx
    ├── ContactDetails.jsx
    └── ErrorPage.jsx
```

## Rotas

| Rota            | Componente      | Descrição                          |
|-----------------|-----------------|------------------------------------|
| `/`             | `Home`          | Página inicial                     |
| `/contact`      | `Contact`       | Lista de links para contatos       |
| `/contact/:id`  | `ContactDetails`| Detalhes dinâmicos por ID          |
| `/oldcontact`   | —               | Redireciona para `/contact`        |
| (inexistente)   | `ErrorPage`     | Página de erro 404                 |

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm

### Instalação

```bash
git clone https://github.com/Caiokl3i/learning-react-router.git
cd learning-react-router
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

### Outros comandos

```bash
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Verificação com ESLint
```

## Autor

**Caio Victor Santos** — [@Caiokl3i](https://github.com/Caiokl3i)
