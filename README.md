# nginx-node
A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Rode o comando: 
- docker compose up -d

Retorno: 

![image](https://user-images.githubusercontent.com/58008549/211970193-52b810c7-9dab-400d-9df0-0682b68d4260.png)
