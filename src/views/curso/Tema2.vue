<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Identificación de casos de uso'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p.mb-5(data-aos="fade-left") Dentro del modelado de sistemas orientados a objetos, el caso de uso constituye un elemento esencial para capturar y describir los requisitos funcionales de un sistema. Un caso de uso se define como una secuencia de acciones que un sistema realiza en respuesta a una interacción iniciada por un actor, con el fin de producir un resultado de valor tangible para dicho actor (Jiménez de Parga, 2014).
      
          .bg-color-4.p-4.mb-3(data-aos="fade-left")
            p.mb-0 Desde una perspectiva práctica, un caso de uso representa una unidad específica de funcionalidad, que el sistema proporciona a los usuarios u otros sistemas que interactúan con él. Cada caso de uso describe un escenario completo de interacción, desde su inicio hasta su conclusión, incluyendo todas las variaciones y posibles excepciones que pudieran ocurrir.
          p Características fundamentales de un caso de uso:
      
      .bg-full-width.bg-color-11
        .p-4.p-md-5
          .bg-full-width.bg-fondo-5
            .px-4.px-md-5.pb-md-3
              .row.justify-content-center.mb-5
                .col-lg-8.mb-3.mb-lg-0.order-lg-2
          
                  SlyderF(columnas="col-12 col-lg-6")
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema5/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Actor principal
                      p.text-center El sujeto (persona, sistema u organización) que inicia la interacción buscando un objetivo.
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema5/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Meta u objetivo
                      p.text-center El resultado que se espera alcanzar al ejecutar el caso de uso.
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema5/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Secuencia de eventos
                      p.text-center La serie de pasos o actividades que se realizan para cumplir el objetivo
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema5/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Condiciones
                      p.text-center Los requisitos que deben cumplirse antes de comenzar (precondiciones) y los estados del sistema tras su ejecución (post condiciones).
                    .bg-color-white.p-4.h-100.shadow-app
                      img(src='@/assets/curso/tema5/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                      h4.text-center.mb-4 Excepciones o alternativas
                      p.text-center Variaciones en el flujo normal que deben contemplarse en situaciones particulares.
      
                .col-lg-4.order-lg-1
                  figure
                    img(src='@/assets/curso/tema5/2.png', alt='')
      
      h2.mb-5(data-aos="fade-left") Ejemplo práctico de un caso de uso
  
      .bg-full-width.bg-color-9
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                  ul.lista-ul--color.mb-0
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Sistema. Plataforma de biblioteca en línea.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Actor principal. Estudiante.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Caso de uso. "Solicitar préstamo de libro".
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Objetivo. Permitir al estudiante solicitar el préstamo de un libro disponible.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Flujo principal.
                  
                  ul.lista-ul--color.ms-3
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 El estudiante accede a la plataforma.
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 El estudiante busca un libro en el catálogo.
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 El sistema muestra los resultados de la búsqueda.
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 El estudiante selecciona el libro deseado.
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 El sistema verifica la disponibilidad.
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 El estudiante solicita el préstamo.
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 El sistema registra la solicitud y confirma el préstamo.
                  ul.lista-ul--color.mb-0
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Flujo alternativo.
                  ul.lista-ul--color.ms-3
                    li.mb-0.d-flex
                      i.fas.fa-circle
                      p.mb-0 Si el libro no está disponible, el sistema ofrece la opción de reservarlo.
                .col-lg-5(data-aos="zoom-in")
                  img.img-fluid(src='@/assets/curso/tema5/8.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      
      .bg-full-width.bg-color-10.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema5/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En este ejemplo, se puede observar que el caso de uso no solo cubre el flujo principal de acciones, sino también contempla una alternativa importante, aumentando así la utilidad del modelo.
  
      .bg-full-width.bg-color-11.mb-5
        .px-4.px-md-5.py-4
          h2(data-aos="fade-left") Importancia de los casos de uso en el modelado de sistemas
          p.mb-5 La construcción de casos de uso, ofrece múltiples beneficios en el desarrollo de sistemas:
          .row.justify-content-center.align-items-stretch
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema5/10.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 Facilita la comunicación entre usuarios finales y desarrolladores, dado que se centra en qué hará el sistema en lugar de cómo lo hará.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema5/11.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 Proporciona una base sólida para la planificación de pruebas, puesto que cada caso de uso puede traducirse en uno o varios escenarios de prueba.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema5/12.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 Ayuda en la priorización de requisitos, permitiendo identificar cuáles funcionalidades son esenciales desde la perspectiva del usuario.
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema5/13.png" alt="")
                .custom-image-card__text.p-4
                  p.mb-0 Contribuye al diseño modular, dado que los casos de uso pueden orientar la creación de componentes de <em>Software</em> independientes y reutilizables.
  
  
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Elementos de un caso de uso
      
      p.mb-5 Cuando se construye un caso de uso, es fundamental entender que este no es simplemente una descripción de actividades, sino una estructura organizada que integra diversos elementos esenciales. Cada uno de estos componentes cumple un propósito específico y contribuye a garantizar que la funcionalidad modelada sea comprensible, completa y útil tanto para usuarios como para desarrolladores (Teniente López et al., 2015).
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.text-white
              h2.mb-4(data-aos="flip-up") Elementos de un caso de uso
              p.mb-4(data-aos="fade-right") En el PDF <b>Elementos de un caso de uso</b>, se describen las partes fundamentales que estructuran un caso de uso completo, desde la identificación de los actores y el flujo de eventos, hasta las precondiciones, excepciones y relaciones entre funcionalidades. Este conocimiento permite representar con claridad los requisitos funcionales del sistema, facilitando la comunicación entre analistas, diseñadores y desarrolladores durante el proceso de análisis y diseño de <em>Software</em>.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Elementos de un caso de uso.
      
            .col-lg-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema5/14.png', alt='')
      
      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Técnicas para identificar casos de uso
      
      p.mb-5 Identificar los casos de uso de un sistema constituye una de las primeras tareas en el modelado de requisitos. Para lograr una captura efectiva, se utilizan diversas técnicas de análisis que permiten descubrir las funcionalidades esperadas desde el punto de vista de los usuarios y otros actores involucrados. Aplicar métodos adecuados garantiza que el sistema sea representado de manera completa, coherente y alineada con las necesidades reales (Teniente López et al., 2015).
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Técnicas para identificar casos de uso 
              p.mb-4(data-aos="fade-right") En el PDF <b>Técnicas para identificar casos de uso</b>, se presentan estrategias prácticas como entrevistas, observación directa, análisis de roles, talleres colaborativos y otras herramientas que facilitan la detección de interacciones clave entre actores y sistema. Estas técnicas ofrecen una guía metodológica para comprender las necesidades reales del entorno y traducirlas en representaciones útiles para el diseño de soluciones efectivas.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Técnicas para identificar casos de uso .
      
            .col-lg-4.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema5/15.png', alt='')
  
      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Criterios para definir un caso de uso
      
      p Definir un caso de uso de manera adecuada, requiere atender a criterios que aseguren su claridad, relevancia y utilidad dentro del modelado de un sistema. Un caso de uso debe representar una unidad completa de funcionalidad que genere valor para un actor, describiendo cómo se alcanza un objetivo concreto a través de la interacción con el sistema (Teniente López et al., 2015).
      p.mb-5 Para lograrlo, se deben cumplir los siguientes criterios fundamentales:
  
      .row.align-items-start.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/16.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Valor para el actor")
              p Cada caso de uso debe reflejar una acción que sea significativa y útil para quien interactúa con el sistema, como obtener un resultado, modificar información o activar un proceso.
      
            .div(titulo="Inicio y fin claros")
              p Debe estar claramente definido cómo y cuándo comienza el caso de uso y en qué condiciones finaliza, asegurando así la delimitación precisa de su alcance.
      
            .div(titulo="Descripción de flujo lógico")
              p La secuencia de pasos que describe el caso de uso debe ser lógica, coherente y fácil de seguir, cubriendo tanto el flujo principal como las posibles alternativas o excepciones.
      
            .div(titulo="Autonomía funcional")
              p Un caso de uso debe poder ejecutarse de manera independiente, sin requerir internamente la ejecución previa de otro caso, salvo que se especifique una relación explícita (como inclusión o extensión).
            .div(titulo="Foco en la interacción externa")
              p Más que detallar procesos internos del sistema, el caso de uso debe centrarse en la interacción visible entre el actor y el sistema, mostrando solo aquello que el usuario experimenta.
            .div(titulo="Lenguaje claro y neutral")
              p La redacción debe evitar tecnicismos innecesarios, empleando un lenguaje accesible tanto para usuarios finales como para desarrolladores.
      
      .row.mb-5
        .col-lg-2.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/17.svg", data-aos="zoom-in")
        .col-lg-10.order-lg-1
          .bg-color-4.p-5.bordes-2(data-aos="fade-left")
            p.mb-0 <b>Ejemplo</b>. Al definir un sistema bancario, "Transferir fondos entre cuentas" constituye un caso de uso válido porque cumple con todos estos criterios: responde a una necesidad clara del usuario, tiene un inicio (el usuario solicita la transferencia), un fin (la transferencia es procesada o rechazada), y describe una interacción específica con el sistema.
  
      #t_2_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.4] Representación gráfica de casos de uso
      
      .bg-full-width.bg-color-3
        .p-4.p-md-5
          .row.mb-5
            .col-lg-4.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/18.png", data-aos="zoom-in")
            .col-lg-8.order-lg-1
              .bg-color-1.p-4.mb-3(data-aos="fade-left")
                p.mb-0 La representación gráfica de casos de uso es una técnica que permite visualizar, de manera estructurada, la relación entre los actores y las funcionalidades principales de un sistema. Esta representación se lleva a cabo mediante diagramas de casos de uso, los cuales utilizan una notación estándar definida por UML (<em>Unified Modeling Language</em>) para facilitar la comprensión entre todos los involucrados en un proyecto (Jiménez de Parga, 2014).
              p(data-aos="fade-left") Un diagrama de casos de uso se compone de varios elementos esenciales:
          
          div.row.justify-content-center.align-items-stretch
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/19.svg" alt="" style="width: 90px")
                h5.text-center Actores
                p.mb-0.text-center Representan a los usuarios o sistemas externos que interactúan con el sistema. Gráficamente se ilustran mediante una figura de persona estilizada o un nombre dentro de una etiqueta.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/20.svg" alt="" style="width: 90px")
                h5.text-center Casos de uso
                p.mb-0.text-center Reflejan las funcionalidades o servicios que el sistema proporciona. Se dibujan como elipses dentro de los límites del sistema.
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/21.svg" alt="" style="width: 90px")
                h5.text-center Sistema
                p.mb-0.text-center Se representa como un rectángulo grande que encierra los casos de uso, indicando los límites de lo que el sistema controla.
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(src="@/assets/curso/tema5/22.svg" alt="" style="width: 90px")
                h5.text-center Relaciones
                p.mb-0.text-center Se utilizan diferentes tipos de líneas para mostrar cómo interactúan los actores con los casos de uso y cómo se relacionan entre sí los propios casos. Estas relaciones pueden ser de asociación, inclusión, extensión o generalización.
      
      h2(data-aos="fade-left") Ejemplo práctico
      p.mb-5 En el contexto de una plataforma de compras en línea, un diagrama de casos de uso podría representar lo siguiente:
  
      .bg-full-width.bg-color-6.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 El actor "Cliente" se conecta con los casos de uso "Registrar cuenta", "Buscar productos", "Realizar pedido" y "Pagar compra".
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 El sistema, "Tienda Virtual", encapsula todos estos casos de uso.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 "Pagar compra" podría incluir el caso de uso "Verificar método de pago", indicando que la verificación es un paso necesario dentro del proceso de pago.
                .col-lg-4(data-aos="zoom-in").order-lg-1
                  img.img-fluid(src='@/assets/curso/tema5/23.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
      
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.mb-3.mb-lg-0
          .bg-color-9.p-5
            figure
              img(src="@/assets/curso/tema5/24.svg", data-aos="zoom-in")
        .col-lg-5
          .bg-color-5.p-4(data-aos="fade-left")
            p Visualmente, el "Cliente" sería un icono fuera del rectángulo del sistema, conectado con líneas a cada una de las elipses correspondientes a los casos de uso.
  
            p La representación visual de los casos de uso permite:
  
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Facilitar la comunicación entre usuarios, analistas y desarrolladores. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Detectar omisiones o funcionalidades no contempladas en el análisis inicial.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Organizar el alcance del sistema de forma accesible y comprensible. 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Identificar responsabilidades de cada actor en relación con el sistema.
  
  
      p.mb-5 Por medio de esta herramienta visual, incluso personas sin formación técnica pueden comprender las capacidades principales del sistema y sus interacciones claves.
  
      #t_2_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.5] Documentación de casos de uso
      
      p.mb-5 La documentación de casos de uso constituye un proceso esencial en el análisis y diseño de sistemas, porque proporciona una descripción precisa y estructurada de las interacciones entre los actores y el sistema. Este proceso no se limita únicamente a los diagramas gráficos, sino que incluye la elaboración de descripciones narrativas y tablas formales que detallan cada aspecto relevante del caso de uso (Jiménez de Parga, 2014).
      
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.text-white
              h2.mb-4(data-aos="flip-up") Documentación de casos de uso
              p.mb-4(data-aos="fade-right") En el PDF <b>Documentación de casos de uso</b>, se describe una estructura clara y ordenada para registrar elementos como actores, flujos principales, excepciones, condiciones previas y posteriores, así como reglas específicas que influyen en la ejecución del caso. Este proceso permite una comunicación efectiva entre usuarios, analistas y desarrolladores, asegurando que todos compartan una comprensión común y detallada de los requisitos funcionales.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Documentación de casos de uso.
      
            .col-lg-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema5/25.png', alt='')
      
      #t_2_6.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.6] Pasos para construir un diagrama de casos de uso
      
      p.mb-5 Los pasos para construir un diagrama de casos de uso, son:
    
      .bg-full-width.bg-fondo-2.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-6
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema5/26.svg', alt='', style="max-width: 1106px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="58%" y="11.5%" numero="+")
                  h5 1. Identificar a los actores
                  p Primero que todo se toma como ejemplo la construcción de un diagrama de casos de uso, para un sistema de biblioteca en línea.
                  p En la identificación de los actores, son las personas o sistemas externos, que interactúan con el sistema.
                  h5 Ejemplo:
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Usuario.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Bibliotecario.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Sistema de pago.
      
                .bg-color-white.box-shadow.p-3(x="28%" y="43.5%" numero="+")
                  h5 2. Identificar los casos de uso
                  p Son las acciones o funcionalidades principales que los actores pueden realizar con el sistema.
                  h5 Ejemplo:
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Registrarse.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Iniciar sesión.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Buscar libros.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Reservar libros.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Devolver libros.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Pagar multa.
  
                .bg-color-white.box-shadow.p-3(x="88%" y="43.5%" numero="+")
                  h5 3. Relacionar actores con los casos de uso
                  p Dibujar líneas entre los actores y los casos de uso, con los que interactúan.
                  h5 Ejemplo:
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 El Usuario puede. Registrarse, Iniciar sesión, Buscar libros, Reservar libros, Devolver libros.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 El Bibliotecario puede. Iniciar sesión, Registrar libros, Ver préstamos, Cobrar multas.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 El Sistema de pago interactúa con. Pagar multa.
                .bg-color-white.box-shadow.p-3(x="58%" y="77.5%" numero="+")
                  h5 4. Usar relaciones especiales (si aplica)
                  p Dibujar líneas entre los actores y los casos de uso, con los que interactúan.
                  p <b>Include (<em>include</em>)</b>: cuando un caso de uso siempre incluye otro.
                  h5 Ejemplo:
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 <b>Ejemplo</b>: Reservar libros <em>include</em> Buscar libros
                  p <b>Extend (<em>extend</em>)</b>: cuando un caso de uso opcionalmente amplía otro.
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 <b>Ejemplo</b>: Pagar multa <em>extend</em> Devolver libros
                .bg-color-white.box-shadow.p-3(x="89%" y="77.5%" numero="+")
                  h5 5. Dibujar el diagrama
                  p Usar una herramienta UML, y realizar los siguientes pasos:
                  h5 Ejemplo:
                  ul.lista-ul--color
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Dibujar a los actores como figuras de persona.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Los casos de uso van en óvalos dentro de un rectángulo, que representa el sistema.
                    li.mb-0.d-flex
                      i.far.fa-arrow-alt-circle-right
                      p.mb-0 Conectar cada actor con sus casos de uso.
      
      p.mb-5 Ejemplo dibujar el diagrama:
  
      .bg-color-9.p-5
        .row.justify-content-center
          .col-lg-8
            figure
              img(src="@/assets/curso/tema5/27.svg", data-aos="zoom-in")
  
  
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://repository.unad.edu.co/bitstream/handle/10596/20698/Lenguaje%20de%20Modelado%20Unificado%20UML.pdf?sequence=5 " target="_blank" rel="noopener noreferrer") Gómez, J. (2011). Lenguaje de Modelado Unificado (UML). Universidad Nacional Abierta y a Distancia (UNAD). 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=tKymPlJhO2s " target="_blank" rel="noopener noreferrer") videosdeinformatica. [@Videosdeinformatica] (2021, 7 de marzo).UML - Cómo diseñar diagramas de casos de uso. [Video]. YouTube.  
  
  
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
