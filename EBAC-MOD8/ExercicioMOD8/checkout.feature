            #Lenguage: pt

            Funcionalidade: Checkout
            Como cliente da EBAC-SHOP
            Quero concluir meu cadastro
            Para finalizar minha compra

            Contexto:
            Dado que eu acesse a página de checkout

            Esquema do Cenario: Autenticações
            Quando eu inserir o <nome> <sobrenome> <empresa> <pais> <endereco> <cidade> <cep> <telefone> <e-mail>
            Então deve exibir <mensagem>

            Exemplos:
            | nome   | sobrenome | empresa        | pais     | endereco        | cidade           | cep        | telefone          | e-mail              | mensagem                                          |
            | "Nina" | "Cavadas" | "Nina petshop" | "Brasil" | "Rua Azul,1505" | "Rio de janeiro" | "9999-999" | "(21) 88888-8888" | "nina2310@ebac.com" | "Cliente cadastrado com sucesso"                  |
            | "Nina" | "Cavadas" | "Nina petshop" | "Brasil" | --              | "Rio de janeiro" | "9999-999" | "(21) 88888-8888" | "nina2310@ebac.com" | "Por favor preencha todos os campos obrigatórios" |
            | "Nina" | "Cavadas" | "Nina petshop" | "Brasil" | "Rua Azul,1505" | "Rio de janeiro" | "9999-999" | "(21) 88888-8888" | "nina2310.ebac.com" | "E-mail inválido."                                |