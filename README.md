# BuzzCardVel - Virtual Card App

### Aplicação geradora de cartões virtuais para identificação.

## Pré-requisitos

**Docker Compose V2**

### Para rodar essa aplicação:

1. Clone esse repositório para o diretório desejado.
2. Na raiz do projeto execute o comando `docker compose up`
3. É só isso mesmo :)


### URL:
 O *endpoint* do serviço estará disponível em http://localhost:8080


### Rotas da Aplicação Web: 

`/generate`

Formulário para criação de um cartão virtual.

![image](https://user-images.githubusercontent.com/12499886/232168919-8bce7e7d-21a6-43b3-a9a7-07a0deaa90d8.png)
![image](https://user-images.githubusercontent.com/12499886/232168992-de750d27-8096-4926-b323-865d286c47b6.png)


`/:name`

Rota para acessar a página de um cartão virtual com base em **name**.

![image](https://user-images.githubusercontent.com/12499886/232168797-bef12c36-0eae-433e-b549-6b0b8ad5f749.png)

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
