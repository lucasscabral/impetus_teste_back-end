# TESTE 3 DE BACK-END

- Sobre o teste
- Foi solicitado que criasse uma API(CRUD) + TypeORM e rodasse em um container docker

- Antes de iniciar o teste da aplicação é necessário ter instalado o docekr em seu PC
- Instalar algum API Client de sua preferência, de preferência o Postman,pois, basta você importa o arquivo que de rotas que está na raiz do
  projeto.

  - Nome do Arquivo que para importar no Postman é "teste-impetus.postman_collection"
  - Entrando no Postman, agora é só clicar em importar, como mostra na foto logo abaixo e escolher o arquivo que mencionei logo acima. 
![image](https://github.com/lucasscabral/impetus_teste_back-end/assets/80989256/6b036dfc-43a1-4d46-91b1-eb3f0a1eee8d)
  - Por fim, sera gerada toda a coleção dos endpoints do teste.
  - Ou Instalar a extensão # Thunder Client # no VsCode

## Instruções de Instalação

Antes de começar, certifique-se de ter o Docker instalado no seu computador.

1. Clone o repositório:

   ```bash
   git clone https://github.com/lucasscabral/impetus_teste_back-end.git
   cd impetus_teste_back-end/teste-3_impetus
2. Inicie a aplicação com Docker:

  - Abra o seu terminal dentro do teste-2_impetus e execute o comando _npm run docker-init_ para subir a aplicação com docker.
   ```bash
    npm run docker-init
   ```
  ![image](https://github.com/lucasscabral/impetus_teste_back-end/assets/80989256/c9a561c9-6340-4aea-a62a-12798f73b6a5)
  - Caso não tenha instalado na sua máquina o NodeJs e o NPM, basta executar somente o comando no seu terminal dentro do teste.
   ```bash
    docker-compose up
   ```
  - Dando tudo certo, aparacera no console do seu terminal a seguinte mensagem
    ![image](https://github.com/lucasscabral/impetus_teste_back-end/assets/80989256/e6bdbdbe-bd5a-4e1e-aa05-7f0c3bc32e0b)

3. Por Fim:

  - basta importar os endpoints no Postman, como eu falei logo acima e testar a aplicação com os endpoints.

- Caso aparaça esse erro da imagem abaixo,basta reiniciar a aplicação
  ![image](https://github.com/lucasscabral/impetus_teste_back-end/assets/80989256/aa4a32bb-4220-4a97-bee2-5f011656bf0c)
- Caso aparaça esse aviso da imagem abaixo, basta reiniciar a aplicação.
  ![image](https://github.com/lucasscabral/impetus_teste_back-end/assets/80989256/16cd1861-8cfe-4d7d-8c92-2269b8e4133a)

