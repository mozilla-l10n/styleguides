# Style Guide Spanish, Spain (es-ES)

## Convenciones de traducción

* La traducción de productos usa el tratamiento formal del usuario ("Choose an option:" → "Elija una opción:"), si bien se debe intentar, siempre que sea posible, utilizar formas impersonales.
* Por el contrario, la traducción de contenido web, aunque sea relativa a un producto, usa el tratamiento informal ("When you use Firefox, you browse safer" → "Cuando usas Firefox, navegas más seguro").
* Antes de traducir un término que puede encontrarse en otros paquetes de software, se debe buscar en el glosario (p.e.: Print Preview). La traducción presente en el glosario de Mozilla tiene preferencia sobre otras traducciones frecuentes.
* Las mayúsculas deben llevar tilde cuando sea necesario.
* Uso Indiscriminado De Mayúsculas: muchas cadenas de productos Mozilla tienen demasiadas palabras en mayúsculas. El acuerdo actual sobre en qué condiciones se mantienen las mayúsculas es que, como normal general, **no** se respetan las mayúsculas que no sean inicio de frase o nombres propios, cumpliendo así las normas de ortografía española. En cuanto a qué partes de los productos Mozilla se consideran entidades propias y, por tanto, con nombres propios, actualmente se consideran las siguientes:
  * Mozilla
  * Navigator
  * Composer
  * Mail & News
  * ChatZilla

* y no se consideran como tales las siguientes:
  * Address Book
  * Bookmarks
  * Manager (Cookie Manager, Form Manager, Certificate Manager...)

* No obstante, está por decidir si todos los nombres anteriores, incluyendo los de entidades propias, se traducen o no.
* A diferencia del inglés americano, en español los signos de puntuación van **fuera** de paréntesis, comillas, etc. Ej.:
  * Original en inglés: This will cancel the process (you can always do it later.)
  * Traducción: Esto cancelará el proceso (siempre podrá hacerlo más adelante).
* Hay muchos mensajes parametrizados, bien con secuencias del tipo #1, #2, etc., bien con indicadores del tipo %COLNAME%. Hay que llevar especial cuidado en mantener inalterados todos los parámetros.
* También hay mensajes que se extienden por más de una línea, por lo que incluyen saltos de línea. En la vista Chrome no se pueden apreciar los saltos, por lo que los mensajes largos, con palabras aparentemente pegadas, o con parámetros que parecen tener como nombre #1Location, #2Filename, etc. es preferible utilizar la edición en ventana ([Alt]+[E]).
* En la traducción de la ayuda pueden encontrarse referencias a un glosario de términos (p.e.: 'For short definitions, click <a href="glossary.xhtml#authentication">authentication</a>'. Puesto que los términos pueden variar en su traducción al español, se ha optado por mantener el nombre del enlace interno en el archivo glossary.xhtml. Por tanto, la traducción de la secuencia anterior, ya que es acuerdo de este proyecto traducir authentication por identificación, sería 'Para definiciones, haga clic en <a href="glossary.xhtml#authentication">identificación</a>'.
* También en la traducción de la ayuda es frecuente encontrar encabezados de sección de la forma Customizing Mozilla, Creating web pages with Composer, Navigating web pages, etc. La traducción de esta forma -ing debe ser al infinitivo, no al gerundio. Por tanto, los ejemplos anteriores se traducirían como Personalizar Mozilla, Crear páginas web con Composer y Navegar por las páginas web, respectivamente.

## Cuestiones abiertas

* Traducción de Locale: las propuestas son Configuración de zona, Configuración regional, Configuración de región y Configuración internacional. La fase de votación finalizó con empate entre Configuración de zona y Configuración regional.
* Traducción de User-Agent (en el correo y grupos de noticias): las propuestas son Agente de usuario y User-Agent (mantener original para las cabeceras de correo, por considerarse términos universales). La fase de votación finalizó con empate.
