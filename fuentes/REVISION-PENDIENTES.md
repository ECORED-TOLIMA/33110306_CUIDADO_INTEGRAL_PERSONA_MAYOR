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

