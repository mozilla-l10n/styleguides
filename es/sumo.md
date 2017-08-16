# SUMO/Guía

## Convenciones de traducción

A continuación se recogen unas cuantas convenciones de traducción.

## Títulos

Siempre que se traduzca un título al Español que contenga un gerundio en inglés, se tiene que traducir por un infinitivo al Español, por ejemplo:

`Installing Firefox`

habría que traducirlo por:

`Instalar Firefox`

(y nunca como `Instalando Firefox`)

En los títulos, nunca utilices puntos para terminar las frases: ni en los títulos de los documentos ni en los encabezados de secciones en el artículo.

Además, ten en cuenta que la norma en español es traducir los títulos sólo con la primera letra de la primera palabra en mayúscula (excepto si es nombre propio) y las demás palabras todas en minúscula, así por ejemplo:

`Importing From Safari On Windows`

debería ser:

`Importar desde Safari en Windows`

(no `Desde` o `En`, *nota la mayúscula*)

## Tratamiento al lector

La convención es utilizar siempre tratamiento de tú (`Puedes seleccionar el archivo que quieres abrir`) en lugar de usted (`Puede seleccionar el archivo que quiere abrir`). En general, es preferible evitar algunas construcciones específicas a determinados países (por ejemplo, el uso de "Podés seleccionar el archivo que querés abrir" en Argentina o Uruguay) usando el español más genérico.

## Formato de los enlaces

Los enlaces en el wiki de SUMO se escriben así:

`[[página|descripción]]`

Pero, como el sistema tiene relacionados los artículos en los distintos idiomas y, al mismo tiempo, sabe qué idioma prefiere el visitante, si mantenemos las referencias a las páginas en inglés, modificando únicamente la descripción (si es que en inglés existe), nos será más fácil asegurar que todos referenciamos un mismo artículo traducido desde cualquier sitio. Por ejemplo, si el artículo en inglés tiene este texto:

`...if you need help about installing Firefox,
you can read [[Installing Firefox in Windows]].`

conviene que lo traduzcamos así:

`...si necesitas ayuda sobre cómo instalar Firefox,
puedes leer [[Installing Firefox in Windows]].`

Así, si en otro artículo que referencie el documento de instalación en Windows, alguien se confunde al traducir el título y pone "Instalando Firefox en Windows", al mantener la referencia al documento en inglés original no acabaremos teniendo dos traducciones distintas para el mismo artículo.

En el caso de que en inglés la frase con enlace esté de esta manera:

`...you can see more about privacy in
the [[Options Window|panel Privacy in Options Window]]`

habría que traducirlo como:

`...puedes ver más acerca de la privacidad en
el [[Options Window|panel Privacidad de la ventana de Opciones]]`

## Documentar en es para múltiples variantes es-*

Sólo hay un idioma "es" en SUMO, pero tenemos que documentar para distintas variantes (es-AR, es-ES, etc.) y cada uno usa distintos términos en español para algunos términos en inglés (por ejemplo, "add-ons" se traduce como "agregados" en es-AR y como "complementos" en es-ES).

Para minimizar las diferencias y el esfuerzo para los traductores, hemos acordado que, quien traduzca un documento, use en estos casos su término local, añadiendo con una barra los términos de las otras variantes. Por ejemplo, una página traducida podría ser así:

`El administrador de agregados/complementos te permite
gestionar tus extensiones y temas.`

En la página [SUMO/Glosario](https://www.mozilla-hispano.org/documentacion/SUMO/Glosario) verás las diferentes variantes del español que actualmente hay en SUMO.

## Imágenes

Es preferible que no *localices* las imágenes sustituyéndolas por una con una localización al Español. La mayoría de las imágenes en inglés son suficientemente descriptivas y además, siempre se pone una explicación (escrita) de lo que muestran las imágenes.

Aunque si quieres sustituir alguna de ellas por una versión traducida, puedes hacerlo, pero POR FAVOR, **no llames al archivo igual que en la versión en-US**, porque entonces estarás sustituyendo la imagen también en el documento en inglés.

## Botones, etiquetas, ventanas…

La regla general en inglés es que se escriban los botones, ventanas, títulos, enlaces con cada palabra comenzando en mayúscula, por ejemplo:

`Private Browsing`

`Page Information`

esto es erróneo en español, y hay que traducirlo sólo la primera palabra en mayúscula, así por ejemplo:

`Navegación privada`

`Información de la página`

Si estos nombres son utilizados en una oración, hay que mantener el formato del español, por ejemplo:

`Puedes navegar de forma privada yendo al menú Herramientas y posteriormente seleccionando Navegación privada.`

Esto se hace así porque hacen referencia a elementos de la interfaz que están traducidos de esta manera en el programa
