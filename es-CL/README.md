# Style Guide Spanish, Chile, (es-CL)

## Introducción

Bienvenido a la guía de estilo para la localización de es-CL. Aquí encontrarás las reglas y la terminología que utilizamos para tener una línea definida en el estilo de traducción, manteniendo así la coherencia y consistencia en el programa.:

Esta guía se divide en dos partes, la primera trata sobre el estilo y las reglas específicas del lenguaje que usamos para la localización. La segunda parte hace alusión a las reglas generales que Mozilla definió para todo traductor (incluyendo principios de precisión y fluidez), una ayuda para ayudarte a traducir mejor.

## Estilo y reglas específicas del lenguaje

### Estilo

El estilo de es-CL, en términos generales, se caracteriza por ser directo con sus usuarios. A continuación encontrarás los detalles con respecto a la manera en que nos aproximamos al lector.

### Formalidad y Tono

Para la localización de es-CL usamos un tono relativamente informal y nos dirigimos a la segunda persona en la formulación de las oraciones (a un "Tú" en vez de a un "Usted"), esto es para aparentar una cercanía con el lector, recurso que nos es pertinente bajo el contexto social chileno.

### Expresiones naturales

Es importante usar expresiones que le parezcan naturales al lector, de forma de que se transmita el mensaje exactamente como se quiere expresar y le brinden comodidad y gracia al usuario. La exacta transmisión de lo que quiere expresarse en una forma natural puede requerir experiencia y conocimiento socio-cultural.

### Expresiones culturales y jergas

En es-CL nos parece adecuada la utilización de jergas y expresiones idiomáticas o culturales, ya que estas suelen fomentar el tipo de relación que queremos llegar a tener con el usuario. Es importante usarlas con precisión y discreción, de modo de que no se dificulte la comprensión del mensaje a transmitir. El uso de estas expresiones requiere evidentemente de un conocimiento cultural y un correcto entendimiento tanto del mensaje a traducir como del mensaje a transmitir.

### Consistencia

Es importante que los traductores sepan como mantener la consistencia en las traducciones, para esto hemos creado un glosario con algunas palabras conflictivas con sus respectivas traducciones según es-CL. Es relevante que se revise constantemente la consistencia, para esto existen herramientas como Transvision que pueden usar los controladores de calidad para dejar todo en un estilo similar de traducción.

### Unidades de conversión

#### Formato de fecha

El formato para escribir fechas es el siguiente: Día/Mes/Año

#### Números

Los números se expresan con su respectivo símbolo. Con la coma (,) se separan los decimales y los miles, con un punto (.).

  **ejemplo:** `1,23` (separación de decimales) y `1.000` (separación de miles)

#### Moneda

Para el precio de las aplicaciones u otros utilizamos el símbolo `$`.

#### Unidades

Para medir unidades de distancia, peso y otros utilizamos el sistema métrico.

#### Nombres

Para los nombres de personas se escriben primero los nombres y después el apellido.

### Ortografía y gramática

La ortografía y gramática que usamos es la normativa del español, con algunas palabras exclusivamente chilenas añadidas.

#### Abreviaciones

No usamos abreviaciones de palabras debido a que pueden complicar el entendimiento del mensaje

Los conceptos escritos en ingles que no tienen traducción en es-CL, se dejan tal como están (no se abrevian).

#### Puntuación

La mayoría de los mensajes deben terminar con un punto, pero en este ítem se debe considerar la cadena en la fuente original. Generalmente si la cadena termina con punto, la cadena traducida también lo hará, en caso contrario no lo hará.

#### Mayúsculas

Solo escribimos la primera palabra de cada cadena con mayúsculas, a menos que se mencionen nombres propios, nombres de compañía, marcas, productos y títulos de libros en cuyo caso estas también llevan mayúsculas.

**Títulos :**  Deben ser breves y precisos. Los localizadores deben asumir que 2/3 de la cadena es de contenido. Esto ayuda a que las cadenas se vean enteras y no sean cortadas por los tres puntitos (`...`).

## Reglas generales L10n de Mozilla

### Precisión

#### Traducción basada en el significado

Al traducir, el significado es lo más importante. Un traductor debe entender exactamente lo que quiere decir el texto, para después escribir la traducción equivalente en el idioma a localizar. Lograr esto puede ser difícil, por lo que te recomendamos preguntarte la siguientes preguntas:

* ¿Que significa esta palabra/oración/cadena en ingles?
* ¿Cual es el mensaje que el autor esta tratando de transmitir?
* ¿Como expresaría eso en mi idioma?

Usualmente la memoria de traducción y la traducción automática pueden ofrecer sugerencias incorrectas. Si usas alguna de estas herramientas asegúrate de corregir estas sugerencias antes de enviar tu trabajo. Intenta evitar la traducción literal, muchas veces no es la forma adecuada de localizar. Fíjate bien en las palabras que se escriben igual en ingles que en español, pero tienen distinto significado.

### No debe traducirse

#### Teclas de acceso rápido

Las teclas de acceso rápido permiten al usuario saltar inmediatamente a alguna parte de una página web, estas se pueden modificar para que se adapten a diferentes idiomas. Las teclas de acceso rápido tienen sus propias lineas dentro de los archivos .dtd y .properties, estas pueden ser identificadas porque tienen en su nombre ".acceskey".

#### Variables

Las variables no deben ser traducidas. Puedes reconocer una variable en una cadena cuando esta empieza con un carácter especial ($, #, %, etc.) seguido de una combinación de letras sin espacios. Por ejemplo, $BrandShortName y %S son variables.  Puedes mover una variable dentro de la cadena si la traducción lo requiere.

#### Marcas y copyright

Marcas, nombre de empresas y copyrights no deben ser traducidos. ve a <a> href="https://www.mozilla.org/en-US/styleguide/communications/translation/">la guía para marcas </a> para más detalles.

#### Contenido legal

Los proyectos de Mozilla se referirán muchas veces a contenido legal, en forma de acuerdos de usuario, normas de privacidad,etc. Para traducir estas, los localizadores deberán traducir con precaución y acorde a los criterios de precisión y fluidez contenidos en esta guía, y siempre en consonancia con los valores y cultura de Mozilla.

### Fluidez

Para producir una traducción fluida, esta no solo debe seguir la gramática, puntuación y ortografía correcta, si no que también debe evitar ser ambigua, incoherente, inconsistente e ininteligible.

Para evitar la ambigüedad, el traductor debe entender el significado detrás de la fuente, incluyendo todas las implicancias que el texto pretende sugerir. Por ejemplo, si la palabra "it" es mencionada en el texto fuente, el traductor debe comprender a lo que se esta haciendo alusión. Esto ayuda a mantener la traducción coherente.

Finalmente, en la revisión, hay veces en que las traducciones de algunas cadenas no tienen sentido y si no sabes exactamente como arreglarlas, pero sabes que carecen de inteligibilidad y fluidez, entonces puedes reportarlas a otros traductores.
