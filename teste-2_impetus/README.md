# TESTE 2 DE BACK-END

- Sobre o teste
- Foi solicitado que criasse uma API(CRUD) e rodasse em um container docker

- Antes de iniciar o teste da aplicação é necessário ter instalado o docekr em seu PC
- Instalar algum API Client de sua preferência

  - Ou Instalar a extensão # REST Client # no VsCode

- Testando a aplicação
  - clone o repositório
    - git clone "nome do repositório"
    - cd impetus_teste_back-end - _pelo terminal_ ou entre na pasta impetus_teste_back-end
    - cd teste-2_impetus - _pelo terminal_ ou entre na pasta teste-2_impetus
  - Abra o seu terminal dentro do teste-2_impetus e execute o comando _npm run docker-init_ para subir a aplicação com docker.
  - Para criar o banco de dados, basta fazer uma requisição na rota "localhost:3002/setup" já com a aplicação em execução.
    - OBS: FAÇA SOMENTE UMA ÚNICA VEZ A REQUISIÇÃO NESSE ENDPOINT
- Para fazer os testes dos EndPoints da aplicação,basta entrar no arquivo "api_endpoints.http" que esta na raiz do projeto e
  fazer uso dos endpoints em um API Client de sua preferência,por exemplo, postman,insomnia, etc... ou se você instalou a extensão # REST Client # é só clicar no "Send Request" que está acima de cada endpoint
