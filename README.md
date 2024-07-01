# mySOLIDapi

GymPass style app

## FR

[]deve ser possivel se cadastrar
[]deve ser possivel se autenticar
[]deve ser possivel obter o perfil de um usuario logado
[]deve ser possivel obter o numero de check-ins realizados pelo usuario logado
[]deve ser possivel o usuario obter seu histodico de check-ins
[] deve ser possivel o usuario buscar academias proximas
[] deve ser possivel o usuario buscar academias pelo nome
[] deve ser possivel o usuario realizar check-in em uma academia
[] deve ser possivel validar o check in de um usuario
[] deve ser possivel cadastrar uma academia

## Business Rules

[] o usuario nao pode se cadastrar com um email duplicado
[] o usuario nao pode fazer 2 check-ins no mesmo dia
[] o usuario nao pode fazer check in se nao estiver no minimo a 100 metros da academia
[] o check-in so pode ser validado ate 20 minutos apos criado
[] o check in so pode ser validado por administradores
[] a academia so pode ser cadastrado por administradores

## NFR

[]a senha precisa estar criptografada
[]os dados da aplicacao precisam estar persistido em um banco PostgreSQL
[]todas listas de dados precisam estar paginadas com 20 itens por pgaina
[]o ususario deve ser identificado por um jwt token
