<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    //- Columna de texto de 812 (x 185..997) y la composición de 396x414 en (1017,316) a su
    //- derecha. El `.cajon` de 812x144 lleva la pestaña de 25x8 en (187,423).
    .row.mt-4
      .col-lg-8
        p(data-aos="fade-right") El cuidado de la persona mayor constituye una responsabilidad social, familiar y ética que requiere conocimientos técnicos, sensibilidad humana y una comprensión integral del proceso de envejecimiento. Brindar un cuidado adecuado implica reconocer las características, capacidades y necesidades de cada persona, teniendo en cuenta su nivel de dependencia y favoreciendo su bienestar, seguridad, dignidad y autonomía.

        .cajon.color-2.p-4(data-aos="fade-right")
          p.mb-0 El envejecimiento es un proceso natural del ciclo vital que puede estar acompañado de cambios físicos, psicológicos y sociales. Por ello, es importante identificar las condiciones que pueden influir en el desarrollo de las actividades de la vida diaria y proporcionar los apoyos necesarios, promoviendo la participación de la persona mayor.

        p.mt-4(data-aos="fade-right") Este componente formativo aborda aspectos relacionados con el envejecimiento, la valoración del nivel de dependencia, los derechos de la persona mayor, las enfermedades frecuentes, la seguridad del entorno, la bioseguridad, la higiene, el autocuidado y la alimentación. Estos elementos permiten fortalecer conocimientos y habilidades para brindar un cuidado integral, seguro y humanizado, centrado en la persona mayor.

        p.mb-0(data-aos="fade-right") Para complementar la comprensión de los temas abordados, se recomienda acceder al siguiente video.
      .col-lg-4.mt-4.mt-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/intro/ilus-1.png").w-100

    //- El XD deja el bloque como marcador («Espacio para video») de 1228x580 con r=10, y ni el
    //- `.xd` ni el `_DI` traen la URL: el guion del vídeo llegó como texto. Se queda el iframe
    //- del scaffold hasta que llegue el enlace real.
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-12
        figure.mb-0
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
