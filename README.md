# DragonsUi
Solução para o [teste](https://github.com/WoopSicredi/jobs/issues/6).

## Para rodar a aplicação
É necessario ter o nodejs, npm e angular-cli instalados.

Clone o repositório em um diretório de sua preferência.
As dependências do projeto são gerenciadas usando npm, então rode `npm install` para instalá-las.
Rode `ng serve` e navegue para o endereço `http://localhost:4200/`.

Para acesso, use as credenciais:
- usuáruio: `user`
- senha: `pass`

# Observações sobre a solução
A aplicação foi organizada utilizando os seguintes componentes:
- app-header: cabeçalho, contém o nome da app e um botão de logoff (quando o usuário está logado) 
- messages: footer do app, utilizado para exibir mensagens de erro, quando houver. 
- login: form de login (rota: `/login`). O serviço de login apenas verifica usuário e senha e armazena um token no localStorage.
- dragons: lista de dragões (rota: `/dragons`)    
- dragon-detail: utilizado para edição dos detalhes de um dragão (rota: `/dragon/:slug`) ou criação de novos dragões (rota: `/dragons/new`)

## Informações adicionais sobre o autor
Este é meu primeiro contato com o Angular 6, aprendi tudo o que utilizei no teste nesses 3 dias que disponibilizei para faze-lo.
Além disso, venho de um histórico de atuação de cerca de 2 anos com foco no backend em Java. Esse também é meu primeiro contato com TypeScript (Costumava trabalhar com vanilla JavaScript e angular 1.4.x).

### API
A [API](https://dragons-api.herokuapp.com/) utilizada possui algumas falhas:
- Há registros inseridos sem nome, tipo ou slug, o que impossibilita sua deleção.
- Há uma issue no número de resultados paginados. Apesar de aceitar parâmetros `size` e `page` verifiquei o [código fonte](https://github.com/wbruno/dragons-api/blob/master/controllers/DragonController.js) da API e o número do resultado inicial é sempre baseado em páginas de tamanho 10, mesmo quando informado tamanhos maiores.
