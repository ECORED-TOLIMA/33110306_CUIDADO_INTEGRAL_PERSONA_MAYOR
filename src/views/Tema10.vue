<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Autocuidado y bienestar

    //- Franja #754114 de 919x283 con la caja blanca y la foto de 614x283 a la izquierda.
    .bloque-texto-g.color-1-vo.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t10/foto-1.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 El autocuidado hace referencia a las acciones y decisiones que contribuyen al mantenimiento de la salud, la funcionalidad y el bienestar, de acuerdo con las capacidades y condiciones de cada persona. En la persona mayor, promover el autocuidado implica reconocer las capacidades que conserva, favorecer su participación en las actividades cotidianas y proporcionar el apoyo necesario sin sustituir de manera innecesaria aquello que puede realizar por sí misma.

    .row.justify-content-center.mt-4
      .col-lg-9
        .row.align-items-center(data-aos="fade-right")
          //- El XD lo dibuja como un BOCADILLO: el bloque azul del icono con las esquinas
          //- redondeadas y el panel en `#EED2B9` (primario), no en `#F3E5D8`. Hallazgo 39.
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t10/ic-1.svg" style="width: 88px").r-10
          .col
            .bg-1.r-20.p-4
              p.mb-0 El bienestar comprende diferentes dimensiones que se relacionan entre sí. Además de atender las necesidades físicas, el cuidado debe considerar los aspectos emocionales, sociales y relacionados con la autonomía y la participación. Mantener vínculos significativos, participar en actividades acordes con las capacidades y tomar decisiones sobre aspectos de la vida cotidiana contribuye a preservar la autoestima, la funcionalidad y la calidad de vida.

    separador
    #t_10_1.titulo-segundo.color-acento-contenido
      h2 10.1 Autocuidado y autonomía de la persona mayor

    p.mt-4(data-aos="fade-right") El autocuidado se relaciona directamente con la conservación de la autonomía. Por ello, las actividades de cuidado deben orientarse a hacer con la persona y no simplemente hacer por ella, siempre que sus condiciones lo permitan.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t10/ic-2.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 En las actividades de la vida cotidiana, el cuidador debe identificar qué puede realizar la persona mayor de manera independiente, en qué actividades requiere supervisión y en cuáles necesita asistencia parcial o total. De esta manera, el apoyo se ajusta al nivel de dependencia y se evita la sobreprotección.

    .row.justify-content-center.mt-4
      .col-lg-6
        .bg-3-v.r-20.px-4.py-2(data-aos="fade-up")
          p.text-center.mb-0 El autocuidado puede favorecerse mediante acciones como:

    .banda-t10.mt-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t10/ilus-1.png").w-100
        .col-lg-8
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-4")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t10/acc-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Participar en la higiene personal y el arreglo.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t10/acc-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Colaborar en la alimentación y la hidratación según sus capacidades.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t10/acc-3.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Realizar movimientos y actividades físicas acordes con su condición.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t10/acc-4.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Elegir entre diferentes opciones relacionadas con su rutina y cuidado.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t10/acc-5.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Participar en actividades recreativas, culturales y sociales.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t10/acc-6.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Mantener relaciones con familiares, amigos y otras personas significativas.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t10/acc-7.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Expresar necesidades, preferencias, emociones y decisiones.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t10/acc-8.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Conservar hábitos de descanso y sueño adecuados.

    p.mt-4(data-aos="fade-right") La participación en estas actividades permite mantener habilidades y puede contribuir a prevenir la pérdida innecesaria de funcionalidad y el aislamiento social.

    separador
    #t_10_2.titulo-segundo.color-acento-contenido
      h2 10.2 Bienestar de la persona mayor y autocuidado del cuidador

    //- Caja #F3E5D8 de 728x341 con el icono de 80 dentro y la foto de 506x341 a la derecha.
    .row.align-items-stretch.g-0.mt-4
      .col-lg-7.mb-4.mb-lg-0
        .bg-1-vc.p-4.h-100(data-aos="fade-right")
          p El bienestar de la persona mayor no depende únicamente de la ausencia de enfermedad. También está relacionado con la posibilidad de sentirse respetada, escuchada, segura y partícipe de las decisiones que afectan su vida. Por esta razón, el cuidado debe favorecer espacios de comunicación, acompañamiento y participación social, de acuerdo con sus intereses y capacidades.
          .row.align-items-start
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t10/ic-3.svg" style="width: 80px")
            .col
              p.mb-0 El cuidador puede contribuir al bienestar mediante un trato respetuoso, la escucha activa, el reconocimiento de las preferencias de la persona y la promoción de actividades que resulten significativas. También debe evitar el aislamiento y procurar que la persona mantenga, cuando sea posible, sus vínculos familiares, sociales y comunitarios. Estas dimensiones hacen parte de las necesidades integrales que deben considerarse en el proceso de cuidado.
      .col-lg-5
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t10/foto-2.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") El autocuidado también es necesario para quien cuida. Las actividades de cuidado pueden implicar esfuerzo físico, emocional y organización del tiempo. Por ello, el cuidador debe reconocer sus propios límites y mantener prácticas que favorezcan su bienestar, entre ellas:

    //- Dos bloques #E2EAFF de 1228x266 con la ilustración de 396x266 alternando de lado.
    .row.align-items-stretch.g-0.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t10/ilus-2.png").w-100.h-100.object-fit-cover
      .col-lg-8
        .bg-2-vc.p-4.h-100(data-aos="fade-left")
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | Mantener una alimentación e hidratación adecuadas.
            li
              .lista-ol--cuadro__vineta
                span 2
              | Procurar períodos suficientes de descanso y sueño.
            li
              .lista-ol--cuadro__vineta
                span 3
              | Realizar actividad física de acuerdo con sus posibilidades.
            li.mb-0
              .lista-ol--cuadro__vineta
                span 4
              | Organizar las actividades de cuidado y establecer prioridades.

    .row.align-items-stretch.g-0.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .bg-2-vc.p-4.h-100(data-aos="fade-right")
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span 5
              | Reconocer signos de cansancio físico o emocional.
            li
              .lista-ol--cuadro__vineta
                span 6
              | Buscar apoyo de familiares, redes sociales o servicios disponibles cuando la situación lo requiera.
            li
              .lista-ol--cuadro__vineta
                span 7
              | Conservar espacios para actividades personales, recreativas y sociales.
            li.mb-0
              .lista-ol--cuadro__vineta
                span 8
              | Solicitar orientación cuando una situación de cuidado supere sus conocimientos o capacidades.
      .col-lg-4
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t10/ilus-3.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") El autocuidado del cuidador contribuye a mantener condiciones adecuadas para brindar una atención segura y de calidad. A su vez, reconocer los propios límites permite solicitar apoyo oportunamente y evitar que las responsabilidades de cuidado se desarrollen de manera inadecuada.

    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-1.p-4(data-aos="fade-up")
          p.mb-0 En síntesis, promover el autocuidado y el bienestar significa equilibrar la asistencia con la autonomía. El cuidador debe proporcionar el apoyo que la persona mayor necesita, pero también crear las condiciones para que continúe participando en las actividades que puede realizar, tome decisiones y conserve sus capacidades durante el mayor tiempo posible.

</template>

<script>
export default {
  name: 'Tema10',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
