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

- toda requisição para um recurso, o método diz oq queremos fazer neste recurso.
