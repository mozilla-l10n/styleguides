# Style Guide Portuguese (Brazilian) (pt-BR)

Bem-vindo à comunidade de localização pt-BR da Mozilla! Este é um guia para ajudá-lo a contribuir na tradução do Firefox e outros projetos da Mozilla para o Português do Brasil.

Nós levantamos alguns tipos de erros comuns em traduções e achamos que seria uma boa ideia listá-los e detalhar como evitá-los para você começar com o pé direito e ter suas traduções ajudando milhões de pessoas o mais rápido possível =).

## Erros de precisão

São divididos em quatro tipos: **Tradução**, **Adição**, **Omissão** e **Texto não traduzido**, todos estes tipos são explicados abaixo.

### Tradução

Certifique-se que a sua tradução mantenha o mesmo significado do texto original em Inglês. Dessa forma, você estará garantindo que as ideias do autor original do artigo serão mantidas e que as informações estão corretas. Se for necessário, explique um termo que não foi traduzido para que o usuário - normalmente alguém que está lendo o artigo porque precisa de ajuda - entenda tudo o que está escrito.

Por exemplo, em um artigo do SUMO:

* **Original:** Download this Python library.
* **Tradução incorreta:** Baixe essa livraria de Python.
* **Tradução correta:** Baixe essa biblioteca Python.

### Adição

A sua tradução deve manter o sentido do texto original, não adicione novos conceitos ou ideias que não fazem parte dele.

Por exemplo, em um produto:

* **Original:** Download this Python library.
* **Tradução incorreta:** Baixar e instalar essa biblioteca Python.
* **Tradução correta:** Baixar essa biblioteca Python.

Caso a explicação de um termo seja longa, procure fazer um link para outro artigo do SuMo ou externo que trate do assunto.

Por exemplo, em um artigo do SUMO:

`[[Customize the New Tab page|Personalize uma nova aba]] para ver ...`

Nesse exemplo, será criado um link que direciona para a página [Customize the New Tab page](https://wiki.mozilla.org/index.php?title=Customize_the_New_Tab_page&action=edit&redlink=1) (em Português do Brasil, se já estiver traduzida).

### Omissão

Sempre traduza todo o conteúdo do texto original. Por exemplo: se o texto original descrever um processo, confira se todos os passos foram traduzidos e se nenhum detalhe de cada passo foi perdido na tradução.

Por exemplo em um produto:

* **Original:** Download this Python library.
* **Tradução incorreta:** Baixar essa biblioteca.
* **Tradução correta:** Baixar essa biblioteca Python.

### Texto não traduzido

Evite deixar trechos do texto original no artigo após terminar a tradução. Além de ser esteticamente desagradável, a função do artigo é ser uma versão em Portuguẽs: portanto, não deve conter trechos do texto original.

Por exemplo em um artigo do SUMO:

* **Original:** Download this Python library.
* **Tradução incorreta:** Baixe essa library Python.
* **Tradução correta:** Baixe essa biblioteca Python.

## Erros de fluência

### Ortografia

É muito importante que o Português seja utilizado corretamente nas traduções, para isso, certifique-se que a ortografia está correta através do corretor ortográfico do seu navegador ([instale aqui](https://addons.mozilla.org/pt-br/firefox/language-tools)), ou copie o texto para o seu editor de texto favorito (Libreoffice Writer, Microsoft Word, etc) e faça as correções necessárias. Em casos em que o verificador ortográfico não funcionar (como em expressões inglesas que não podem ser traduzidas, nomes de variáveis, CSS e tags de marcação de texto) [consulte a terminologia](https://pontoon.mozilla.org/terminology/).

### Gramática

Use a gramática normativa do Português. Caso tenha dúvidas, consulte: [http://portugues.uol.com.br/gramatica/](http://portugues.uol.com.br/gramatica/)

## Erros de terminologia

Traduza termos de forma consistente, use o [projeto de terminologia](https://pontoon.mozilla.org/terminology/) e o [dicionário Transvision](https://transvision.mozfr.org/) caso tenha dúvidas. Por exemplo, traduza "tab" sempre como "aba", e não "guia" e principalmente não traduza o mesmo termo de formas diferentes no mesmo projeto.

## Erros de estilo

Prefira um tom casual: preferimos usar termos mais informais em casos ambíguos (ativar vs. habilitar). Não use gírias, mas também não escreva como se o artigo fosse endereçado ao papa.

Para produtos (Firefox e Firefox para Android), siga a pontuação do texto original. Para artigos (SUMO, snippets) essa regra não é tão importante, sinta-se livre para usar a pontuação que produz um texto fluido e natural.

Produtos usam voz passiva (Iniciar uma conversa…, Exibir todo o histórico, etc). Artigos do SUMO usam a voz ativa (Clique no menu Ferramentas, etc).

Para textos que são exibidos em menus e interface de produtos em geral, tente ser breve, para evitar que o texto seja cortado. O Pontoon mostra o número de caracteres da sua tradução comparado com o texto original.

Algumas strings possuem strings auxiliares que controlam o tamanho do elemento gráfico onde o texto vai ser exibido. Nesses casos, é possível testar e escolher um tamanho mais adequado para a string em Português. Por exemplo, [trackingProtection.state.width em browser/chrome/browser/aboutPrivateBrowsing.dtd](https://pontoon.mozilla.org/pt-BR/firefox-aurora/browser/chrome/browser/aboutPrivateBrowsing.dtd/)

## Erros de design

### Quebra de texto

As vezes é melhor reduzir ou abreviar uma palavra para manter o sentido entre o Inglês e o Português. Não existem regras rígidas sobre ser ou não apropriado, mas ao testar a tradução no contexto você pode decidir entre abreviar uma palavra, deixá-la cortada ou usar uma tradução menor. Isso é especialmente importante quando as últimas palavras de uma sentença são importantes e você quer evitar que elas sejam cortadas. As vezes é melhor abreviar as palavras iniciais para manter as últimas palavras intactas.

### Tags de marcação de texto e código

Tags de marcação são comuns em strings de produtos da Mozilla. Uma regra geral é que qualquer texto entre os sinais de "menor que" e "maior que" (<>) não deve ser traduzido. Se uma string contém codigo HTML, normalmente isso demonstra a formatação em que o texto é exibido. Por exemplo, uma string em Inglês pode ser `"Firefox is the <em>best</em> browser!"`. Algumas vezes faz sentido manter a marcação na mesma palavra em Português mas em outras será necessário colocar as marcações em outra palavra na tradução. Se uma string contém o marcador de nova linha (`\n` em PHP e `<br>` em HTML) será necessário adequar o posicionamento dela para garantir que a tradução está corretamente formatada.

### Manipulação de variáveis

Qualquer palavra que comece com '&' o '%' não deve ser traduzida pois são variáveis utilizadas nos produtos para referenciar outras strings. Alguns exemplos comuns de variáveis e placeholders (codigos utilizados para determinar onde conteúdo externo deve ser inserido) são '&brandShortName' (que normalmente resulta em 'Firefox'), '%1$S' ou '%@'.

### Aceleradores

Para aceleradores comuns nós tentamos usar a primeira letra da tradução ou a primeira letra da segunda palavra para ter uma visibilidade melhor. Por exemplo, "A" em "Abrir" no menu Arquivo do Firefox.

Quando itens do mesmo menu têm conflitos, nós tentamos priorizar os itens mais usados para que eles tenham os aceleradores melhores.

Tente manter consistência entre menus idênticos ou parecidos.

Leia a documentação sobre aceleradores do XUL para entender o que torna um acelerador bom ou ruim: [https://developer.mozilla.org/en-US/docs/XUL_Accesskey_FAQ_and_Policies](https://developer.mozilla.org/en-US/docs/XUL_Accesskey_FAQ_and_Policies)

## Erros de veracidade

Em produtos da Mozilla nós tentamos não traduzir certos trocadilhos que encontramos. Por exemplo, a Awesomebar (algo como "barra incrivel") foi traduzida como barra de localização.

Nos materiais de marketing da Mozilla tentamos encontrar a melhor expressão ou gíria no Português que tem o mesmo tom e significado na nossa cultura.

Quando encontramos metáforas que são específicas para a cultura americana (por exemplo, uma metáfora sobre baseball sendo usada para descrever uma funcionalidade do Firefox), nós reescrevemos a metáfora para que ela seja mais aplicável para a cultura brasileira (por exemplo, mudando a metáfora para uma sobre futebol).

## Notas

Este guia de estilos foi criado utilizando o método [Multidimensional Quality Metrics](http://www.qt21.eu/mqm-definition/issues-list-2015-12-30.html)
