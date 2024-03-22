# TESTE 2 DE BACK-END

- Sobre o teste
- Foi solicitado que criasse uma API(CRUD) e rodasse em um container docker

  - Nome do Arquivo que para importar no Postman é "teste-2-impetus.postman_collection"
  - Entrando no Postman, agora é só clicar em importar, como mostra na foto logo abaixo e escolher o arquivo que mencionei logo acima. 
![image](https://github.com/lucasscabral/impetus_teste_back-end/assets/80989256/6b036dfc-43a1-4d46-91b1-eb3f0a1eee8d)
  - Por fim, sera gerada toda a coleção dos endpoints do teste.
  - Ou Instalar a extensão # Thunder Client # no VsCode

## Instruções de Instalação

Antes de começar, certifique-se de ter o Docker instalado no seu computador.

1. Clone o repositório:

   ```bash
   git clone https://github.com/lucasscabral/impetus_teste_back-end.git
   cd impetus_teste_back-end/teste-2_impetus

2. Inicie a aplicação com Docker:

  - Abra o seu terminal dentro do teste-2_impetus e execute o comando _npm run docker-init_ para subir a aplicação com docker.
   ```bash
    npm run docker-init
   ```
  ![image](https://github.com/lucasscabral/impetus_teste_back-end/assets/80989256/bd3e14ac-9fae-4154-81e5-75ac4e31b692)
  - Caso não tenha instalado na sua máquina o NodeJs e o NPM, basta executar somente o comando no seu terminal dentro do teste.
   ```bash
    docker-compose up
   ```
  - Dando tudo certo, aparacera no console do seu terminal a seguinte mensagem
    ![image](https://github.com/lucasscabral/impetus_teste_back-end/assets/80989256/e6bdbdbe-bd5a-4e1e-aa05-7f0c3bc32e0b)
  - Para criar o banco de dados, basta fazer uma requisição na rota "localhost:3002/setup" já com a aplicação em execução.
    - OBS: FAÇA SOMENTE UMA ÚNICA VEZ A REQUISIÇÃO NESSE ENDPOINT
    - Já vai ser criado também alguns registros no banco de dados!
- Para fazer os testes dos EndPoints da aplicação,basta entrar no arquivo "api_endpoints.http" que esta na raiz do projeto e
  fazer uso dos endpoints em um API Client de sua preferência,por exemplo, postman,insomnia, etc... ou se você instalou a extensão # REST Client # é só clicar no "Send Request" que está acima de cada endpoint
