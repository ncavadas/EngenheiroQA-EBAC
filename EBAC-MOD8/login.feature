#language: pt

Funcionalidade: Tela de login
Como aluno do portal EBAC
Quero me autenticar
Para visualizar minhas notas

Contexto:
Dado que eu acesse a página de autenticação do portal EBAC

Cenário: Autenticação válida
Quando eu digitar o usuário "joão@ebac.com.br"
E a senha "senha@123"
Então deve exibir uma mensagem de boas vindas "Olá, João."

Cenário: Usuário inexistente
Quando eu digitar o usuário "j22oão@ebac.com.br"
E a senha "senha@123"
Então deve exibir mensagem de alerta: "Usuário inexistente."

Cenário: Usuário com senha inválida
Quando eu digitar o usuário "j22oão@ebac.com.br"
E a senha "senhass@123"
Então deve exibir mensagem de alerta: "Senha inválida."

Esquema do Cenário: Autentica multiplos usuários
Quando eu digitar o <usuario>
E a <senha>
Então deve exibir a <mensagem> de sucesso

Exemplos:
| usuario             | senha         | mensagem                     |
| "nina.123@Ebac.com" | "teste#123"   | “Olá, Nina.”                 |
| "nina@EBAC.com"     | "teste#123"   | “Usuário ou senha inválidos” |
| "nina@EBAC.com"     | "teste%%$323" | “Usuário ou senha inválidos” |
| "nina@EBAC.com"     | "teste%%$111" | “Usuário ou senha inválidos” |
| "nina@EBAC.com"     | "teste%%$555" | “Usuário ou senha inválidos” |
| "nina@EBAC.com"     | "teste%%$233" | “Usuário ou senha inválidos” |