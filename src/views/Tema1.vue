<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marco normativo y políticas públicas

    //- Composición foto+círculo de 433x294 en (169,321) y la columna de 812 a su derecha, con
    //- la caja #F3E5D8 de 812x122 en (603,431) en medio.
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/comp-1.png").w-100
      .col-lg-8
        p(data-aos="fade-left") El cuidado de la persona mayor no se limita a una práctica asistencial, sino que se fundamenta en principios constitucionales, normas legales y políticas públicas vigentes en Colombia. Estas disposiciones establecen un marco de protección que orienta las acciones del cuidador y garantizan pilares fundamentales en la atención, tales como la protección, la dignidad, el bienestar y la participación activa.
        .bg-1-vc.p-4(data-aos="fade-left")
          p.mb-0 Estos pilares sintetizan el enfoque integral que debe orientar el cuidado. No se trata únicamente de suplir necesidades básicas, sino de proteger los derechos, respetar la dignidad humana, promover condiciones de bienestar y favorecer la participación de la persona mayor en las decisiones que afectan su vida.
        p.mt-4.mb-0(data-aos="fade-left") Comprender este marco normativo permite al cuidador ejercer su labor con claridad ética y respaldo legal, asegurando que cada intervención contribuya al respeto, la autonomía y la calidad de vida de la persona mayor.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Constitución Política y derechos de la persona mayor

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0
        p(data-aos="fade-right") La protección de la persona mayor en Colombia se fundamenta en la Constitución Política de 1991, la cual reconoce la dignidad humana como eje central del ordenamiento jurídico. Desde este marco se establecen derechos fundamentales y principios que orientan la atención, protección y cuidado de las personas mayores.
        .row.align-items-start(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t1/ic-1.svg" style="width: 84px")
          .col
            p.mb-0 La Constitución no solo reconoce derechos individuales, sino que también establece una responsabilidad compartida entre el Estado, la sociedad y la familia para garantizar condiciones de vida dignas, seguras y libres de discriminación.
        p.mt-4.mb-0(data-aos="fade-right") A continuación, se presentan algunos de los artículos constitucionales que sustentan la atención a la persona mayor:
      .col-lg-4
        figure.mb-0
          img(src="@/assets/curso/temas/t1/comp-2.png").w-100

    //- El XD deja la tabla con una sola fila y el rótulo «Completar tabla en programación con
    //- información de documento instruccional»: las seis filas salen del `_DI`.
    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 1.
      span  Fundamento constitucional de la protección a la persona mayor
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Artículo constitucional
            th Derecho o principio protegido
            th ¿En qué se basa?
        tbody
          tr
            td #[b Artículo 1]
            td Dignidad humana
            td Colombia se fundamenta en el respeto por la dignidad humana.
          tr
            td #[b Artículo 13]
            td Igualdad y protección especial
            td Todas las personas son iguales ante la ley y el Estado protege a quienes se encuentran en condición de debilidad manifiesta.
          tr
            td #[b Artículo 16]
            td Libre desarrollo de la personalidad
            td Toda persona tiene derecho a desarrollar su personalidad sin limitaciones indebidas.
          tr
            td #[b Artículo 46]
            td Protección y asistencia a la persona mayor
            td El Estado, la sociedad y la familia concurren para la protección y asistencia de las personas mayores.
          tr
            td #[b Artículo 48]
            td Derecho a la seguridad social
            td La seguridad social es un servicio público de carácter obligatorio.
          tr
            td #[b Artículo 49]
            td Derecho a la salud
            td La atención en salud es un derecho fundamental y un servicio a cargo del Estado.

    .row.justify-content-center.mt-4
      .col-lg-10
        p.mb-0(data-aos="fade-up") Estos artículos constituyen el marco jurídico que orienta las acciones relacionadas con el cuidado de la persona mayor. No se trata únicamente de atender necesidades básicas, sino de garantizar el respeto por los derechos fundamentales, promover la autonomía y prevenir cualquier forma de vulneración.

    p.mt-4(data-aos="fade-right") En este contexto, el cuidador cumple un papel fundamental al materializar estos principios en su práctica diaria, actuando con respeto, protegiendo la integridad y favoreciendo la participación de la persona mayor en las decisiones relacionadas con su cuidado.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Política pública de envejecimiento y vejez

    figure.mt-4(data-aos="fade-up")
      img(src="@/assets/curso/temas/t1/foto-1.png").w-100

    p.mt-4(data-aos="fade-right") El marco jurídico y político colombiano establece disposiciones orientadas a la protección integral de la persona mayor, las cuales sirven de base para el desarrollo de acciones de cuidado responsables y acordes con los derechos de esta población.

    p(data-aos="fade-right") A continuación, se presenta una síntesis de algunas de las principales normas que sustentan la atención a la persona mayor en Colombia:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 2.
      span  Marco legal para la protección de la persona mayor en Colombia
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Norma / Documento
            th ¿Qué establece?
            th Derechos o garantías
            th Implicación en el cuidado
        tbody
          tr
            td #[b Ley 1251 de 2008]
            td Establece medidas de protección, promoción y defensa de los derechos de la persona mayor.
            td Protección integral, bienestar físico y mental, participación social.
            td El cuidador previene situaciones de negligencia o abandono y promueve condiciones que favorecen la calidad de vida.
          tr
            td #[b Ley 1315 de 2009]
            td Regula las condiciones mínimas de funcionamiento de los centros de protección social.
            td Ambientes seguros, atención idónea e infraestructura adecuada.
            td Garantiza condiciones seguras en instituciones y entornos domiciliarios.
          tr
            td #[b Ley 1850 de 2017]
            td Fortalece la protección contra el maltrato a la persona mayor mediante sanciones.
            td Protección contra violencia física, psicológica, económica y abandono.
            td Permite identificar, prevenir y reportar situaciones de maltrato o vulneración de derechos.

    p.mt-4(data-aos="fade-right") La Política Colombiana de Envejecimiento Humano y Vejez establece un enfoque integral que orienta el cuidado hacia la promoción de la autonomía, la prevención de la dependencia y la garantía de los derechos de la persona mayor.

    p(data-aos="fade-right") Esta política se estructura en componentes que orientan las acciones en diferentes contextos:

    //- Banda #F3E5D8 de 1328x403 con la composición del corazón de 414x406 a la izquierda y las
    //- tarjetas #FFFCEC de 322x259: el XD dibuja dos y deja la tercera en el pasteboard.
    .banda-1.mt-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t1/ilus-1.png").w-100
        .col-lg-8
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-6")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t1/comp-ic-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Se promueve el envejecimiento activo, enfocado en mantener la funcionalidad e independencia el mayor tiempo posible.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t1/comp-ic-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Se fortalece la protección social integral, garantizando el acceso a servicios de salud, seguridad social y condiciones básicas de bienestar.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t1/comp-ic-3.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Se impulsa la participación e inclusión social, favoreciendo la integración comunitaria y el reconocimiento del rol de la persona mayor.

    p.mt-4(data-aos="fade-right") Estos componentes refuerzan la corresponsabilidad entre el Estado, la sociedad y la familia, y orientan el cuidado hacia el respeto por la dignidad humana, la participación y la seguridad.

    //- Icono #C7D0FE de 84 en (290,3532) y caja #FFFCEC de 916x84 a su derecha, dentro de la
    //- columna de 1020 que arranca en x=290.
    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t1/ic-2.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 En este contexto, el cuidador desempeña un papel fundamental, ya que es quien materializa estas disposiciones en la práctica cotidiana, asegurando que los derechos de la persona mayor se respeten y se traduzcan en acciones concretas de cuidado.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Guías y protocolos vigentes para la atención a personas mayores

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/comp-3.png").w-100
      .col-lg-8
        p(data-aos="fade-left") La atención a la persona mayor requiere la aplicación de guías y protocolos que orienten las acciones del cuidador, garantizando prácticas seguras, organizadas y acordes con los lineamientos establecidos en el sector salud y social. Estos instrumentos permiten estandarizar los procesos de cuidado, reducir riesgos y asegurar una atención centrada en la persona.
        .bg-1-vc.p-4(data-aos="fade-left")
          p.mb-0 Las guías corresponden a orientaciones técnicas basadas en evidencia que apoyan la toma de decisiones en el cuidado, mientras que los protocolos establecen procedimientos específicos para la ejecución de actividades.
        p.mt-4.mb-0(data-aos="fade-left") Las guías y protocolos pueden ser emitidos por diferentes actores, los cuales cumplen funciones complementarias:

    //- Numerales de 40x38 en #9E0909 (activo) y #FFE1E1 (cerrados), cuerpo #E2EAFF de 550x173;
    //- la foto de 623x391 va a su derecha.
    .row.align-items-center.mt-4
      .col-lg-6.mb-4.mb-lg-0
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="1" titulo="Entidades del Estado (principal fuente)")
            .col-12
              p.mb-0 En Colombia, las principales orientaciones las emiten entidades como el Ministerio de Salud y Protección Social, que establece lineamientos técnicos, guías de atención y protocolos en salud. También intervienen entidades territoriales, como las secretarías de salud, que adaptan estos lineamientos al contexto local.
          .row(numero="2" titulo="Instituciones de salud (públicas y privadas)")
            .col-12
              p.mb-0 Hospitales, clínicas y centros de atención desarrollan protocolos internos, los cuales deben estar basados en la normatividad vigente y en las orientaciones del Estado.
          .row(numero="3" titulo="Organizaciones internacionales")
            .col-12
              p.mb-0 Algunas guías se apoyan en recomendaciones de entidades como la Organización Mundial de la Salud, especialmente en temas de envejecimiento, cuidado integral y bioseguridad.
          .row(numero="4" titulo="Instituciones de cuidado y formación")
            .col-12
              p.mb-0 Centros geriátricos, hogares de paso y entidades de formación como el SENA también establecen lineamientos operativos para el cuidado, en coherencia con la normativa nacional.
      .col-lg-6
        figure.mb-0
          img(src="@/assets/curso/temas/t1/foto-2.png").w-100

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t1/ic-3.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 En el contexto del cuidado de la persona mayor, estos lineamientos abordan aspectos como la higiene, la movilización, la alimentación, la adecuación del entorno, la prevención de riesgos y la bioseguridad.

    p.mt-4(data-aos="fade-right") En este sentido, el cuidador debe conocer, interpretar y aplicar estos lineamientos en su práctica diaria, asegurando una atención segura, responsable y centrada en las necesidades de la persona mayor.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Responsabilidades del cuidador

    p.mt-4(data-aos="fade-right") El reconocimiento de los derechos de la persona mayor implica, de manera directa, responsabilidades para quienes ejercen funciones de cuidado. En el contexto colombiano, el cuidador, ya sea familiar o formal, no solo desempeña una labor asistencial, sino que asume un compromiso ético, social y legal orientado a garantizar la protección, la dignidad y el bienestar.

    //- Franja #754114 de 919x350 con la caja blanca de 685x262 y la foto de 614x350 saliéndose
    //- por la izquierda: eso es `bloque-texto-g` con `--inverso`.
    .bloque-texto-g.color-1-vo.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/foto-3.png')})` }")
      .bloque-texto-g__texto.p-4
        p La Ley 1251 de 2008 establece medidas para la protección, promoción y defensa de los derechos de la persona mayor, destacando la corresponsabilidad entre el Estado, la sociedad y la familia en la garantía de condiciones adecuadas de vida. Esta norma refuerza la obligación de brindar un trato digno y de prevenir cualquier forma de abandono, negligencia o maltrato.
        p.mb-0 De igual manera, la Ley 1850 de 2017 fortalece la protección frente al maltrato contra la persona mayor, al establecer sanciones para conductas como el abandono, la violencia física, psicológica o económica y la omisión de cuidados básicos.

    p.mt-4(data-aos="fade-right") En este marco, el cuidador debe actuar con responsabilidad, respeto y compromiso en el ejercicio de sus funciones. Entre sus principales responsabilidades se encuentran:

    //- Banda #F3E5D8 de 1328x445 con la ilustración de 396x435 a la izquierda y las tarjetas
    //- #FFFCEC de 208x289: el XD dibuja tres y deja dos en el pasteboard.
    .banda-2.mt-4
      .row.align-items-center
        .col-lg-3.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t1/ilus-2.png").w-100
        .col-lg-9
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-4")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t1/resp-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Garantizar un trato digno y respetuoso en todo momento.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t1/resp-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Velar por condiciones adecuadas de higiene, alimentación y seguridad.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t1/resp-3.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Facilitar el acceso oportuno a los servicios de salud y protección social.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t1/resp-4.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Identificar y reportar situaciones de vulneración de derechos.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t1/resp-5.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Prevenir riesgos asociados a caídas, negligencia o aislamiento social.

    p.mt-4(data-aos="fade-right") El cuidado debe orientarse por principios de dignidad humana, corresponsabilidad y enfoque diferencial, teniendo en cuenta el nivel de dependencia y las condiciones particulares de cada persona mayor.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t1/ic-4.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 De esta manera, el rol del cuidador trasciende la asistencia básica y se consolida como un actor fundamental en la garantía de los derechos y en la implementación práctica de las políticas de envejecimiento y vejez.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
