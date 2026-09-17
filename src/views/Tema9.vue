<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Lavado de manos

    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t9/comp-1.png").w-100
      .col-lg-7
        p(data-aos="fade-left") El lavado de manos es una medida fundamental para prevenir la transmisión de microorganismos durante las actividades de cuidado. Las manos pueden entrar en contacto con personas, superficies, objetos y diferentes materiales, por lo que una higiene adecuada permite reducir la posibilidad de llevar microorganismos de un lugar a otro.
        .cajon.color-1.p-4(data-aos="fade-left")
          p.mb-0 En el cuidado de la persona mayor, la higiene de manos debe incorporarse de manera habitual antes, durante y después de determinadas actividades, especialmente cuando existe contacto directo con la persona, sus pertenencias, alimentos, medicamentos, secreciones o elementos utilizados durante la higiene. La aplicación correcta de esta medida contribuye a proteger tanto a la persona mayor como al cuidador.

    separador
    #t_9_1.titulo-segundo.color-acento-contenido
      h2 9.1 Importancia

    p.mt-4(data-aos="fade-right") La higiene de manos es una de las medidas más importantes para interrumpir la transmisión de microorganismos. Su importancia radica en que permite eliminar o reducir la contaminación presente en las manos y disminuir el riesgo de transmitir agentes infecciosos durante las actividades cotidianas de cuidado.

    //- Caja #E2EAFF con la lista numerada de viñeta amarilla y la ilustración de 222x329 al lado.
    .row.align-items-stretch.g-0.mt-4
      .col-lg-9.mb-4.mb-lg-0
        .bg-2-vc.p-4.h-100(data-aos="fade-right")
          p.mb-3
            b Su aplicación adecuada permite:
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | Prevenir la transmisión de infecciones entre el cuidador, la persona mayor y el entorno.
            li
              .lista-ol--cuadro__vineta
                span 2
              | Reducir la contaminación de objetos, alimentos, medicamentos y superficies.
            li
              .lista-ol--cuadro__vineta
                span 3
              | Proteger a la persona mayor durante actividades que requieren contacto directo.
            li
              .lista-ol--cuadro__vineta
                span 4
              | Proteger al cuidador frente a microorganismos presentes en el entorno o en materiales potencialmente contaminados.
            li.mb-0
              .lista-ol--cuadro__vineta
                span 5
              | Complementar las demás medidas de bioseguridad, como el uso de elementos de protección personal y la limpieza del entorno.
      .col-lg-3
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t9/ilus-1.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") En el cuidado cotidiano, la higiene de manos debe realizarse, entre otros momentos, antes y después del contacto con la persona mayor, antes de manipular alimentos o medicamentos y después de realizar actividades de higiene o eliminación.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t9/ic-1.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 No basta con realizar el lavado de manera rápida; es necesario aplicar una técnica que permita limpiar todas las superficies de las manos, incluyendo palmas, dorsos, espacios entre los dedos, pulgares, puntas de los dedos y uñas.

    separador
    #t_9_2.titulo-segundo.color-acento-contenido
      h2 9.2 Técnicas y elementos necesarios

    p.mt-4(data-aos="fade-right") La higiene de manos puede realizarse mediante lavado con agua y jabón o, cuando las condiciones lo permitan, mediante una preparación a base de alcohol. La elección depende de la situación y de las condiciones de las manos.

    p(data-aos="fade-right") Para el lavado con agua y jabón se requieren:

    .row.mt-4
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .bg-4-vc.tarjeta-hover.a-2-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t9/ele-1.png" style="width: 128px").m-auto
          p.text-center.mb-0
            b Agua
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .bg-4-vc.tarjeta-hover.a-2-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t9/ele-2.png" style="width: 128px").m-auto
          p.text-center.mb-0
            b Jabón
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .bg-4-vc.tarjeta-hover.a-2-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t9/ele-3.png" style="width: 128px").m-auto
          p.text-center.mb-0
            b Toalla limpia o medio adecuado para el secado
      .col-md-6.col-lg-3
        .bg-4-vc.tarjeta-hover.a-2-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t9/ele-4.png" style="width: 128px").m-auto
          p.text-center.mb-0
            b Recipiente para residuos, cuando corresponda

    .row.justify-content-center.mt-4
      .col-lg-6
        .bg-3-v.r-20.px-4.py-2(data-aos="fade-up")
          p.text-center.mb-0 La técnica debe realizarse de manera ordenada:

    .banda-t9.mt-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t9/ilus-2.png").w-100
        .col-lg-8
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-4")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t9/tec-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Mojar las manos con agua.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t9/tec-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Aplicar jabón suficiente para cubrir todas las superficies.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t9/tec-3.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Frotar las palmas entre sí.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t9/tec-4.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Frotar las puntas de los dedos y las uñas sobre la palma de la mano contraria.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t9/tec-5.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Enjuagar completamente con agua.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t9/tec-6.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Secar las manos con una toalla limpia o un medio adecuado.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t9/tec-7.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Evitar volver a contaminar las manos al finalizar, por ejemplo, mediante el contacto innecesario con superficies contaminadas.

    //- El XD dibuja el botón «Abrir video»; la URL es la que el `_DI` referencia en la
    //- bibliografía (SENA, 2020).
    .row.justify-content-center.mt-4
      .col-lg-12
        .bg-4-vc.p-4(data-aos="fade-up")
          .row.align-items-center
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t9/ic-2.svg" style="width: 84px")
            .col
              h4.mb-2 ¿Cómo lavarse las manos de una forma segura?
              p.mb-0 Para complementar los pasos descritos y facilitar la comprensión de la técnica, acceda al siguiente video, en el que se presenta de manera gráfica la secuencia adecuada para el lavado de manos:
            .col-12.col-md-auto.mt-3.mt-md-0
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=N5iWzjNWh8A" target="_blank")
                span Abrir video
                i.fas.fa-file-video

    p.mt-4(data-aos="fade-right") Cuando se utiliza una preparación a base de alcohol, se debe aplicar una cantidad suficiente para cubrir todas las superficies de las manos y frotarlas hasta que estén secas.

    p(data-aos="fade-right") La técnica debe realizarse con especial cuidado cuando las manos estén visiblemente sucias o después de actividades que impliquen contacto con sustancias, secreciones o residuos. En estas situaciones, el lavado con agua y jabón resulta fundamental.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t9/ic-2.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 El uso de guantes no elimina la necesidad de realizar higiene de manos. Los guantes son una medida complementaria y deben utilizarse de acuerdo con el riesgo identificado durante la actividad de cuidado.

</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
