## biblioteca http-server

- instalamos com o comando npm -g http-server no terminal. O -g quer dizer globalmente.

- no terminal, colocamos http-server ./ (pois quero abrir o arquivo no http-server, nesta pasta)

### ip e a porta

- http://127.0.0.1:5500/
- ip 127.0.0.1
- porta 5500

---

## Normalize CSS cdn

- é um css que padroniza todo o estilo inicial. Quando abrir em um chrome, a distância de margem do título vai ser sempre igual a quando eu abrir no firefox, por exemplo.
- Oq formos alterando no css, vai ser em cima dessa base normalizada em qualquer navegador.

- entramos no site: https://cdnjs.com/libraries/normalize

- copiamos o link do normalize.min.css e colocamos no head do index.html.

## Mobile-First

- primeiro criamos o estilo de css mobile e para as telas posteriores vamos incrementando o css.
- é uma boa prática, pois com as telas maiores vamos modificando pequenas coisas.

## API

- não deixa de ser um web service e servidor.
- ela serve dados

## Protocolo HTTP

- é o protocolo cliente x servidor
- Para montar uma requisição HTTP, nós temos primeiro uma URL (endereço do recurso que a gente quer);

### Requisição HTTP

- A URL é composta de ${IP}/${path = caminho de identificação do recurso}
- URL: https://pokeapi.co/api/v2/pokemon
- IP: https://pokeapi.co -> é um domínio, mas algum servidor DNS sabe converter este domínio para um IP e fazer esta comunicação.
- Path: /api/v2/pokemon -> é o caminho de identificação do recurso, ou seja, quero neste servidor da URL a API, na versão 2, o recurso pokemon.

- Request Method: tipo de solicitação que estamos fazendo. Temos vários tipos: GET, PUT, POST, DELETE, PATCH...

- toda requisição para um recurso, o método diz oq queremos fazer.

### transferência de dados pela API

- path params: pode ser pelo próprio path, no momento que colocamos https://pokeapi.co/api/v2/pokemon/1 ou /2, estamos identidicando com uma Id um pokemon, neste exemplo
- query string: começa após o ? no path, e sempre é uma estrutura de chave e valor; exemplo: https://pokeapi.co/api/v2/pokemon?type=grass&name=i --> aqui temos duas query strings.

## Headers

- headers: são metadados da nossa requisição, então servem para descrever e muitas vezes complementar, são uma espécie de configuração da nossa requisição.
- request headers: Diz oq aceita (por exemplo quais linguagens, com prioridades, autenticações)
- responde headers: configuração da resposta, por exemplo, retorna um json independente do que receber na requisição.

## Body

- dependendo do tipo de método que estamos usando, temos o body.
- o get não tem body na requisição. Ele deve funcionar somente com o path, query, método e headers de request
- quando é post, o body faz sentido. Por exemplo, queremos enviar os dados de um novo pokemon, e estes novos dados estarão no body. Exemplo:
  Request headers: content-type: application/json
  Body {
  "name": "Teste"
  }

### então resumindo, uma requisição é composta por uma URL, request method, resquest headers, request body, status code, response headers e response body.

## Status code

- servidor processa a requisição e devolve o status code
- significa oq aconteceu com a nossa requisição
- a família 200 representa sucesso
- 300 redirect
- 400 erro por parte do cliente
- 500 erro interno no servidor
