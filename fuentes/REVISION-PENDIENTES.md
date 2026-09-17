# Decisiones y pendientes de maquetación

Este archivo recoge, con su motivo, todo lo que no se pudo resolver mirando solo el `.xd`: los
puntos en que el diseño y el PDF no coinciden, los que el diseño deja al desarrollador y los que
quedan a la espera de un material que todavía no llegó.

1. **Los rótulos del cuadro de color se equivocan en tres valores.** La paleta se tomó del
   `fill` de los dieciséis rects de 295x68 de la portada y se comprobó, uno a uno, contra el
   píxel del PDF: coinciden los dieciséis. El texto impreso dentro del propio cuadro **no**:
   dice `#FEF79D` para 3‑VO (el rect es `#5B470F`), `#A4FFBF` para el terciario (es `#FC9EDD`) y
   `#E2FEEE` para el terciario claro (es `#FEE1F7`). Manda el rect.

2. **Introducción — el vídeo.** El artboard deja el bloque como marcador («Espacio para
   video», 1228x580 con r=10). Llegó el **guion** (`33110306_CF01_Guion_Introduccion_Video.docx`,
   228 palabras, titulado «Cuidado y valoración integral de la persona mayor»), pero ni el
   `.xd`, ni el `_DI`, ni el guion traen la URL. Queda el `iframe` del scaffold hasta que llegue
   el enlace real.

3. **Créditos.** Los dos autores del contenido instruccional salen del `CONTROL DEL DOCUMENTO`
   del `_DI` (Laura Briguitte Perea Possos y Viviana Herrera Quiñonez). Los tres nombres del
   equipo de producción se actualizaron a los que el maquetador corrigió en el entregable
   anterior (Ernesto Navarro Jaimes, Jorge Eduardo Rueda Peña y Jorge Bustos Gómez), porque el
   scaffold sigue trayendo los antiguos; conviene confirmarlos.

4. **El PDF del menú «Descargar PDF» lo pone el cliente.** El scaffold apuntaba a
   `downloads/dist.pdf`, que no existe. El menú ya apunta a `downloads/33110306_CF01_CFA_DU.pdf`
   siguiendo la convención de los otros entregables; falta el fichero.

5. **La actividad — las diez imágenes.** El `_AD.docx` no trae imágenes y el `.xd` no tiene
   artboard de actividad. Se construyeron con el lenguaje gráfico del propio curso: las diez
   composiciones que el XD dibuja en los temas —persona recortada sobre la placa lila con la
   forma tan, los corazones rosas y el galón azul— recortadas a cuadrado de 396x396. Las diez
   son distintas y todas las personas salen de este `.xd` (tiene trece recortes sobre fondo
   transparente en `resources/`), así que no se tomó nada de otro entregable.


## Validación de hallazgos del revisor (`fuentes/VALIDACION-HALLAZGOS.docx`, 2026-09-17)

**6. El «borde de colores» de las tarjetas del 3.2 (hallazgo 12).** El hallazgo pide «los bordes
de los colores solicitados» y su captura del XD muestra un contorno azul en la primera tarjeta.
Ese contorno **no está en el diseño**: no hay ningún trazo azul ni en la mesa de trabajo ni en
el pasteboard (comprobado nodo a nodo). Es la marca de selección de Adobe XD sobre el objeto
que el revisor tenía seleccionado al capturar. Se implementa lo que el hallazgo sí dice de
forma explícita —«cuando se pase el mouse encima cambien de color»— y las tarjetas pasan al
azul `#E2EAFF` en `:hover`, que es el segundo juego de colores que el XD dibuja en el 9.1.
**Si el diseño quería además un borde, hace falta que lo dibuje.**

**7. El icono en `:hover` (hallazgos 12 y 35).** En el 9.1 el XD dibuja las cuatro tarjetas dos
veces: rosa con el disco `#9E0909` y azul con el disco `#080F71`. La tarjeta cambia de color al
pasar el ratón, pero **el disco del icono sigue en rojo**: el icono va en un PNG y cambiarlo
pediría un segundo juego de imágenes por tarjeta. Queda anotado por si el cliente lo exige.

**8. La numeración y las viñetas.** El kit decide el contraste solo (`textColor()`) y sobre el
amarillo `#FEE85B` devuelve blanco; el XD las pinta siempre en `#12263F`. Corregido para el
numeral del tema y para la viñeta cuadrada de las listas numeradas.

## Segunda vuelta de validación (2026-09-17, tarde)

El revisor marcó el `.docx` por colores: **amarillo = ajustado, verde = pendiente**. De los 53,
26 quedaron ajustados y 25 pendientes. Los pendientes se atacan en esta entrega.

**9. Lo que no se pudo cerrar y por qué.**

- *«Bordes de color azul cortados» / «bordes redondos cortados» (hallazgos 14, 26, 34).* Los
  anillos de los iconos y el radio de las tarjetas se recortan en el borde del carrusel, que
  lleva `overflow: hidden` del propio kit (`ScrollHorizontal`). Quitarlo rompe el
  desplazamiento. Queda para decidir con el diseñador: o se reduce el icono, o el carrusel
  necesita un `padding` que el componente del kit no expone.
- *«Información de tarjetas incompletas» (hallazgo 21) y «recurso no corresponde» (44, 49).*
  No se identificó con certeza a qué bloque apuntan: sus capturas no muestran el título de la
  sección. Hacen falta las coordenadas o el nombre del subtema.
- *El icono en `:hover`* sigue como en la nota 7: la tarjeta cambia de color, el disco del
  icono no.
