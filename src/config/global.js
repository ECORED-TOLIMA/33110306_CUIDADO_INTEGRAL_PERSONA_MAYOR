export default {
  global: {
    Name: 'Cuidado y valoración integral de la persona mayor',
    Description:
      'Este componente aborda los fundamentos para determinar y priorizar actividades de cuidado en la persona mayor según su nivel de dependencia. Integra normatividad vigente, procesos de envejecimiento, enfermedades frecuentes, bioseguridad, ambientes seguros y valoración funcional, con el fin de promover atención integral, digna, segura y orientada a la autonomía.',
    imagenBannerPrincipal: '@/assets/curso/portada/ilustracion.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo y políticas públicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Constitución Política y derechos de la persona mayor',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Política pública de envejecimiento y vejez',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Guías y protocolos vigentes para la atención a personas mayores',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Responsabilidades del cuidador',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Envejecimiento y ciclo vital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos clave',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ciclo vital y cambios propios del envejecimiento',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Valoración del nivel de dependencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de dependencia funcional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos y niveles de dependencia',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Identificación de necesidades de la persona mayor',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estados de conciencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Niveles y características',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Enfermedades en la persona mayor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Enfermedades frecuentes',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Enfermedades contagiosas, manejo y medidas de protección',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Ambientes seguros para el cuidado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos de ambientes y condiciones del entorno domiciliario',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Criterios de seguridad y adaptaciones básicas del hogar',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Bioseguridad en el cuidado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Objetivos y principios de bioseguridad',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Precauciones universales y elementos de protección personal',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Higiene y cuidado cefalocaudal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Objetivos',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Procedimiento básico',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Precauciones',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Lavado de manos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Importancia',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Técnicas y elementos necesarios',
            hash: 't_9_2',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Autocuidado y bienestar',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Autocuidado y autonomía de la persona mayor',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Bienestar de la persona mayor y autocuidado del cuidador',
            hash: 't_10_2',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Nutrición y asistencia en la alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Nutrición, nutrientes y grupos de alimentos',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Dieta balanceada',
            hash: 't_11_2',
          },
          {
            numero: '11.3',
            titulo: 'Deficiencia nutricional',
            hash: 't_11_3',
          },
          {
            numero: '11.4',
            titulo: 'Fórmulas nutricionales',
            hash: 't_11_4',
          },
          {
            numero: '11.5',
            titulo: 'Técnicas de preparación de alimentos',
            hash: 't_11_5',
          },
          {
            numero: '11.6',
            titulo: 'Asistencia en la alimentación',
            hash: 't_11_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33110306_CF01_CFA_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Autocuidado',
      significado:
        'capacidad de una persona para participar y realizar acciones orientadas al cuidado de su salud, bienestar y necesidades cotidianas, de acuerdo con sus capacidades.',
    },
    {
      termino: 'Autonomía',
      significado:
        'capacidad de la persona para tomar decisiones y participar en las actividades de su vida cotidiana de acuerdo con sus capacidades y preferencias.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas y prácticas destinadas a prevenir o reducir los riesgos para la salud durante la atención y el cuidado de las personas.',
    },
    {
      termino: 'Cuidado integral',
      significado:
        'atención que considera de manera conjunta las necesidades físicas, emocionales, sociales y funcionales de la persona, promoviendo su bienestar, seguridad, autonomía y dignidad.',
    },
    {
      termino: 'Dependencia funcional',
      significado:
        'situación en la que una persona requiere apoyo de otra para realizar una o varias actividades de la vida cotidiana.',
    },
    {
      termino: 'Disfagia',
      significado:
        'dificultad para realizar de manera adecuada el proceso de deglución de alimentos o líquidos.',
    },
    {
      termino: 'Envejecimiento',
      significado:
        'proceso natural del ciclo vital que comprende cambios físicos, psicológicos y sociales y que se desarrolla de manera diferente en cada persona.',
    },
    {
      termino: 'Fragilidad',
      significado:
        'condición asociada con una disminución de la reserva y capacidad de respuesta del organismo, que puede aumentar la vulnerabilidad ante diferentes situaciones.',
    },
    {
      termino: 'Higiene cefalocaudal',
      significado:
        'procedimiento de higiene corporal que sigue una secuencia organizada desde la cabeza hacia los pies, procurando mantener la limpieza, comodidad e integridad de la piel.',
    },
    {
      termino: 'Multimorbilidad',
      significado:
        'presencia simultánea de dos o más enfermedades o condiciones de salud en una misma persona.',
    },
    {
      termino: 'Nutrición',
      significado:
        'proceso mediante el cual el organismo obtiene, utiliza y aprovecha los nutrientes necesarios para mantener sus funciones.',
    },
    {
      termino: 'Persona mayor',
      significado:
        'persona que se encuentra en la etapa de la vejez del ciclo vital y que debe recibir un cuidado que respete sus derechos, dignidad, autonomía y características individuales.',
    },
    {
      termino: 'Precauciones universales',
      significado:
        'medidas de protección que se aplican durante el cuidado para reducir el riesgo de exposición y transmisión de agentes infecciosos, independientemente de que exista o no una infección conocida.',
    },
    {
      termino: 'Valoración',
      significado:
        'proceso de recopilación y análisis de información sobre las condiciones, capacidades, necesidades y riesgos de una persona para orientar el apoyo requerido.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'mayor posibilidad de una persona de verse afectada por determinadas condiciones o situaciones debido a sus características individuales o de salud.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asamblea Nacional Constituyente. (1991). <em>Constitución Política de Colombia</em>. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008). <em>Ley 1251 de 2008</em>. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=33964',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009). <em>Ley 1315 de 2009</em>. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36834',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2017). <em>Ley 1850 de 2017</em>. Departamento Administrativo de la Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=82917',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Prevenir la malnutrición o desnutrición</em>.',
      link: 'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/prevenir-la-malnutricion-o-desnutricion.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). <em>Decreto 681 de 2022</em>.',
      link: 'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%20No.%20681%20de%202022.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Programa Ampliado de Inmunizaciones (PAI)</em>.',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2015). <em>Informe mundial sobre el envejecimiento y la salud</em>.',
      link: 'https://apps.who.int/iris/handle/10665/186466',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2020). <em>Prevención y control de infecciones</em>.',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2017). <em>Envejecimiento saludable</em>.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2020). <em>¿Cómo lavarse las manos de una forma segura?</em> [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=N5iWzjNWh8A',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
