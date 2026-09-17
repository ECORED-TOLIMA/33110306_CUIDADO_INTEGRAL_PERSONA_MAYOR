<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Ambientes seguros para el cuidado

    //- Foto de 506x371 en (186,297) y la columna de texto a su derecha, sobre la franja #F3E5D8.
    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t6/foto-1.png").w-100
      .col-lg-7
        p(data-aos="fade-left") El entorno donde vive y realiza sus actividades la persona mayor influye directamente en su seguridad, autonomía y calidad de vida. Los cambios relacionados con la movilidad, la fuerza muscular, la visión, el equilibrio o las capacidades cognitivas pueden aumentar la posibilidad de accidentes cuando el espacio no responde a sus necesidades.
        .row.align-items-start(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t6/ic-1.svg" style="width: 80px")
          .col
            p.mb-0 Un ambiente seguro no consiste únicamente en mantener el lugar limpio y ordenado. También implica identificar riesgos, facilitar el desplazamiento, disponer los objetos de manera accesible y realizar los ajustes necesarios de acuerdo con las capacidades y el nivel de dependencia de la persona mayor.
        p.mt-4.mb-0(data-aos="fade-left") La adecuación del entorno debe favorecer la independencia y la participación, evitando limitar innecesariamente la movilidad. Para ello, es importante observar cómo la persona se desplaza, utiliza los espacios y realiza sus actividades cotidianas.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Tipos de ambientes y condiciones del entorno domiciliario

    p.mt-4(data-aos="fade-right") La persona mayor puede desarrollar sus actividades en diferentes espacios del hogar, como la sala, el dormitorio, el baño, la cocina, los pasillos, las escaleras y las zonas de acceso. Cada uno presenta características y riesgos particulares que deben tenerse en cuenta durante el cuidado.

    p(data-aos="fade-right") La valoración del entorno debe considerar tanto las condiciones físicas del espacio como las capacidades de la persona que lo utiliza. Algunos aspectos importantes son:

    //- Tarjetas de 522x520 con el círculo del icono de 128: el XD dibuja tres y deja cuatro en
    //- el pasteboard.
    SlyderF.slyder--flechas.mt-4(columnas="col-md-6 col-lg-4")
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t6/amb-1.svg" style="width: 128px").m-auto
        h4.text-center Zonas de circulación
        p.text-center.mb-0 Deben permanecer despejadas para facilitar el desplazamiento, especialmente cuando la persona utiliza bastón, caminador u otra ayuda técnica.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t6/amb-2.svg" style="width: 128px").m-auto
        h4.text-center Iluminación
        p.text-center.mb-0 Debe ser suficiente, especialmente en pasillos, escaleras, entradas y zonas utilizadas durante la noche.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t6/amb-3.svg" style="width: 128px").m-auto
        h4.text-center Pisos y superficies
        p.text-center.mb-0 Deben mantenerse secos, estables y libres de obstáculos que puedan provocar tropiezos o resbalones.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t6/amb-4.svg" style="width: 128px").m-auto
        h4.text-center Accesibilidad
        p.text-center.mb-0 Los objetos de uso frecuente deben ubicarse en lugares de fácil alcance, evitando que la persona tenga que subir a superficies inestables o adoptar posiciones que puedan ocasionar una caída.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t6/amb-5.svg" style="width: 128px").m-auto
        h4.text-center Mobiliario
        p.text-center.mb-0 Debe estar distribuido de manera que permita circular con facilidad y utilizar los espacios sin realizar movimientos innecesarios o inseguros.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t6/amb-6.svg" style="width: 128px").m-auto
        h4.text-center Cables y objetos
        p.text-center.mb-0 Deben mantenerse organizados y fuera de las zonas de tránsito.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t6/amb-7.svg" style="width: 128px").m-auto
        h4.text-center Temperatura y ventilación
        p.text-center.mb-0 Los espacios deben contar con condiciones ambientales confortables y una ventilación adecuada.

    //- Caja #E2EAFF de 812x362 con la etiqueta #FEE85B y el icono de 80; el panel #F3F9FF de
    //- 415x362 con la ilustración va a su derecha.
    .row.align-items-stretch.g-0.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .bg-2-vc.p-4.h-100(data-aos="fade-right")
          .row.mb-3
            .col-auto
              .bg-3.px-3.py-1
                p.mb-0
                  b Prevención de caídas
          p Las caídas constituyen uno de los principales riesgos asociados al entorno de la persona mayor. Su prevención requiere considerar factores relacionados tanto con la persona como con el espacio en el que se desplaza.
          .row.align-items-start
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t6/ic-3.svg" style="width: 80px")
            .col
              p.mb-0 Entre los factores relacionados con la persona pueden encontrarse la disminución de la fuerza muscular, las alteraciones del equilibrio, las dificultades visuales, algunas enfermedades y el uso de medicamentos que pueden producir mareo o somnolencia.
          p.mt-3.mb-0 Entre los factores relacionados con el entorno se encuentran la iluminación insuficiente, superficies resbaladizas, obstáculos en las zonas de circulación, alfombras sueltas, cables expuestos y ausencia de apoyos en lugares como el baño o las escaleras.
      .col-lg-4
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t6/ilus-2.png").w-100.h-100.object-fit-cover

    p.mt-4(data-aos="fade-right") Por esta razón, el cuidador debe revisar de manera permanente las condiciones del entorno y los cambios en la forma en que la persona mayor camina, se levanta, se sienta o utiliza los diferentes espacios. La identificación oportuna de estos cambios permite implementar medidas preventivas y favorecer un desplazamiento seguro.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Criterios de seguridad y adaptaciones básicas del hogar

    p.mt-4(data-aos="fade-right") La seguridad del entorno debe abordarse de manera integral. Además de prevenir caídas, es necesario identificar riesgos relacionados con instalaciones eléctricas, fuentes de calor, medicamentos, productos químicos, alimentos, agua y posibles situaciones de maltrato, negligencia o abandono.

    .row.justify-content-center.mt-4
      .col-lg-6
        .bg-3-v.r-20.px-4.py-2(data-aos="fade-up")
          p.text-center.mb-0 Durante la revisión del hogar se deben considerar los siguientes criterios:

    .banda-t6.mt-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t6/ilus-1.png").w-100
        .col-lg-8
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-6")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t6/cri-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Mantener instalaciones eléctricas seguras, sin cables expuestos ni conexiones improvisadas.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t6/cri-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Utilizar de manera segura las estufas, calentadores y otras fuentes de calor.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t6/cri-3.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Mantener medicamentos y productos químicos en lugares seguros, evitando su acceso accidental.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t6/cri-4.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Organizar y rotular adecuadamente los medicamentos para disminuir el riesgo de errores.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t6/cri-5.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Mantener disponibles agua potable y alimentos en condiciones higiénicas adecuadas.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t6/cri-6.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Conservar libres de obstáculos las zonas de circulación.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t6/cri-7.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Disponer de elementos de apoyo cuando las necesidades de la persona lo requieran.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t6/cri-8.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Observar cambios en el comportamiento, el estado emocional o las condiciones de cuidado que puedan indicar situaciones de maltrato, negligencia o abandono.

    p.mt-4(data-aos="fade-right") La seguridad debe revisarse periódicamente, ya que las necesidades de la persona mayor pueden cambiar con el tiempo. Una modificación en su movilidad, equilibrio, visión, estado de salud o capacidad para realizar actividades cotidianas puede requerir nuevos ajustes en el entorno. Por ello, cuando se identifican condiciones que pueden representar un riesgo o dificultar el desarrollo de las actividades cotidianas, es necesario considerar adaptaciones que permitan hacer del hogar un espacio más seguro y accesible.

    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-1.p-4(data-aos="fade-up")
          p.mb-0 Las adaptaciones del hogar buscan reducir riesgos, facilitar la movilidad y favorecer la autonomía. Deben realizarse de acuerdo con las necesidades reales de la persona, evitando modificaciones innecesarias y procurando que pueda desenvolverse de manera segura en las actividades de la vida diaria.

    p.mt-4(data-aos="fade-right") Entre las adaptaciones que pueden considerarse se encuentran:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 6.
      span  Adaptaciones básicas
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Espacio
            th Adaptaciones básicas
        tbody
          tr
            td Pasillos y zonas de circulación
            td Mantener espacios despejados, retirar alfombras sueltas y eliminar obstáculos o desniveles que dificulten el desplazamiento.
          tr
            td Escaleras
            td Disponer de pasamanos firmes y mantener los escalones libres de objetos, con iluminación suficiente.
          tr
            td Baño
            td Instalar barras de apoyo cerca del sanitario y en la ducha, utilizar superficies antideslizantes y considerar una silla de baño cuando sea necesario.
          tr
            td Dormitorio
            td Mantener la cama a una altura adecuada, disponer de iluminación cercana y ubicar los objetos de uso frecuente al alcance de la persona.
          tr
            td Cocina
            td Organizar los utensilios y alimentos de uso frecuente en lugares accesibles, evitando que la persona deba agacharse excesivamente o subirse a superficies inestables.

    p.mt-4(data-aos="fade-right") Estas adaptaciones deben facilitar las actividades cotidianas sin sustituir innecesariamente la participación de la persona mayor. El propósito es proporcionar un entorno que permita realizar las actividades de manera segura, accesible y acorde con sus capacidades.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t6/ic-2.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 El cuidador debe identificar los riesgos que pueda observar durante las actividades cotidianas, informar oportunamente las condiciones que requieran intervención y apoyar la implementación de las medidas de seguridad correspondientes.

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
