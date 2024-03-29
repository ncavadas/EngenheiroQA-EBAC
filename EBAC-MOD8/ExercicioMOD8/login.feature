#Lenguage: pt

Funcionalidade: Login na plataforma
Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma
Para visualizar meus pedidos

Contexto:
Dado que eu acesse a página de login

Cenario: Autenticação válida
Quando e digitar o usuário "nina2310@EBAC.com"
E a senha "1234@Teste"
Então o sistema deve direcionar o cliente para o Checkout

Esquema do Cenario: Autenticações inválidas
Quando eu inserir o <usuario> e <senha>
Então deve exibir <mensagem>

Exemplos:
| usuario             | senha       | mensagem                     |
| "nina2310@ebac.com" | "1234Teste" | “Usuário ou senha inválidos” |
| "nina2310@ebac.com" | "Hml_002"   | “Usuário ou senha inválidos” |