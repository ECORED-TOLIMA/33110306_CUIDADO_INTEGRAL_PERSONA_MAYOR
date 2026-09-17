<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Nutrición y asistencia en la alimentación

    p.mt-4(data-aos="fade-right") La alimentación es un componente fundamental del cuidado integral de la persona mayor, ya que proporciona la energía y los nutrientes necesarios para mantener las funciones del organismo, conservar la masa muscular, favorecer la capacidad funcional y contribuir al bienestar general. Una alimentación adecuada también participa en la prevención de deficiencias nutricionales y en el mantenimiento de condiciones que favorecen una vida activa y autónoma.

    .bloque-texto-g.color-1-vo.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t11/foto-1.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante el envejecimiento pueden presentarse cambios que influyen en la alimentación, como disminución del apetito, modificaciones en la percepción del gusto y el olfato, problemas de salud oral, dificultades para masticar o deglutir y cambios en el funcionamiento del sistema digestivo. También puede disminuir la sensación de sed, lo que aumenta el riesgo de una ingesta insuficiente de líquidos. Estas condiciones deben ser reconocidas durante el cuidado para brindar un apoyo adecuado y prevenir complicaciones.

    p.mt-4(data-aos="fade-right") La alimentación de la persona mayor debe responder a sus necesidades individuales y considerar aspectos como su estado de salud, nivel de actividad, capacidades funcionales, hábitos alimentarios, preferencias culturales y capacidad para masticar y deglutir. Por ello, no existe una única alimentación que pueda aplicarse de la misma manera a todas las personas mayores.

    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-1.p-4(data-aos="fade-up")
          p.mb-0 En este contexto, el cuidador cumple una función de apoyo que comprende la preparación y disposición adecuada de los alimentos, el acompañamiento durante la ingesta y la observación de posibles dificultades. La asistencia debe ajustarse al nivel de dependencia, promoviendo que la persona participe en las acciones que puede realizar por sí misma y evitando sustituir innecesariamente sus capacidades.

    p.mt-4(data-aos="fade-right") Cuando existen condiciones particulares de salud, restricciones alimentarias o dificultades para la deglución, las orientaciones establecidas por los profesionales de salud deben ser respetadas. El cuidador no debe modificar por iniciativa propia la dieta, las consistencias de los alimentos ni las fórmulas nutricionales prescritas.

    p(data-aos="fade-right") A lo largo de este tema se abordarán los principales nutrientes y grupos de alimentos, las características de una alimentación equilibrada, la identificación de posibles deficiencias nutricionales, el uso de fórmulas nutricionales bajo indicación profesional, las técnicas básicas de preparación de alimentos y las formas de asistencia durante la alimentación, especialmente cuando existen dificultades para deglutir o limitaciones de movilidad.

    separador
    #t_11_1.titulo-segundo.color-acento-contenido
      h2 11.1 Nutrición, nutrientes y grupos de alimentos

    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0
        .row.align-items-start(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t11/ic-2.svg" style="width: 84px")
          .col
            p.mb-0 La nutrición es un proceso mediante el cual el organismo obtiene y utiliza los nutrientes necesarios para mantener sus funciones, producir energía, conservar los tejidos y contribuir al bienestar. En la persona mayor, una alimentación adecuada favorece el mantenimiento de la masa muscular, la capacidad funcional y la salud general.
        p.mt-4(data-aos="fade-right") Durante el envejecimiento pueden presentarse cambios que influyen en la alimentación, como modificaciones en el apetito, el gusto y el olfato, dificultades para masticar o deglutir y cambios en la percepción de la sed. Por esta razón, es importante reconocer los alimentos y nutrientes que contribuyen a cubrir las necesidades de cada persona, teniendo en cuenta sus condiciones individuales.
        p.mb-0(data-aos="fade-right") Los nutrientes se clasifican en macronutrientes y micronutrientes. Los macronutrientes son necesarios en cantidades mayores y comprenden los carbohidratos, las proteínas y las grasas. Los micronutrientes se requieren en cantidades menores e incluyen las vitaminas y los minerales.
      .col-lg-4
        figure.mb-0
          img(src="@/assets/curso/temas/t11/comp-1.png").w-100

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 8.
      span  Principales nutrientes y sus funciones
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Nutriente
            th Función principal
            th Fuentes alimentarias
        tbody
          tr
            td Carbohidratos
            td Aportan energía para las actividades del organismo.
            td Cereales, arroz, avena, papa, yuca, plátano, frutas y otros alimentos de origen vegetal.
          tr
            td Proteínas
            td Contribuyen al mantenimiento y reparación de los tejidos y de la masa muscular.
            td Legumbres, huevos, pescado, pollo, carnes y productos lácteos.
          tr
            td Grasas
            td Aportan energía y participan en la absorción de algunas vitaminas.
            td Aceites vegetales, aguacate, frutos secos, semillas y otros alimentos que contienen grasas.
          tr
            td Vitaminas
            td Participan en diferentes procesos del organismo y contribuyen al mantenimiento de sus funciones.
            td Frutas, verduras, legumbres, cereales, huevos, carnes y otros alimentos.
          tr
            td Minerales
            td Intervienen en funciones como la formación de huesos, el funcionamiento muscular y otros procesos del organismo.
            td Lácteos, verduras, frutas, legumbres, carnes, pescado y otros alimentos.

    .row.justify-content-center.mt-4
      .col-lg-9
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t11/ic-1.svg" style="width: 88px")
          .col
            .bg-1-vc.p-4
              p.mb-0 Además de los nutrientes, es necesario considerar el agua como un componente fundamental de la alimentación. Contribuye a mantener la hidratación y participa en diferentes funciones del organismo. En las personas mayores es importante prestar atención a la ingesta de líquidos, debido a que la sensación de sed puede disminuir con la edad.

    p.mt-4(data-aos="fade-right") Los alimentos pueden organizarse en diferentes grupos de acuerdo con sus características y principales aportes nutricionales. Una alimentación adecuada combina alimentos de los distintos grupos y se adapta a las necesidades, condiciones de salud, preferencias y posibilidades de cada persona.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 9.
      span  Grupos de alimentos y principales aportes
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Grupo de alimentos
            th Principales aportes
            th Ejemplos
        tbody
          tr
            td Frutas y verduras
            td Vitaminas, minerales, fibra y agua.
            td Papaya, naranja, mango, manzana, zanahoria, tomate, espinaca y brócoli.
          tr
            td Legumbres y alimentos proteicos
            td Proteínas, minerales y otros nutrientes necesarios para el mantenimiento de los tejidos.
            td Lentejas, fríjoles, garbanzos, huevos, pescado, pollo y carnes.
          tr
            td Cereales, tubérculos y plátanos
            td Principalmente carbohidratos y energía.
            td Arroz, avena, maíz, pan, papa, yuca, ñame y plátano.
          tr
            td Leche y productos lácteos
            td Proteínas y calcio, entre otros nutrientes.
            td Leche, yogur y queso.
          tr
            td Grasas y aceites
            td Aportan energía y grasas necesarias para diferentes funciones del organismo.
            td Aceite vegetal, aguacate, frutos secos y semillas.

    p.mt-4(data-aos="fade-right") La selección y combinación de estos alimentos debe considerar las características de cada persona mayor. Aspectos como el estado de salud, el nivel de actividad física, los hábitos alimentarios, las preferencias culturales, la disponibilidad de alimentos y la capacidad para masticar y deglutir pueden influir en la alimentación.

    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-1.p-4(data-aos="fade-up")
          p.mb-0 En el cuidado cotidiano, el cuidador puede contribuir a disponer los alimentos de manera adecuada, favorecer una alimentación variada y apoyar a la persona mayor durante las actividades relacionadas con la alimentación, de acuerdo con su nivel de autonomía. Cuando existen restricciones alimentarias o indicaciones específicas relacionadas con alguna condición de salud, estas deben seguirse conforme a las orientaciones establecidas por los profesionales correspondientes.

    separador
    #t_11_2.titulo-segundo.color-acento-contenido
      h2 11.2 Dieta balanceada

    .row.align-items-stretch.g-0.mt-4
      .col-lg-7.mb-4.mb-lg-0
        .bg-1-vc.p-4.h-100(data-aos="fade-right")
          p Una dieta balanceada proporciona al organismo una variedad de alimentos y nutrientes en cantidades adecuadas para contribuir al mantenimiento de la salud, la funcionalidad y el bienestar. En la persona mayor, la alimentación debe adaptarse a sus características individuales, teniendo en cuenta su estado de salud, nivel de actividad, necesidades nutricionales, hábitos alimentarios, preferencias y capacidad para masticar y deglutir.
          .row.align-items-start
            .col-12.col-md-auto.mb-3.mb-md-0
              figure.mb-0
                img(src="@/assets/curso/temas/t11/ic-3.svg" style="width: 80px")
            .col
              p.mb-0 Una alimentación adecuada no consiste únicamente en consumir alimentos de todos los grupos, sino también en establecer combinaciones y preparaciones que respondan a las necesidades de cada persona. Por ello, la alimentación puede requerir ajustes cuando existen enfermedades, restricciones alimentarias o dificultades para realizar alguna actividad relacionada con la ingesta.
      .col-lg-5
        figure.mb-0.h-100
          img(src="@/assets/curso/temas/t11/foto-2.png").w-100.h-100.object-fit-cover

    .row.justify-content-center.mt-4
      .col-lg-6
        .bg-3-v.r-20.px-4.py-2(data-aos="fade-up")
          p.text-center.mb-0 Entre las características de una dieta balanceada se encuentran:

    .row.align-items-center.mt-4
      .col-lg-6.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t11/ilus-1.png").w-100
      .col-lg-6
        LineaTiempoD.color-1(data-aos="fade-left")
          .row(numero="1" titulo="Variedad")
            .col-12
              p.mb-0 Incluir alimentos de diferentes grupos para favorecer el aporte de diversos nutrientes.
          .row(numero="2" titulo="Equilibrio")
            .col-12
              p.mb-0 Mantener una combinación adecuada de los diferentes grupos de alimentos, evitando que la alimentación se base principalmente en un solo tipo de alimento.
          .row(numero="3" titulo="Suficiencia")
            .col-12
              p.mb-0 Proporcionar la cantidad de energía y nutrientes necesaria de acuerdo con las condiciones de cada persona.
          .row(numero="4" titulo="Adecuación")
            .col-12
              p.mb-0 Considerar la edad, el estado de salud, el nivel de actividad, las capacidades funcionales y las necesidades particulares.
          .row(numero="5" titulo="Hidratación")
            .col-12
              p.mb-0 Favorecer un consumo adecuado de líquidos, teniendo en cuenta las indicaciones establecidas cuando existen restricciones.
          .row(numero="6" titulo="Aceptabilidad")
            .col-12
              p.mb-0 Considerar los gustos, costumbres, cultura y posibilidades de acceso a los alimentos.

    p.mt-4(data-aos="fade-right") En la alimentación de la persona mayor se pueden combinar frutas y verduras, alimentos fuente de proteínas, cereales, tubérculos y plátanos, productos lácteos o sus alternativas, y fuentes de grasas, procurando variedad y equilibrio. La selección de los alimentos debe ajustarse a las condiciones y necesidades de cada persona.

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0
        p(data-aos="fade-right") También es importante considerar la textura y consistencia de los alimentos. Cuando una persona presenta dificultades para masticar o deglutir, la preparación puede requerir modificaciones para facilitar la alimentación y disminuir riesgos. Estas modificaciones deben realizarse de acuerdo con las orientaciones de los profesionales responsables del cuidado.
        .cajon.color-1.p-4(data-aos="fade-right")
          p.mb-0 La presentación y el ambiente durante la alimentación también pueden favorecer una experiencia agradable. Mantener una postura adecuada, disponer los alimentos de manera accesible y respetar el ritmo y las preferencias de la persona contribuye a su participación y autonomía.
        p.mt-4.mb-0(data-aos="fade-right") En este proceso, el cuidador debe apoyar sin sustituir innecesariamente las capacidades de la persona mayor. Puede colaborar en la selección y preparación de los alimentos, disponerlos de manera adecuada, facilitar los elementos necesarios y acompañar durante la alimentación, de acuerdo con el nivel de dependencia.
      .col-lg-5
        figure.mb-0
          img(src="@/assets/curso/temas/t11/ilus-2.png").w-100

    p.mt-4(data-aos="fade-right") Cuando existen enfermedades, restricciones alimentarias, pérdida importante de peso, disminución persistente del apetito u otras situaciones que puedan afectar el estado nutricional, es necesario comunicar los cambios y seguir las orientaciones de los profesionales de salud. El cuidador no debe establecer por cuenta propia dietas restrictivas ni modificar las indicaciones nutricionales.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t11/ic-4.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 #[b Para tener en cuenta:] una dieta balanceada no es igual para todas las personas mayores. Las necesidades y características individuales determinan los ajustes que pueden requerirse en la alimentación.

    separador
    #t_11_3.titulo-segundo.color-acento-contenido
      h2 11.3 Deficiencia nutricional

    .bloque-texto-g.color-1-vo.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-up")
      .bloque-texto-g__img(:style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t11/foto-3.png')})` }")
      .bloque-texto-g__texto.p-4
        p.mb-0 La deficiencia nutricional se presenta cuando el organismo no recibe o no aprovecha adecuadamente la energía y los nutrientes que necesita para mantener sus funciones. En la persona mayor, esta situación puede relacionarse con una ingesta insuficiente de alimentos, cambios en el apetito, dificultades para masticar o deglutir, enfermedades, alteraciones en la absorción de nutrientes o condiciones que dificultan el acceso y consumo de alimentos.

    p.mt-4(data-aos="fade-right") La deficiencia nutricional puede afectar la capacidad funcional y el bienestar de la persona mayor. Cuando se mantiene durante un periodo prolongado, puede favorecer la pérdida de masa muscular, debilidad, fragilidad y mayor vulnerabilidad frente a enfermedades y otras complicaciones.

    p(data-aos="fade-right") Durante las actividades de cuidado es importante prestar atención a cambios que puedan indicar que la persona no está cubriendo adecuadamente sus necesidades nutricionales. Algunas señales que pueden observarse son:

    .banda-t11-1.mt-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t11/ilus-3.png").w-100
        .col-lg-8
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-4")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/sen-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Pérdida de peso no intencional.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/sen-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Disminución persistente del apetito o de la cantidad de alimentos consumidos.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/sen-3.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Debilidad generalizada y fatiga.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/sen-4.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Disminución de la masa muscular.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/sen-5.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Mayor dificultad para realizar actividades cotidianas.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/sen-6.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Fragilidad o aumento de la inestabilidad.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/sen-7.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Cambios en el estado de ánimo o en el estado cognitivo.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/sen-8.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Mayor susceptibilidad a infecciones.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/sen-9.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Heridas que presentan una cicatrización lenta.

    p.mt-4(data-aos="fade-right") Estas manifestaciones no permiten establecer por sí solas la presencia de una deficiencia nutricional, ya que pueden estar relacionadas con diferentes condiciones de salud. Sin embargo, su identificación oportuna permite comunicar los cambios y favorecer una valoración adecuada. Entre las manifestaciones señaladas en el material se encuentran la disminución de masa muscular, la fragilidad, la debilidad, la fatiga, la mayor susceptibilidad a infecciones y la cicatrización lenta de heridas.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 10.
      span  Signos de posible deficiencia nutricional y acciones del cuidador
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Signo o cambio observado
            th Posible repercusión
            th Acción del cuidador
        tbody
          tr
            td Pérdida de peso no intencional
            td Pérdida de masa muscular y deterioro funcional.
            td Registrar el cambio y comunicarlo al responsable del cuidado o profesional correspondiente.
          tr
            td Disminución del apetito o de la ingesta
            td Menor aporte de energía y nutrientes.
            td Observar la alimentación y comunicar si la situación persiste.
          tr
            td Debilidad y fatiga
            td Mayor dificultad para realizar actividades cotidianas.
            td Brindar apoyo según el nivel de dependencia y comunicar el cambio.
          tr
            td Disminución de masa muscular
            td Pérdida de fuerza y capacidad funcional.
            td Favorecer la participación en las actividades que pueda realizar y comunicar los cambios.
          tr
            td Heridas con cicatrización lenta
            td Mayor riesgo de complicaciones.
            td Observar la evolución y comunicar la situación al profesional correspondiente.
          tr
            td Cambios en el estado de ánimo o cognitivo
            td Pueden afectar la alimentación y la participación en las actividades cotidianas.
            td Prestar atención a los cambios y comunicar su aparición o persistencia.

    p.mt-4(data-aos="fade-right") La prevención de la deficiencia nutricional requiere favorecer una alimentación adecuada, suficiente y equilibrada, de acuerdo con las necesidades individuales de la persona mayor. El cuidador puede contribuir mediante el acompañamiento durante las comidas, la preparación y disposición adecuada de los alimentos, la observación de la cantidad consumida y la identificación de dificultades que puedan afectar la alimentación.

    p(data-aos="fade-right") Cuando se identifican cambios importantes o persistentes, es necesario comunicarlos al profesional correspondiente para que se determine si se requiere una valoración nutricional u otra intervención. El cuidador no debe indicar dietas, suplementos o cambios en la alimentación por iniciativa propia.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t11/ic-5.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 #[b Para tener en cuenta:] una persona puede presentar cambios en su peso, apetito o estado general por diferentes razones. Por ello, el papel del cuidador es observar, apoyar, registrar cuando corresponda y comunicar, no realizar diagnósticos.

    separador
    #t_11_4.titulo-segundo.color-acento-contenido
      h2 11.4 Fórmulas nutricionales

    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t11/ilus-5.png").w-100
      .col-lg-7
        p(data-aos="fade-left") Las fórmulas nutricionales son productos que aportan energía y nutrientes de manera concentrada. Pueden utilizarse como complemento de la alimentación habitual cuando la persona mayor no logra cubrir sus necesidades nutricionales mediante los alimentos, de acuerdo con la valoración y las indicaciones de los profesionales responsables.
        .cajon.color-1.p-4(data-aos="fade-left")
          p.mb-0 En la persona mayor, pueden considerarse en situaciones como bajo peso, deficiencia nutricional o dificultad para cubrir los requerimientos de energía y nutrientes mediante la alimentación habitual. Su uso debe responder a las necesidades particulares de cada persona.
        p.mt-4.mb-0(data-aos="fade-left") Es importante tener en cuenta que las fórmulas nutricionales no son iguales para todas las personas. Su composición, cantidad y forma de utilización dependen de las necesidades identificadas y de las indicaciones establecidas.

    .row.justify-content-center.mt-4
      .col-lg-6
        .bg-3-v.r-20.px-4.py-2(data-aos="fade-up")
          p.text-center.mb-0 Cuando una fórmula ha sido indicada, el cuidador debe:

    .row.mt-4
      .col-md-6.col-lg-4.mb-4
        .bg-2-vc.r-10.p-4.px-lg-5.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/for-1.svg" style="width: 84px")
          p.mb-0 Verificar que corresponda al producto indicado.
      .col-md-6.col-lg-4.mb-4
        .bg-2-vc.r-10.p-4.px-lg-5.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/for-2.svg" style="width: 84px")
          p.mb-0 Respetar las cantidades y orientaciones establecidas.
      .col-md-6.col-lg-4.mb-4
        .bg-2-vc.r-10.p-4.px-lg-5.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/for-3.svg" style="width: 84px")
          p.mb-0 Mantener condiciones adecuadas de higiene durante su preparación y administración.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .bg-2-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/for-4.svg" style="width: 84px")
          p.mb-0 Revisar las condiciones de conservación del producto.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .bg-2-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/for-5.svg" style="width: 84px")
          p.mb-0 Observar la respuesta de la persona durante su consumo.
      .col-md-6.col-lg-4
        .bg-2-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/for-6.svg" style="width: 84px")
          p.mb-0 Comunicar cualquier dificultad o cambio relevante.

    p.mt-4(data-aos="fade-right") El cuidador no debe seleccionar, modificar, suspender ni aumentar una fórmula nutricional por iniciativa propia. Estas decisiones corresponden a los profesionales responsables de la valoración nutricional.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t11/ic-6.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 #[b Para tener en cuenta:] las fórmulas nutricionales son un complemento de la alimentación cuando están indicadas. No deben administrarse de manera indiscriminada.

    separador
    #t_11_5.titulo-segundo.color-acento-contenido
      h2 11.5 Técnicas de preparación de alimentos

    p.mt-4(data-aos="fade-right") La preparación de los alimentos debe contribuir a conservar su valor nutricional, facilitar su consumo y mantener condiciones adecuadas de higiene y seguridad. En la persona mayor, también es importante considerar su capacidad para masticar y deglutir, así como las características de la alimentación establecida para cada persona.

    p(data-aos="fade-right") La técnica de preparación se selecciona de acuerdo con el tipo de alimento y las necesidades de la persona mayor. Algunas técnicas permiten obtener preparaciones suaves y fáciles de consumir, mientras que otras ayudan a conservar las características de los alimentos.

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Tabla 11.
      span  Técnicas básicas de preparación de alimentos
    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Técnica
            th Características
            th Ejemplos
        tbody
          tr
            td Cocción al vapor
            td Cocina los alimentos mediante el vapor y ayuda a conservar sus características.
            td Verduras, pescado y algunos tubérculos.
          tr
            td Hervido
            td Cocina los alimentos en agua hasta alcanzar la textura deseada.
            td Verduras, tubérculos, cereales y legumbres.
          tr
            td Horneado o asado
            td Cocina los alimentos mediante calor, con poca o ninguna adición de grasa.
            td Carnes, pescado, verduras y tubérculos.
          tr
            td Salteado
            td Cocina los alimentos rápidamente con una cantidad moderada de grasa.
            td Verduras, carnes y preparaciones combinadas.
          tr
            td Guisado o cocción lenta
            td Permite obtener preparaciones de textura suave mediante una cocción prolongada.
            td Carnes, legumbres, verduras y preparaciones mixtas.

    .row.justify-content-center.mt-4
      .col-lg-6
        .bg-3-v.r-20.px-4.py-2(data-aos="fade-up")
          p.text-center.mb-0 Durante la preparación de los alimentos es importante tener en cuenta:

    .row.align-items-center.mt-4
      .col-lg-6.mb-4.mb-lg-0
        LineaTiempoD.color-1(data-aos="fade-right")
          .row(numero="1" titulo="Higiene y seguridad")
            .col-12
              p.mb-0 Mantener limpias las manos, los utensilios y las superficies; separar los alimentos crudos de los cocidos y conservarlos en condiciones adecuadas.
          .row(numero="2" titulo="Textura y consistencia")
            .col-12
              p.mb-0 Adaptar las preparaciones cuando la persona mayor presenta dificultades para masticar o deglutir, de acuerdo con las indicaciones establecidas por los profesionales responsables.
          .row(numero="3" titulo="Preferencias y hábitos")
            .col-12
              p.mb-0 Considerar los gustos, costumbres y preparaciones conocidas por la persona mayor, siempre que sean compatibles con sus necesidades y orientaciones de alimentación.
          .row(numero="4" titulo="Presentación y temperatura")
            .col-12
              p.mb-0 Procurar una presentación agradable y una temperatura adecuada para favorecer la aceptación y el consumo seguro de los alimentos.
          .row(numero="5" titulo="Vigilancia durante el cuidado")
            .col-12
              p.mb-0 Prestar atención a las dificultades que puedan presentarse durante la preparación o el consumo de los alimentos y comunicarlas oportunamente.
      .col-lg-6
        figure.mb-0
          img(src="@/assets/curso/temas/t11/ilus-6.png").w-100

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center(data-aos="fade-right")
          .col-12.col-md-auto.mb-3.mb-md-0
            figure.mb-0
              img(src="@/assets/curso/temas/t11/ic-7.svg" style="width: 84px")
          .col
            .bg-3-vc.p-3
              p.mb-0 #[b Importante:] las modificaciones en la textura, consistencia o características de la alimentación deben realizarse de acuerdo con las indicaciones establecidas para la persona. El cuidador no debe hacer cambios por iniciativa propia.

    separador
    #t_11_6.titulo-segundo.color-acento-contenido
      h2 11.6 Asistencia en la alimentación

    p.mt-4(data-aos="fade-right") La asistencia durante la alimentación busca facilitar que la persona mayor consuma los alimentos de manera segura, cómoda y respetuosa, de acuerdo con sus capacidades y nivel de dependencia. El apoyo debe permitir que la persona participe en las acciones que pueda realizar por sí misma, evitando sustituir innecesariamente sus capacidades.

    p(data-aos="fade-right") Antes de iniciar la alimentación, es importante:

    .banda-t11-2.mt-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t11/ilus-4.png").w-100
        .col-lg-8
          SlyderF.slyder--flechas(columnas="col-md-6 col-lg-4")
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/ant-1.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Verificar que la persona se encuentre en condiciones adecuadas para alimentarse.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/ant-2.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Ubicarla en una posición cómoda y segura.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/ant-3.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Disponer los alimentos y utensilios a una altura que facilite su acceso.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/ant-4.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Comprobar que la preparación corresponda a las características de alimentación establecidas.
            .tarjeta.bg-3-vc.r-20.p-4.h-100
              figure.mb-3
                img(src="@/assets/curso/temas/t11/ant-5.svg" style="width: 96px").m-auto
              p.text-center.mb-0 Explicar lo que se va a realizar y favorecer la participación de la persona.

    .titulo-cuarto.color-acento-contenido.mt-4
      h4 a) Cuando existe dificultad para deglutir

    p.mt-4(data-aos="fade-right") Las dificultades para deglutir pueden aumentar el riesgo de que los alimentos o líquidos ingresen a las vías respiratorias. Por ello, la asistencia debe realizarse con especial cuidado y siguiendo las indicaciones establecidas para la persona. Durante la alimentación:

    .row.mt-4
      .col-md-6.col-lg-4.mb-4
        .bg-1-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/deg-1.svg" style="width: 88px").m-auto
          p.text-center.mb-0 Mantener a la persona en una posición incorporada y estable.
      .col-md-6.col-lg-4.mb-4
        .bg-1-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/deg-2.svg" style="width: 88px").m-auto
          p.text-center.mb-0 Ofrecer cantidades pequeñas de alimento y permitir que complete la deglución antes de ofrecer una nueva porción.
      .col-md-6.col-lg-4.mb-4
        .bg-1-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/deg-3.svg" style="width: 88px").m-auto
          p.text-center.mb-0 Respetar el ritmo de la persona y evitar apresurarla.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .bg-1-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/deg-4.svg" style="width: 88px").m-auto
          p.text-center.mb-0 Utilizar la consistencia de alimentos y líquidos indicada para la persona.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .bg-1-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/deg-5.svg" style="width: 88px").m-auto
          p.text-center.mb-0 Mantener atención a posibles cambios durante la alimentación.
      .col-md-6.col-lg-4
        .bg-1-vc.r-10.p-4.h-100(data-aos="fade-up")
          figure.mb-3
            img(src="@/assets/curso/temas/t11/deg-6.svg" style="width: 88px").m-auto
          p.text-center.mb-0 Después de finalizar, mantener una posición incorporada durante un periodo adecuado, de acuerdo con las indicaciones establecidas.

    .row.justify-content-center.mt-4
      .col-lg-6
        .bg-3-v.r-20.px-4.py-2(data-aos="fade-up")
          p.text-center.mb-0 Algunas señales que requieren atención durante o después de la alimentación son:

    //- El XD pone la caja de 500x329 en (290,11085) y la foto de 486x316 en (817,11091) a su
    //- derecha: dos columnas de 5 dentro de las 10 centradas, no una sola de 8.
    .row.justify-content-center.align-items-center.mt-4
      .col-lg-5.mb-4.mb-lg-0
        .bg-2-vc.p-4.h-100(data-aos="fade-right")
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              | Tos persistente.
            li
              .lista-ol--cuadro__vineta
                span 2
              | Cambios en la voz después de comer o beber.
            li
              .lista-ol--cuadro__vineta
                span 3
              | Dificultad para respirar.
            li
              .lista-ol--cuadro__vineta
                span 4
              | Dificultad evidente para completar la deglución.
            li.mb-0
              .lista-ol--cuadro__vineta
                span 5
              | Cambios importantes en el estado general.
      .col-lg-5
        figure.mb-0
          img(src="@/assets/curso/temas/t11/foto-degl.png").w-100.r-10

    p.mt-4(data-aos="fade-right") Ante estas situaciones, se debe actuar de acuerdo con los protocolos establecidos y comunicar oportunamente al profesional correspondiente.

    .titulo-cuarto.color-acento-contenido.mt-4
      h4 b) Cuando existe movilidad reducida

    p.mt-4(data-aos="fade-right") Las limitaciones de movilidad pueden dificultar que la persona tome los alimentos, utilice los utensilios o mantenga una postura adecuada. En estos casos, la asistencia debe orientarse a facilitar la actividad sin reemplazar las capacidades que aún conserva.

    .row.justify-content-center.mt-4
      .col-lg-10
        //- El panel va en `#C7D0FE` (secundario), medido en el PDF; yo puse `#E2EAFF`.
        .bg-2.p-4(data-aos="fade-up")
          p.mb-3
            b Para favorecer su participación se pueden considerar:
          ul.lista-ul.lista-ul--vineta-t11.mb-0
            li Ubicar los alimentos y utensilios al alcance de la persona.
            li Utilizar utensilios adaptados, cuando estén indicados, como cubiertos con mangos gruesos, platos antideslizantes o vasos con tapa.
            li Facilitar una postura estable y cómoda.
            li Permitir que la persona realice las acciones que pueda ejecutar por sí misma.
            li Brindar ayuda únicamente en las acciones que requieran apoyo.
            li.mb-0 Respetar el ritmo de alimentación y evitar apresurar el proceso.

    //- El XD acompaña estos dos bloques con la foto de 486x229 en (193,11950) a la izquierda.
    //- Faltaba entera. Hallazgo 53 del revisor, «faltan imágenes acompañantes en dos párrafos».
    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t11/foto-movil.png").w-100.r-10
      .col-lg-7
        p(data-aos="fade-left") La asistencia en la alimentación debe combinar seguridad, comodidad y autonomía. El cuidador debe revisar las capacidades de la persona, proporcionar el apoyo necesario y comunicar cualquier dificultad que pueda afectar su alimentación.
        .cajon.color-1.p-4.mt-4(data-aos="fade-up")
          p.mb-0 #[b Importante:] las modificaciones en la consistencia de los alimentos o líquidos, así como otras medidas específicas para las dificultades de deglución, deben seguir las indicaciones de los profesionales responsables. El cuidador no debe establecer estos cambios por iniciativa propia.

</template>

<script>
export default {
  name: 'Tema11',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
