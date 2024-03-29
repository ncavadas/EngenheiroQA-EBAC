            #Lenguage: pt

            Funcionalidade: Configurar produto e inserir no carrinho
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado que eu acesse a página do produto escolhido

            Cenario: Autenticação válida
            Quando eu selecionar a "tamanho", "cor" e "quantidade"
            E clicar em "comprar"
            Então o produto deve ser adicionado ao carrinho

            Esquema do Cenario: Autenticações inválidas
            Quando eu inserir a <cor>, <tamanho> e <quantidade>
            E clicar em "comprar"
            Então deve exibir <mensagem>

            Exemplos:
            | tamanho | cor      | quantidade | mensagem                                                                |
            | "G"     | "blue"   | "15"       | "Quantidade em estoque: 10."                                            |
            | --      | "Orange" | "1"        | "Selecione uma das opções do produto antes de adicioná-lo ao carrinho." |