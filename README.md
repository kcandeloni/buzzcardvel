# BuzzCardVel - Virtual Card App

### Aplicação geradora de cartões virtuais para identificação.

## Pré-requisitos

**Docker Compose V2

### Para rodar essa aplicação:

1. Faça o clone do repositório e no terminal navegue até a pasta star_clink_backend;
2. Configure o seu arquivo ***.env*** conforme ***.env.example*** na raiz do projeto;
3. Execute o comando `docker compose up`;


### URL:
 O *endpoint* do serviço estará disponível em http://localhost:8080


### Rotas da Aplicação Web: 

`/generate`

Formulário para criação de um cartão virtual.

`/:name`

Rota para acessar a página de um cartão virtual com base em **name**.

### Rotas para acessar a API pela porta 8080:

```
GET

    /api/:name
    /api/card-page/all

POST

    /api/create
      parâmetros: 
        body {
            name: string,
            linkedinURL: string,
            gitHubURL: string
         }
      
exemplo: http://localhost:8080/api/maria
```

Links:

Link do Deploy: Em breve...

Link para o Projeto Back-end: https://github.com/kcandeloni/buzzcardvel-backend

Link para o Projeto Front-end: https://github.com/kcandeloni/buzzcardvel-frontend
