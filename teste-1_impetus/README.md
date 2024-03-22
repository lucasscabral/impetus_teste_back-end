# TESTE 1 DE BACK-END

- Sobre o teste
- Foi solicitado que criasse uma aplicação simples e rodasse em um container docker

- Antes de iniciar o teste da aplicação é necessário ter instalado o docekr em seu PC

## Instruções de Instalação

Antes de começar, certifique-se de ter o Docker instalado no seu computador.

1. Clone o repositório:

   ```bash
   git clone https://github.com/lucasscabral/impetus_teste_back-end.git
   cd impetus_teste_back-end/teste-1_impetus
2. Inicie a aplicação com Docker:

  - Abra o seu terminal dentro do teste-1_impetus e execute o comando _npm run docker-init_ para subir a aplicação com docker,caso já tenha instalado na sua máquina o NPM e o NodeJs.
   ```bash
    npm run docker-init
   ```
  - Caso não tenha instalado na sua máquina o NodeJs e o NPM, basta executar somente o comando no seu terminal dentro do teste.
   ```bash
    docker-compose up
   ```
  - Dando tudo certo, aparacera no console do seu terminal a seguinte mensagem
    ![image](https://github.com/lucasscabral/impetus_teste_back-end/assets/80989256/e6bdbdbe-bd5a-4e1e-aa05-7f0c3bc32e0b)

  - Agora é só abrir uma API Client de sua preferência ou até mesmo no próprio navegador no link "localhost:3000"
