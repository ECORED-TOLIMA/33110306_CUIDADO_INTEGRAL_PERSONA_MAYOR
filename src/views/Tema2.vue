<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Envejecimiento y ciclo vital

    p.mt-4(data-aos="fade-right") Luego de comprender el marco normativo que protege a la persona mayor y orienta el ejercicio del cuidado, es necesario abordar el proceso de envejecimiento desde una perspectiva biológica, psicológica y social. El conocimiento de los cambios propios de esta etapa del ciclo vital permite identificar necesidades, establecer prioridades y orientar adecuadamente las acciones de cuidado según el nivel de dependencia.

    //- Franja #754114 de 919x350 en (495,425) con la caja blanca de 685x262 y la foto de
    //- 614x350 saliéndose por la izquierda.
    .bloque-texto-g.color-1-vo.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/foto-1.png')})` }")
      .bloque-texto-g__texto.p-4
        p El envejecimiento no es una enfermedad, sino un proceso natural, progresivo e irreversible que forma parte del ciclo vital humano. Este proceso implica transformaciones físicas, funcionales, cognitivas y sociales, las cuales pueden presentarse de manera diferente en cada persona, dependiendo de sus condiciones de salud, su entorno y sus estilos de vida.
        p.mb-0 Comprender el envejecimiento desde una visión integral facilita el desarrollo de prácticas de cuidado más adecuadas, respetuosas y centradas en la persona, reconociendo sus capacidades, limitaciones y necesidades particulares.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Conceptos clave

    //- Caja #E2EAFF de 728x289 con el icono de 84 dentro y el panel #F3F9FF de 499x289 al lado.
    .row.align-items-stretch.mt-4
      .col-lg-7.mb-4.mb-lg-0
        .bg-2-vc.p-4.h-100(data-aos="fade-right")
          figure.mb-3
            img(src="@/assets/curso/temas/t2/ic-1.svg" style="width: 84px")
          p.mb-0 El envejecimiento es un proceso natural, progresivo e irreversible que forma parte del ciclo vital humano. Este proceso implica cambios físicos, psicológicos y sociales que pueden influir en la funcionalidad y autonomía de la persona. Su manifestación varía en cada individuo, ya que está determinada por factores como las condiciones de salud, los estilos de vida, el entorno y las condiciones socioeconómicas.
      .col-lg-5
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t2/ilus-1.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Comprender el envejecimiento desde una perspectiva integral permite orientar el cuidado de manera adecuada, reconociendo tanto las capacidades como las necesidades de la persona mayor. En este contexto, es importante diferenciar algunos conceptos clave que aportan a la comprensión de esta etapa:

    //- Seis tarjetas de 396 con la foto de 396x247 y la franja #FFE1E1 de 396x66 que se desliza
    //- hacia arriba: `.tarjeta-slide.arriba` del catálogo (t10/Tarjetas_animadas).
    .row.mt-4
      .col-md-6.col-lg-4.mb-4
        .tarjeta.tarjeta-slide.arriba.color-curso
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 #[img(src="@/assets/curso/temas/t2/btn.svg" style="width: 32px")] Envejecimiento
              p.mb-0 Proceso continuo de transformación que experimenta el ser humano a lo largo de la vida, caracterizado por cambios que pueden afectar la funcionalidad, sin que esto implique necesariamente enfermedad.
            .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/con-1.png')})`}")
      .col-md-6.col-lg-4.mb-4
        .tarjeta.tarjeta-slide.arriba.color-curso
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 #[img(src="@/assets/curso/temas/t2/btn.svg" style="width: 32px")] Persona mayor
              p.mb-0 Término utilizado en el ámbito normativo y social para referirse a las personas de 60 años o más, reconociéndolas como sujetos de derechos y promoviendo un enfoque de respeto e inclusión.
            .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/con-2.png')})`}")
      .col-md-6.col-lg-4.mb-4
        .tarjeta.tarjeta-slide.arriba.color-curso
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 #[img(src="@/assets/curso/temas/t2/btn.svg" style="width: 32px")] Geriatría
              p.mb-0 Rama de la medicina especializada en la atención de la persona mayor, enfocada en la prevención, diagnóstico, tratamiento y rehabilitación de enfermedades, con el propósito de mantener la funcionalidad y mejorar la calidad de vida.
            .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/con-3.png')})`}")
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-curso
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 #[img(src="@/assets/curso/temas/t2/btn.svg" style="width: 32px")] Adulto mayor
              p.mb-0 Denominación comúnmente empleada para referirse a las personas de 60 años o más. Aunque sigue en uso, ha sido reemplazada progresivamente por el término «persona mayor», por considerarse más inclusivo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/con-4.png')})`}")
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-curso
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 #[img(src="@/assets/curso/temas/t2/btn.svg" style="width: 32px")] Gerontología
              p.mb-0 Disciplina que estudia el envejecimiento desde una perspectiva integral, abordando aspectos biológicos, psicológicos y sociales, con el fin de comprender las condiciones de vida de la persona mayor y promover su bienestar.
            .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/con-5.png')})`}")
      .col-md-6.col-lg-4
        .tarjeta.tarjeta-slide.arriba.color-curso
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              h4 #[img(src="@/assets/curso/temas/t2/btn.svg" style="width: 32px")] Edad mayor
              p.mb-0 Expresión general que hace referencia a la etapa del ciclo vital en la que se presentan los cambios asociados al envejecimiento, generalmente a partir de los 60 años.
            .tarjeta-slide__img(:style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/con-6.png')})`}")

    p.mt-4(data-aos="fade-right") El reconocimiento de estos conceptos permite comprender el envejecimiento como un proceso diverso y dinámico, facilitando la toma de decisiones en el cuidado y promoviendo una atención centrada en la persona, respetuosa de su dignidad, autonomía y calidad de vida.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Ciclo vital y cambios propios del envejecimiento

    p.mt-4(data-aos="fade-right") El ciclo vital es el proceso continuo de desarrollo que experimenta el ser humano desde el nacimiento hasta la muerte. Cada etapa está marcada por transformaciones físicas, psicológicas y sociales que influyen en la forma en que la persona se adapta a su entorno y responde a sus necesidades.

    //- Franja #754114 de 919x285 a la izquierda con la caja blanca y la foto de 614x285 a la
    //- derecha: eso es `--inverso`.
    .bloque-texto-g.color-1-vo.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/foto-2.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 La adultez mayor constituye una etapa del ciclo vital caracterizada por cambios progresivos asociados al paso del tiempo. En Colombia, se considera persona mayor a quien tiene 60 años o más, según la Ley 1251 de 2008. Sin embargo, la edad cronológica no determina por sí sola la funcionalidad, ya que el envejecimiento es un proceso individual influenciado por factores genéticos, estilos de vida, condiciones socioeconómicas y acceso a servicios de salud.

    p.mt-4(data-aos="fade-right") En el plano biológico, el envejecimiento implica una disminución gradual de la capacidad de regeneración celular y adaptación fisiológica. Estos cambios pueden manifestarse en diferentes dimensiones:

    //- Cuerpo abierto #E2EAFF de 1228x422 y filas cerradas #FFE1E1 de 1228x86 con r=10.
    AcordionA.acordion--curso.mt-4(tipo="a" clase-tarjeta="tarjeta acordion-tarjeta--curso")
      .row(titulo="Cambios físicos y funcionales")
        .col-lg-6
          ul.lista-ul.mb-0
            li
              i.fas.fa-circle
              | Disminución de la fuerza muscular y la resistencia.
            li
              i.fas.fa-circle
              | Reducción de la elasticidad de la piel.
            li
              i.fas.fa-circle
              | Alteraciones en el equilibrio y la coordinación.
            li
              i.fas.fa-circle
              | Disminución de la agudeza visual y auditiva.
            li.mb-0
              i.fas.fa-circle
              | Mayor prevalencia de enfermedades crónicas como hipertensión, diabetes y artrosis.
        .col-lg-6.mt-4.mt-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t2/foto-3.png").w-100
      .row(titulo="Cambios cognitivos")
        .col-12
          ul.lista-ul.mb-0
            li
              i.fas.fa-circle
              | Disminución leve en la velocidad de procesamiento de la información.
            li
              i.fas.fa-circle
              | Posibles dificultades en la memoria reciente.
            li.mb-0
              i.fas.fa-circle
              | Conservación de conocimientos, experiencias y habilidades adquiridas a lo largo de la vida.
      .row(titulo="Cambios emocionales y sociales")
        .col-12
          ul.lista-ul.mb-0
            li
              i.fas.fa-circle
              | Transición a la jubilación y cambios en el rol productivo.
            li
              i.fas.fa-circle
              | Reconfiguración de las dinámicas familiares.
            li
              i.fas.fa-circle
              | Posible reducción de redes sociales.
            li.mb-0
              i.fas.fa-circle
              | Necesidad de reconocimiento y participación activa.

    p.mt-4(data-aos="fade-right") El envejecimiento no debe entenderse únicamente como un proceso de pérdida, sino también como una etapa de consolidación de experiencias, saberes y adaptación. Muchas personas mayores mantienen autonomía, independencia y capacidad de toma de decisiones.

    //- `.cajon` de 1020x83 con la pestaña de 25x8 en (292,3493).
    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-1.p-4(data-aos="fade-up")
          p.mb-0 Desde el enfoque de curso de vida adoptado por el sistema de salud colombiano (Resolución 3280 de 2018), la atención se orienta a mantener la funcionalidad el mayor tiempo posible, prevenir el deterioro innecesario y fortalecer las capacidades existentes.

    p.mt-4.mb-0(data-aos="fade-right") Comprender los cambios propios del envejecimiento permite reconocer las condiciones que pueden influir en la autonomía de la persona mayor y orientar el cuidado de manera adecuada. En este sentido, el abordaje integral de esta etapa se apoya en disciplinas especializadas que estudian el envejecimiento desde diferentes perspectivas, como la geriatría y la gerontología.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
