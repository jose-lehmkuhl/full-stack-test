Endpoints
  - GET `/user`: Lista usuarios cadastrados no sistema. necessario ter o token de autenticação 
  - POST `/user`: cadastra novo usuario no sistema. objeto esperado no body: 
    ```
    {
      login: string REQUIRED
      password: string REQUIRED
      name: string OPCIONAL
      email: string OPCIONAL
    }
    ```
  - PATCH `/user`: Atualiza o usuario com as novas informacoes enviadas. necessario ter o token de autenticação recebido ao
  realizar o login utilizando a mesma conta que sera alterada. objeto esperado no body: 
    ```
    {
      login: string REQUIRED
      password: string OPCIONAL
      name: string OPCIONAL
      email: string OPCIONAL
    }
    ```
  - DELETE `/user`: Remove o usuario. necessario ter o token de autenticação recebido ao realizar o login utilizando a mesma conta que sera alterada. objeto esperado no body: 
    ```
    {
      login: string REQUIRED
    }
    ```
  - POST `/login`: retorna o token para o usuario. objeto esperado no body: 
    ```
    {
      login: string REQUIRED
      password: string REQUIRED
    }
    ```
  - GET `/beers`: retorna lista de cervejas. necessario token de autenticacao. query params opcionais: `perPage` e `page`