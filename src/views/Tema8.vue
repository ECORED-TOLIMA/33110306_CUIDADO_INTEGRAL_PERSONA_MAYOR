<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Higiene y cuidado cefalocaudal

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t8/comp-1.png").w-100
      .col-lg-8
        p(data-aos="fade-left") La higiene corporal de la persona mayor contribuye a mantener la limpieza, proteger la integridad de la piel, prevenir infecciones y favorecer el bienestar y la comodidad. Además, constituye una oportunidad para observar el estado general de la persona e identificar cambios que puedan requerir atención.
        .cajon.color-1.p-4(data-aos="fade-left")
          p.mb-0 El cuidado cefalocaudal consiste en realizar la higiene corporal siguiendo un orden organizado, desde la cabeza hacia los pies. Esta secuencia facilita el desarrollo sistemático del procedimiento, evita omisiones y contribuye a disminuir el riesgo de contaminación cruzada.
        p.mt-4.mb-0(data-aos="fade-left") Durante este cuidado es fundamental respetar la privacidad, la dignidad y las capacidades de la persona mayor, promoviendo su participación en aquellas actividades que pueda realizar por sí misma.

    separador
    #t_8_1.titulo-segundo.color-acento-contenido
      h2 8.1 Objetivos

    p.mt-4(data-aos="fade-right") El cuidado cefalocaudal tiene como propósito mantener una adecuada higiene corporal y contribuir al bienestar integral de la persona mayor. Además de favorecer la limpieza, este procedimiento permite observar el estado de la piel y reconocer oportunamente cambios que puedan afectar su salud o funcionalidad.

    .row.justify-content-center.mt-4
      .col-lg-6
        .bg-3-v.r-20.px-4.py-2(data-aos="fade-up")
          p.text-center.mb-0 Entre sus principales objetivos se encuentran:

    .banda-t8.mt-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t8/ilus-1.png").w-100
        .col-lg-8
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-6")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t8/obj-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Mantener la higiene corporal y reducir la acumulación de suciedad y microorganismos en la superficie de la piel.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t8/obj-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Preservar la integridad de la piel, disminuyendo el riesgo de irritaciones, lesiones asociadas a la humedad y otros problemas cutáneos.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t8/obj-3.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Prevenir infecciones, mediante una adecuada higiene corporal y la aplicación de prácticas seguras durante el procedimiento.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t8/obj-4.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Favorecer la comodidad y el bienestar físico y emocional de la persona mayor.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t8/obj-5.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Promover la participación y autonomía, permitiendo que la persona realice las actividades que pueda desarrollar de acuerdo con sus capacidades.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t8/obj-6.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Identificar cambios en la piel, como enrojecimientos, lesiones, alteraciones de coloración o signos que requieran ser comunicados.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t8/obj-7.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Fortalecer un cuidado respetuoso y humanizado, protegiendo la privacidad, dignidad y preferencias de la persona mayor.

    p.mt-4(data-aos="fade-right") De esta manera, la higiene corporal no debe entenderse únicamente como una actividad de limpieza, sino también como una oportunidad para observar, prevenir riesgos y favorecer la autonomía y el bienestar de la persona mayor.

    separador
    #t_8_2.titulo-segundo.color-acento-contenido
      h2 8.2 Procedimiento básico

    p.mt-4(data-aos="fade-right") El cuidado cefalocaudal debe realizarse de manera organizada, sistemática y respetuosa, siguiendo una secuencia desde la cabeza hasta los pies. Antes de comenzar, es necesario preparar el entorno, disponer de los materiales y valorar las condiciones de la persona mayor. Durante todo el procedimiento se debe favorecer su participación de acuerdo con el nivel de autonomía y mantener una comunicación respetuosa.

    //- Tres pasos con su foto: el XD dibuja el primero y deja los otros dos en el pasteboard.
    SlyderA.mt-4(tipo="b")
      .row.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          p.mb-2
            b Antes de iniciar el procedimiento:
          ul.lista-ul.mb-0
            li
              i.fas.fa-circle
              | Garantizar la privacidad de la persona mayor y mantener una temperatura confortable y una iluminación adecuada.
            li
              i.fas.fa-circle
              | Reunir los materiales necesarios: agua tibia, jabón neutro, toallas limpias, ropa limpia, hidratante y los elementos de protección personal que correspondan.
            li
              i.fas.fa-circle
              | Realizar la higiene de manos y utilizar los elementos de protección personal de acuerdo con el riesgo identificado.
            li
              i.fas.fa-circle
              | Explicar a la persona mayor qué se va a realizar y promover su participación según sus capacidades.
            li.mb-0
              i.fas.fa-circle
              | Verificar las condiciones de movilidad y colaboración, así como la presencia de lesiones, zonas de presión o dispositivos médicos que deban tenerse en cuenta durante la higiene.
        .col-lg-6
          figure.mb-0
            img(src="@/assets/curso/temas/t8/foto-p1.png").w-100
      .row.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          p.mb-2 La higiene se realiza siguiendo el orden cefalocaudal, avanzando de la cabeza hacia los pies:
          ul.lista-ul.mb-0
            li
              i.fas.fa-circle
              | #[b Cabeza y rostro:] realizar la limpieza de manera suave, incluyendo rostro y cuello. Los ojos deben limpiarse cuidadosamente, evitando la fricción excesiva.
            li
              i.fas.fa-circle
              | #[b Miembros superiores:] limpiar hombros, brazos, manos y espacios entre los dedos. Secar cuidadosamente para evitar humedad residual.
            li
              i.fas.fa-circle
              | #[b Tórax y abdomen:] realizar la limpieza con movimientos suaves, prestando especial atención a los pliegues de la piel.
            li
              i.fas.fa-circle
              | #[b Miembros inferiores:] limpiar desde los muslos hasta los pies, incluyendo talones y espacios entre los dedos.
            li.mb-0
              i.fas.fa-circle
              | #[b Zona genital y perineal:] realizar la higiene al final, con el propósito de disminuir el riesgo de contaminación cruzada.
        .col-lg-6
          figure.mb-0
            img(src="@/assets/curso/temas/t8/foto-p2.png").w-100
      .row.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          p.mb-2 Una vez realizada la higiene, se debe secar completamente la piel, especialmente en los pliegues, para evitar la acumulación de humedad. Cuando esté indicado, puede aplicarse crema hidratante mediante un masaje suave, evitando las zonas enrojecidas o lesionadas. Posteriormente:
          ul.lista-ul.mb-0
            li
              i.fas.fa-circle
              | Colocar ropa limpia y cómoda.
            li
              i.fas.fa-circle
              | Verificar que la persona mayor quede en una posición segura y confortable.
            li
              i.fas.fa-circle
              | Organizar el entorno y retirar los materiales utilizados.
            li
              i.fas.fa-circle
              | Desechar, limpiar o desinfectar los elementos empleados según corresponda.
            li
              i.fas.fa-circle
              | Realizar nuevamente la higiene de manos.
            li.mb-0
              i.fas.fa-circle
              | Registrar los hallazgos relevantes cuando se requiera seguimiento.
        .col-lg-6
          figure.mb-0
            img(src="@/assets/curso/temas/t8/foto-p1.png").w-100

    p.mt-4(data-aos="fade-right") Durante todo el procedimiento, se debe observar el estado general de la persona mayor y comunicar oportunamente cualquier cambio o hallazgo que pueda requerir valoración por parte de un profesional de salud.

    separador
    #t_8_3.titulo-segundo.color-acento-contenido
      h2 8.3 Precauciones

    p.mt-4(data-aos="fade-right") Durante el cuidado cefalocaudal es necesario adoptar medidas que permitan realizar la higiene de manera segura, respetuosa y acorde con las condiciones de la persona mayor. Las precauciones deben considerar tanto la seguridad física como la protección de la piel, la prevención de infecciones y el bienestar de la persona.

    //- DIEZ tarjetas: el XD dibuja tres en la mesa y deja las otras SIETE en el pasteboard,
    //- que es donde viven los estados no visibles de un carrusel. Yo maqueté sólo las tres
    //- visibles — hallazgos 32 y 37 del revisor («carrusel incompleto», «tarjetas 7 / 10»).
    SlyderF.slyder--flechas.mt-4(columnas="col-md-6 col-lg-4")
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t8/pre-1.png" style="width: 128px").m-auto
        h4.text-center Proteger la privacidad y dignidad
        p.text-center.mb-0 Mantener cubierta la parte del cuerpo que no se esté aseando, explicar cada acción y respetar las preferencias de la persona mayor.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t8/pre-2.png" style="width: 128px").m-auto
        h4.text-center Evitar riesgos de caídas
        p.text-center.mb-0 Mantener el espacio libre de obstáculos, asegurar una superficie estable y no dejar sola a la persona cuando requiera asistencia para movilizarse.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t8/pre-3.png" style="width: 128px").m-auto
        h4.text-center Controlar la temperatura del agua
        p.text-center.mb-0 Utilizar agua tibia y comprobar que sea adecuada antes de entrar en contacto con la piel.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t8/pre-4.png" style="width: 128px").m-auto
        h4.text-center Prevenir lesiones
        p.text-center.mb-0 Realizar movimientos suaves y evitar fricciones excesivas, especialmente en personas con piel frágil, dolor o limitaciones de movilidad.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t8/pre-5.png" style="width: 128px").m-auto
        h4.text-center Proteger la integridad de la piel
        p.text-center.mb-0 Prestar especial atención a pliegues, zonas de presión, enrojecimientos, heridas o áreas con humedad.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t8/pre-6.png" style="width: 128px").m-auto
        h4.text-center Aplicar medidas de bioseguridad
        p.text-center.mb-0 Realizar higiene de manos, utilizar los elementos de protección personal cuando exista riesgo de exposición y emplear materiales limpios.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t8/pre-7.png" style="width: 128px").m-auto
        h4.text-center Evitar la contaminación cruzada
        p.text-center.mb-0 Respetar la secuencia cefalocaudal, utilizar materiales adecuados y realizar la higiene de las zonas con mayor riesgo de contaminación al final.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t8/pre-8.png" style="width: 128px").m-auto
        h4.text-center Tener precaución con dispositivos médicos
        p.text-center.mb-0 Evitar movimientos o manipulaciones que puedan desplazarlos o afectar su funcionamiento.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t8/pre-9.png" style="width: 128px").m-auto
        h4.text-center Promover la participación
        p.text-center.mb-0 Permitir que la persona mayor realice por sí misma las actividades que pueda desarrollar, brindando únicamente el apoyo que necesite.
      .tarjeta.bg-1-vc.r-20.p-4.h-100
        figure.mb-3
          img(src="@/assets/curso/temas/t8/pre-10.png" style="width: 128px").m-auto
        h4.text-center Revisar el estado general
        p.text-center.mb-0 Prestar atención a cambios en la piel, dolor, mareo, fatiga, dificultad respiratoria u otras alteraciones durante el procedimiento y comunicar los hallazgos relevantes.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t8/ic-1.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 Si durante la higiene se presenta malestar, mareo, fatiga, dolor intenso o dificultad respiratoria, se debe suspender el procedimiento y valorar la situación antes de continuar.

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
