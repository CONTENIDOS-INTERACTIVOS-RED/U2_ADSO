export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Modelado de sistemas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Uso de diagramas UML',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos básicos de UML',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos principales de diagramas UML',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Uso de diagramas UML en el análisis de requisitos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Uso de diagramas UML en el diseño del sistema',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Herramientas para crear diagramas UML',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Buenas prácticas en la creación de diagramas UML',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Identificación de casos de uso',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos de un caso de uso',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas para identificar casos de uso',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Criterios para definir un caso de uso',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Representación gráfica de casos de uso',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Documentación de casos de uso',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Pasos para construir un diagrama de casos de uso',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Diagramas de casos de uso',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Historias de usuario',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Matriz de trazabilidad de requisitos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Teniente López, E. Costal Costa, D. & Sancho Samsó, M. R. (2015). Especificación de sistemas software en UML:( ed.). Universitat Politécnica de Catalunya.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61407',
    },
    {
      referencia:
        'Rodríguez, R. (2012). Perfil UML para el modelado visual de requisitos difusos:( ed.). Red Enlace.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/98529',
    },
    {
      referencia:
        'Teniente López, E. Costal Costa, D. & Sancho Samsó, M. R. (2015). Especificación de sistemas software en UML:( ed.). Universitat Politécnica de Catalunya.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61407',
    },
    {
      referencia:
        'Jiménez de Parga, C. (2014). UML Aplicaciones en Java y C++:( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106466',
    },
    {
      referencia:
        'García Mireles, G. A. (2006). Aplicación del modelado de procesos en un curso de ingeniería de software:( ed.). Red Revista Electrónica de Investigación Educativa.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/22241',
    },
    {
      referencia:
        'Quintero, J. B. (2006). Un estudio comparativo de herramientas para el modelado con UML:( ed.). Red Universidad Eafit.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/5285',
    },
  ],
  glosario: [
    {
      termino: 'Actor',
      significado:
        'En un diagrama de casos de uso, un actor es una entidad externa al sistema, como un usuario o un sistema externo, que interactúa con el sistema modelado. Los actores representan los roles que interactúan con el sistema para lograr ciertos objetivos.',
    },
    {
      termino: 'Caso de uso',
      significado:
        'Un caso de uso describe una funcionalidad o tarea que un sistema debe realizar desde el punto de vista de un usuario o actor. Representa una interacción específica entre un actor y el sistema para lograr un objetivo determinado.',
    },
    {
      termino: 'Clases',
      significado:
        'En el modelado de objetos, una clase es una plantilla que define los atributos y comportamientos comunes a todos los objetos de ese tipo. En UML, el diagrama de clases muestra la estructura estática de un sistema, sus clases y las relaciones entre ellas.',
    },
    {
      termino: 'Diagrama de actividad',
      significado:
        'Un diagrama de actividad es un tipo de diagrama UML que muestra el flujo de trabajo o el comportamiento dinámico de un sistema, detallando las actividades y decisiones que se toman en un proceso.',
    },
    {
      termino: 'Diagrama de casos de uso',
      significado:
        'Este tipo de diagrama en UML describe los casos de uso del sistema, sus actores y las interacciones entre ellos. Proporciona una vista clara de las funcionalidades que el sistema debe ofrecer a los usuarios.',
    },
    {
      termino: 'Diagrama de clases',
      significado:
        'Un diagrama de clases en UML muestra las clases del sistema, sus atributos, métodos y las relaciones entre ellas. Es fundamental en el modelado orientado a objetos.',
    },
    {
      termino: 'Diagrama de secuencia',
      significado:
        'Un diagrama de secuencia en UML representa las interacciones entre objetos en un sistema a lo largo del tiempo, mostrando cómo los objetos se comunican entre sí en un flujo de eventos secuenciales.',
    },
    {
      termino: 'Entidades',
      significado:
        'En el modelado de datos, las entidades son objetos o conceptos que tienen relevancia dentro del sistema y que se modelan como elementos con atributos específicos. En diagramas de entidad-relación (ER), las entidades son los elementos claves que participan en relaciones.',
    },
    {
      termino: 'Modelo de datos',
      significado:
        'El modelo de datos describe cómo los datos son almacenados, organizados y manipulados dentro de un sistema. Incluye la definición de las entidades, relaciones y atributos que conforman la base de datos.',
    },
    {
      termino: 'Modelo de proceso',
      significado:
        'El modelo de procesos describe cómo se realizan las actividades o tareas dentro de un sistema, especificando los pasos, decisiones y flujo de trabajo. En UML, esto se puede representar con diagramas de actividad o de flujo de trabajo.',
    },
    {
      termino: 'Relaciones',
      significado:
        'En el contexto del modelado de clases o datos, las relaciones son los vínculos entre diferentes elementos del sistema, como clases, entidades o procesos. En diagramas de clases, las relaciones entre clases pueden ser de tipo asociación, herencia, composición, entre otras.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'Un sistema de información es un conjunto de componentes interrelacionados que recopilan, procesan, almacenan y distribuyen información para apoyar la toma de decisiones, el control y las actividades organizacionales. En el modelado de sistemas, se representan las entidades, procesos y flujos de información dentro de dicho sistema.',
    },
  ],
}
