<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Enfermedades en la persona mayor

    p.mt-4(data-aos="fade-right") El proceso de envejecimiento puede estar acompañado por diferentes condiciones de salud que influyen en el bienestar, la capacidad funcional y el nivel de autonomía de la persona mayor. Algunas enfermedades son crónicas y requieren seguimiento permanente, mientras que otras pueden presentarse de manera aguda y generar cambios importantes en el estado general de la persona.

    //- Composición de 537x305 en (184,400) y, a su derecha, la caja #F3E5D8 y el párrafo.
    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t5/comp-1.png").w-100
      .col-lg-7
        .cajon.color-1.p-4(data-aos="fade-left")
          p.mb-0 En esta etapa de la vida también es frecuente la presencia simultánea de varias enfermedades, situación conocida como multimorbilidad, que puede aumentar la complejidad del cuidado y favorecer la aparición de riesgos asociados al tratamiento y al deterioro funcional.
        p.mt-4.mb-0(data-aos="fade-left") Para el cuidador, conocer las enfermedades más frecuentes no significa realizar diagnósticos ni modificar tratamientos. Su función consiste en observar cambios en el estado de la persona mayor, reconocer señales de alerta, apoyar las indicaciones establecidas por los profesionales de salud y adaptar las actividades de cuidado de acuerdo con sus necesidades y nivel de dependencia.

    p.mt-4(data-aos="fade-right") De igual manera, algunas enfermedades pueden ser transmisibles y representar un riesgo para la persona mayor, el cuidador y otras personas del entorno. Por esta razón, además del reconocimiento de las enfermedades frecuentes, es necesario conocer las principales enfermedades contagiosas, sus formas de transmisión y las medidas de prevención y protección aplicables durante el cuidado.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Enfermedades frecuentes

    p.mt-4(data-aos="fade-right") La persona mayor puede presentar diferentes enfermedades y condiciones de salud que pueden influir en su bienestar, capacidad funcional y nivel de autonomía.

    .row.justify-content-center.mt-4
      .col-auto
        .bg-3-v.r-20.px-4.py-2(data-aos="fade-up")
          p.mb-0 Es importante tener en cuenta que:

    //- Banda de 1328x403 con la composición del corazón de 403x393 y las tarjetas #FFFCEC:
    //- el XD dibuja dos y deja tres en el pasteboard.
    .banda-t5-1.mt-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t5/ilus-1.png").w-100
        .col-lg-8
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-6")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t5/car1-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 El envejecimiento no es una enfermedad, sino un proceso natural del ciclo vital.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t5/car1-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Los cambios propios del envejecimiento pueden aumentar la vulnerabilidad frente a algunas condiciones de salud.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t5/car1-3.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Es posible que una persona mayor presente varias enfermedades al mismo tiempo, situación conocida como multimorbilidad.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t5/car1-4.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Una enfermedad puede afectar la movilidad, la alimentación, el descanso, la orientación, la comunicación o la capacidad para realizar actividades de la vida cotidiana.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t5/car1-5.svg" style="width: 96px").m-auto
              p.text-center.mb-0 La presencia de una enfermedad no significa necesariamente que la persona haya perdido su autonomía. El apoyo requerido depende de sus capacidades y necesidades particulares.

    p.mt-4(data-aos="fade-right") Entre las enfermedades que pueden presentarse con frecuencia en la persona mayor se encuentran la hipertensión arterial y las enfermedades cardiovasculares, la diabetes mellitus, la artrosis, la osteoporosis, el deterioro cognitivo y las demencias, y la depresión. Además, existen condiciones y síndromes geriátricos de especial importancia para el cuidado, como la fragilidad, las caídas y la incontinencia urinaria. La polifarmacia, por su parte, puede aumentar los riesgos asociados al uso simultáneo de varios medicamentos.

    p(data-aos="fade-right") Estas enfermedades y condiciones pueden afectar de diferentes maneras la capacidad de la persona mayor para realizar sus actividades cotidianas. Por esta razón, el cuidador debe prestar atención no solo a la enfermedad, sino también a cómo esta modifica la autonomía, la movilidad, la participación y las necesidades de apoyo.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 4.
      span  Enfermedades y condiciones frecuentes
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Enfermedad o condición
            th Posible impacto en la persona mayor
            th Señales de alerta para el cuidador
        tbody
          tr
            td Hipertensión y enfermedades cardiovasculares
            td Fatiga, mareo o menor tolerancia al esfuerzo.
            td Dolor torácico, dificultad para respirar, edema o cambios bruscos en el estado general.
          tr
            td Diabetes mellitus
            td Puede afectar la energía, la visión y el cuidado de la piel.
            td Sudoración fría, confusión, debilidad o heridas que no cicatrizan.
          tr
            td Artrosis y osteoporosis
            td Dolor, limitación de la movilidad y mayor riesgo de fracturas.
            td Dificultad para caminar o caídas repetidas.
          tr
            td Deterioro cognitivo y demencias
            td Dificultades en la memoria, orientación y realización de actividades cotidianas.
            td Desorientación, cambios conductuales u olvidos frecuentes.
          tr
            td Depresión
            td Disminución de la motivación y participación en las actividades.
            td Aislamiento, pérdida de interés o alteraciones del sueño.
          tr
            td Fragilidad
            td Debilidad y mayor vulnerabilidad ante situaciones de salud.
            td Pérdida involuntaria de peso, debilidad o lentitud al caminar.
          tr
            td Caídas
            td Pueden ocasionar lesiones, fracturas y pérdida de autonomía.
            td Inestabilidad o uso inseguro de ayudas técnicas.
          tr
            td Incontinencia urinaria
            td Puede afectar la autoestima, la higiene y la integridad de la piel.
            td Humedad constante, irritación o lesiones en la piel.
          tr
            td Polifarmacia
            td Mayor riesgo de interacciones y efectos adversos.
            td Somnolencia excesiva, mareos o confusión.

    p.mt-4(data-aos="fade-right") El cuidador no diagnostica enfermedades ni modifica tratamientos. Su función consiste en observar cambios respecto al estado habitual de la persona mayor, apoyar las actividades de acuerdo con su nivel de autonomía, prevenir riesgos y seguir las indicaciones establecidas por los profesionales de salud.

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 Cuando se presenten cambios repentinos o señales de alerta, como dificultad para respirar, dolor intenso, alteraciones de la conciencia o la orientación, debilidad marcada, caídas, lesiones o cambios importantes en el comportamiento, debe informar oportunamente y solicitar la atención correspondiente, de acuerdo con los protocolos establecidos.
        p.mt-4.mb-0(data-aos="fade-right") El cuidado debe ser proporcional a las capacidades de la persona mayor. Siempre que sea posible, se debe favorecer su participación en las actividades que pueda realizar de manera segura, evitando sustituir innecesariamente sus capacidades. De esta manera, el cuidador contribuye a preservar la autonomía, la dignidad y la calidad de vida de la persona mayor.
      .col-lg-5
        figure.mb-0
          img(src="@/assets/curso/temas/t5/foto-1.png").w-100

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Enfermedades contagiosas, manejo y medidas de protección

    p.mt-4(data-aos="fade-right") Las enfermedades contagiosas, también llamadas enfermedades transmisibles, son aquellas que pueden pasar de una persona a otra, de un animal a una persona o a través de alimentos, agua, objetos o superficies contaminadas. Durante el cuidado de la persona mayor es importante conocer las principales formas de transmisión y aplicar medidas que reduzcan el riesgo de contagio.

    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t5/ilus-3.png").w-100
      .col-lg-7
        .bg-2-vc.p-4(data-aos="fade-left")
          p.mb-0 La persona mayor puede ser más vulnerable frente a algunas infecciones y, en determinados casos, estas pueden evolucionar rápidamente y afectar su estado general y su capacidad funcional. Además, una infección no siempre se manifiesta de la misma manera. En algunas personas mayores pueden aparecer cambios como debilidad, somnolencia o desorientación, incluso cuando otros síntomas habituales son leves o no están presentes.
        .row.align-items-start.mt-4(data-aos="fade-left")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t5/ic-1.svg" style="width: 84px")
          .col
            p.mb-0 Entre las enfermedades contagiosas que pueden presentarse con frecuencia se encuentran las infecciones respiratorias, urinarias, gastrointestinales y cutáneas. Algunas de ellas pueden estar relacionadas con las condiciones de higiene, el contacto con personas enfermas, la manipulación de alimentos o el cuidado inadecuado de heridas y lesiones en la piel.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 5.
      span  Enfermedades contagiosas frecuentes
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Tipo de infección
            th Manifestaciones que puede observar el cuidador
            th Riesgos
            th Acciones de cuidado
        tbody
          tr
            td Infecciones respiratorias
            td Tos, dificultad para respirar, debilidad, fiebre o cambios repentinos en el estado general.
            td Deterioro del estado respiratorio y funcional.
            td Vigilar cambios respiratorios, favorecer la ventilación de los espacios y aplicar las medidas de protección indicadas.
          tr
            td Infecciones urinarias
            td Malestar general, somnolencia, irritabilidad o cambios repentinos en la orientación.
            td Deterioro del estado general y complicaciones que requieren atención profesional.
            td Mantener una adecuada higiene, favorecer la hidratación cuando no exista contraindicación y comunicar oportunamente los cambios.
          tr
            td Infecciones gastrointestinales
            td Diarrea, vómito, debilidad y signos de deshidratación.
            td Deshidratación y deterioro rápido del estado general.
            td Mantener medidas de higiene alimentaria, vigilar la hidratación y observar signos de alarma.
          tr
            td Infecciones cutáneas
            td Enrojecimiento, secreción, dolor localizado o cambios en heridas y lesiones.
            td Extensión de la infección y afectación del estado general.
            td Mantener una adecuada higiene, realizar el cuidado de las heridas según las indicaciones recibidas y observar periódicamente el estado de la piel.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t5/ic-2.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 Las manifestaciones, riesgos y acciones anteriores se encuentran desarrollados en el documento de referencia y se han organizado aquí desde aquello que resulta relevante para la observación y el cuidado.

    p.mt-4(data-aos="fade-right") Cuando la persona mayor presenta síntomas compatibles con una enfermedad contagiosa, el cuidador debe actuar con precaución para proteger tanto a la persona atendida como a sí mismo y a quienes se encuentran en el entorno.

    .row.justify-content-center.mt-4
      .col-auto
        .bg-3-v.r-20.px-4.py-2(data-aos="fade-up")
          p.mb-0 Durante el cuidado es importante:

    .banda-t5-2.mt-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t5/ilus-4.png").w-100
        .col-lg-8
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-6")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t5/car2-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Prestar atención y registrar los cambios respecto al estado habitual de la persona.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t5/car2-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Informar oportunamente los signos o síntomas relevantes a la persona responsable o al profesional de salud.

    p.mt-4(data-aos="fade-right") La prevención de las enfermedades contagiosas requiere la aplicación conjunta de diferentes medidas. La higiene de manos, la limpieza y desinfección de superficies, la ventilación adecuada y el cumplimiento de las medidas de protección indicadas contribuyen a disminuir el riesgo de transmisión.

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .row.align-items-start(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t5/ic-3.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 La vacunación también constituye una medida importante para prevenir algunas enfermedades transmisibles. El cuidador puede contribuir al cumplimiento del esquema de vacunación vigente y facilitar el acceso a los servicios de salud cuando corresponda.
        p.mt-4(data-aos="fade-right") Es importante recordar que el cuidador no diagnostica la infección ni modifica por cuenta propia los medicamentos o tratamientos. Su responsabilidad consiste en aplicar las medidas de protección correspondientes, brindar el apoyo requerido, observar los cambios en el estado de la persona y comunicar oportunamente cualquier situación relevante.
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 Ante signos como dificultad para respirar, alteraciones repentinas de la conciencia o la orientación, debilidad marcada, vómitos o diarrea persistentes, signos de deshidratación, fiebre u otros cambios importantes, se debe solicitar valoración por parte del personal de salud de acuerdo con los protocolos establecidos.
      .col-lg-4
        figure.mb-0
          img(src="@/assets/curso/temas/t5/comp-2.png").w-100

    p.mt-4.mb-0(data-aos="fade-right") La aplicación adecuada de estas medidas contribuye a disminuir el riesgo de transmisión de infecciones y favorece un cuidado seguro, protegiendo a la persona mayor, al cuidador y a las demás personas del entorno.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
