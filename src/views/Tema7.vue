<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Bioseguridad en el cuidado

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t7/ic-1.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 La bioseguridad comprende el conjunto de medidas orientadas a prevenir la exposición y transmisión de agentes infecciosos durante las actividades de cuidado y a proteger tanto a la persona mayor como al cuidador.

    p.mt-4(data-aos="fade-right") En el cuidado domiciliario o institucional, estas medidas deben aplicarse de manera constante, especialmente cuando existe contacto con sangre, secreciones, excreciones, mucosas, piel lesionada, objetos contaminados o superficies que puedan contener microorganismos.

    figure.mt-4(data-aos="fade-up")
      img(src="@/assets/curso/temas/t7/foto-1.png").w-100

    p.mt-4(data-aos="fade-right") La bioseguridad no se limita al uso de elementos de protección personal. También incluye la higiene de manos, la limpieza y desinfección, el manejo seguro de residuos, el uso adecuado de barreras de protección y la identificación de los riesgos presentes durante cada actividad.

    separador
    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Objetivos y principios de bioseguridad

    p.mt-4(data-aos="fade-right") La bioseguridad comprende las medidas y prácticas que permiten prevenir riesgos para la salud durante las actividades de cuidado. Su aplicación busca proteger a la persona mayor, al cuidador y a otras personas del entorno frente a la posible exposición a microorganismos y sustancias que puedan causar daño.

    //- Caja #C7D0FE con la lista de viñetas amarillas y el panel de la ilustración al lado.
    .row.align-items-stretch.mt-4
      .col-lg-7.mb-4.mb-lg-0
        .bg-2.p-4.h-100(data-aos="fade-right")
          p.mb-3
            b En el cuidado cotidiano, la bioseguridad tiene como objetivos:
          ul.lista-ul.lista-ul--vineta-t7.mb-0
            li Prevenir la transmisión de infecciones durante las actividades de cuidado.
            li Reducir el riesgo de exposición a sangre, secreciones, excreciones y otros fluidos corporales.
            li Mantener condiciones adecuadas de higiene y limpieza en el entorno y los elementos utilizados.
            li Promover prácticas seguras en la manipulación de residuos, ropa y materiales.
            li.mb-0 Proteger tanto a la persona mayor como al cuidador durante las actividades que impliquen algún riesgo de contaminación.
      .col-lg-5
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t7/ilus-1.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Para cumplir estos objetivos, la bioseguridad se fundamenta en principios que orientan la actuación del cuidador.

    //- Cinco principios con su foto: el XD dibuja el primero y marca «1/5»; los otros cuatro
    //- están en el pasteboard.
    SlyderA.mt-4(tipo="b")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          h4 Universalidad
          p.mb-0 Las medidas básicas de protección deben aplicarse de manera habitual, independientemente de que la persona mayor tenga o no una infección identificada. Esto permite prevenir la exposición a microorganismos que pueden estar presentes sin ser visibles.
        .col-lg-8
          figure.mb-0
            img(src="@/assets/curso/temas/t7/pri-1.png").w-100
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          h4 Prevención
          p.mb-0 Antes de realizar una actividad, el cuidador debe identificar los posibles riesgos y adoptar las medidas necesarias para reducirlos. La prevención implica preparar el espacio, disponer de los materiales requeridos y utilizar las medidas de protección que correspondan.
        .col-lg-8
          figure.mb-0
            img(src="@/assets/curso/temas/t7/pri-2.png").w-100
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          h4 Barreras de protección
          p.mb-0 Los elementos de protección personal funcionan como una barrera entre el cuidador y las posibles fuentes de contaminación. Su utilización depende del tipo de actividad y del riesgo de exposición.
        .col-lg-8
          figure.mb-0
            img(src="@/assets/curso/temas/t7/pri-3.png").w-100
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          h4 Higiene
          p.mb-0 La higiene de manos, la limpieza del entorno y el manejo adecuado de los elementos utilizados durante el cuidado son acciones fundamentales para reducir la transmisión de microorganismos.
        .col-lg-8
          figure.mb-0
            img(src="@/assets/curso/temas/t7/pri-4.png").w-100
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          h4 Manejo seguro de materiales y residuos
          p.mb-0 Los materiales que hayan estado en contacto con fluidos corporales deben manipularse de manera que se evite la contaminación de las manos, la ropa, las superficies y otras personas.
        .col-lg-8
          figure.mb-0
            img(src="@/assets/curso/temas/t7/pri-5.png").w-100

    p.mt-4(data-aos="fade-right") La aplicación de estos principios debe realizarse de manera constante y de acuerdo con el riesgo presente en cada actividad. La bioseguridad no consiste únicamente en utilizar elementos de protección personal; también requiere mantener hábitos de higiene, reconocer situaciones de riesgo y actuar de manera preventiva.

    separador
    #t_7_2.titulo-segundo.color-acento-contenido
      h2 7.2 Precauciones universales y elementos de protección personal

    p.mt-4(data-aos="fade-right") Las precauciones universales son un conjunto de medidas que deben aplicarse durante las actividades de cuidado para disminuir el riesgo de exposición a microorganismos y prevenir la transmisión de infecciones. Se utilizan independientemente de que la persona mayor tenga o no una infección identificada, ya que algunos agentes pueden estar presentes sin que exista un diagnóstico confirmado.

    p(data-aos="fade-right") Estas medidas deben incorporarse de manera habitual en las actividades de cuidado y adaptarse al riesgo presente. Entre las principales se encuentran:

    .banda-t7.mt-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t7/ilus-2.png").w-100
        .col-lg-8
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-6")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t7/pre-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Realizar higiene de manos antes y después del contacto con la persona mayor, antes de manipular alimentos o medicamentos y después de actividades de higiene o eliminación.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t7/pre-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Utilizar guantes cuando exista posibilidad de contacto con sangre, orina, heces, saliva, secreciones, mucosas o heridas.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t7/pre-3.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Utilizar mascarilla o tapabocas cuando exista riesgo de transmisión respiratoria, de acuerdo con la situación presentada.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t7/pre-4.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Proteger la ropa y el cuerpo cuando exista riesgo de contacto o salpicadura de fluidos.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t7/pre-5.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Utilizar protección ocular cuando puedan producirse salpicaduras que alcancen los ojos.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t7/pre-6.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Manipular de forma segura la ropa, los materiales y los residuos que hayan estado en contacto con fluidos corporales, evitando acciones que puedan dispersar microorganismos.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t7/pre-7.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Mantener limpios y desinfectados los objetos y superficies de contacto frecuente, según corresponda.

    p.mt-4(data-aos="fade-right") Los elementos de protección personal (EPP) son dispositivos que actúan como barreras físicas para disminuir la exposición a agentes biológicos durante determinadas actividades de cuidado. Su utilización debe responder al riesgo identificado, por lo que no todas las actividades requieren los mismos elementos.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 7.
      span  Elementos de protección personal según el riesgo durante el cuidado
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Elemento de protección
            th ¿Cuándo utilizarlo?
        tbody
          tr
            td Guantes desechables
            td Cuando exista riesgo de contacto con sangre, orina, heces, saliva, secreciones, mucosas o heridas abiertas.
          tr
            td Mascarilla o tapabocas
            td Cuando exista riesgo de exposición a secreciones respiratorias o durante situaciones que impliquen contacto cercano con una persona con síntomas respiratorios.
          tr
            td Delantal o protector corporal
            td Cuando exista riesgo de salpicaduras o contacto con una cantidad considerable de fluidos, por ejemplo, durante el baño asistido o el cambio de apósitos.
          tr
            td Gafas de protección o careta facial
            td Cuando exista riesgo de salpicaduras que puedan entrar en contacto con los ojos, como durante algunas actividades de curación o manejo de secreciones.

    p.mt-4(data-aos="fade-right") La elección de los EPP debe considerar el tipo de actividad, el posible contacto con fluidos y las condiciones particulares de la situación. Su uso debe ser proporcional al riesgo: emplear protección cuando sea necesaria, sin convertirla en un sustituto de las medidas básicas de higiene.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t7/ic-2.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 Es importante recordar que los EPP complementan, pero no reemplazan, la higiene de manos ni las demás medidas de bioseguridad. Además, deben utilizarse, retirarse, desecharse, limpiarse o almacenarse de manera adecuada, según se trate de elementos desechables o reutilizables.

    p.mt-4.mb-0(data-aos="fade-right") En el cuidado de la persona mayor, la bioseguridad debe integrarse a las actividades cotidianas sin perder de vista el trato digno, la comodidad y la participación de la persona. El cuidador debe identificar los riesgos, aplicar las medidas correspondientes y comunicar cualquier situación que requiera atención profesional.

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
