# CRUD de pessoas

Sistema de Gerenciamento de pessoas onde é possível Criar, Editar, pesquisar e excluir pessoas
***

## Requisitos para execução

VSCODE e a extensão live-server

Instale o VSCODE, clone o repositório e use a extensão live-server para executar o código no navegador


**Como usar o projeto**

após realizar todos os passos descritos acima, o usuário irá se deparar com uma tela em branco onde haverá 4 Botões:

- Criar pessoa: ao clickar aqui, será aberto um modal onde o usuário poderá informar os dados da pessoa e salvá-la no banco de dados
- Procurar uma pessoa: onde o usuário poderá consultar o baco de dados afim de obter as informações correspondentes a um e-mail específico, ao clickar nesta opção será aberta uma caixa onde o usuario poderá informar o e-mail que será consultado
- Deletar uma pessoa: digitando o e-mail o usuário poderá deletar um usuario do banco de dados, caso o mesmo não corresponda a nenhuma pessoa, o mesmo será informado.
- Editar uma pessoa: o usuario digitará o e-mail da pessoa qu deseja editar, caso o e-mail não tenha sido registrado, o usuário será informado. caso o e-mail exista no banco de dados, será aberta uma janela onde o usuário poderá editar todas as informações (Exceto e-mail) da pessoa.




**Métodos disponíveis no Back-end e como usálos**:

Todos os métodos seguirão um padrão de retorno do Objeto 'person' ou um null, representando respectivamente o êxito da operação ou a falha da mesma

1. createPerson: coleta os dados do usuário que foram digitados na página HTML, instancia o objeto e o salva no [localStorage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_%E2%80%94_web_storage)
2. getPerson: recebe um e-mail e retorna o objeto correspondente(caso o mesmo exista, do contrário retornará null)
3. deletePerson: coleta o e-mail do usuário no modal e o remove do [localStorage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_%E2%80%94_web_storage), caso o mesmo exista. do contrário retornará null
4. editPerson: coleta os dados do usuário digitados na página HTML e o salva novamente no [localStorage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_%E2%80%94_web_storage)
5. personFormater(): recebe um objeto do tipo person e retorna sua descrição completa, usado para exibir os dados de um objeto no front-end
6. todos os métodos que se iniciam com open... (ex:openCreateModal, openSearchModal): servem para exibir os modals de coleta de dados no front-end do projeto, especificamente no openEditModal, o mesmo se encarrega também de buscar os dados de um usuário e posteriormente exibilos no modal de edição
7. save: salva uma pessoa no [localStorage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_%E2%80%94_web_storage)
8. factoryPerson: responsável por criar o objeto pessoa;



***

## Dificuldades encontradas ao longo do desenvolvimento

- padronizar os métodos para que os mesmos tivessem um padrão específico de retornos
- formatação dos objetos, saber quando usar o JSON.stringfy e JSON.parse
- otimizar o código para evitar duplicidade, o que gerou métodos como save(usado em edit e createPerson), personFormater(usado para formatar o objeto e exibi-lo no front de uma forma mais agradável ao usuário)
- desenvolver um HTML e CSS que possam lidar com os dados solicitados e enviados pelo back-end

***



