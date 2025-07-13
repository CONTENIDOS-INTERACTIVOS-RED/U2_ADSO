<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5


    .row.mb-3
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el desarrollo de software, una vez definidos los requisitos del sistema, el siguiente paso fundamental es representar gráficamente cómo funcionará ese sistema. Esta unidad introduce a los estudiantes en el modelado de sistemas, una actividad clave que permite visualizar, comunicar y validar la estructura y el comportamiento de un sistema, antes de su implementación. A través de modelos precisos, se logra una mejor comprensión entre los desarrolladores, diseñadores y usuarios, reduciendo ambigüedades y errores en etapas posteriores.
    
        p(data-aos="fade-left").mb-4 El estudio de esta unidad es esencial porque proporciona las herramientas para traducir los requerimientos en representaciones visuales comprensibles y estandarizadas, facilitando la comunicación técnica y la toma de decisiones durante el diseño del software. Al finalizar esta unidad, los estudiantes estarán en la capacidad de utilizar diagramas UML para modelar sistemas, identificar y definir casos de uso, y representar flujos de datos y procesos de negocio con claridad y coherencia.






    
    .bg-full-width.bg-color-3
      .p-4.p-md-5
        .row.mb-5
          .col-lg-8
            .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
              p.mb-0 Dominar el modelado de sistemas permite anticipar posibles problemas, optimizar recursos y garantizar que el software cumpla con las expectativas del cliente. Además, estas habilidades son altamente valoradas en la industria, dado que permiten documentar y comunicar ideas complejas de forma ordenada y profesional. Por ejemplo, grandes soluciones tecnológicas como los sistemas bancarios o las plataformas de comercio electrónico, requieren modelos bien estructurados para asegurar su funcionalidad, seguridad y escalabilidad.
            
            p.mb-5 La unidad está organizada con la siguiente temática principal:
            
          .col-lg-4.d-none.d-sm-block
            figure
              img(src="@/assets/curso/intro/3.svg", data-aos="zoom-in").mb-4.mb-lg-0
    
        
        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/4.svg" alt="" style="width: 90px")
              h5.text-center Uso de diagramas UML
              p.mb-0.text-center Se explorarán diferentes tipos de diagramas (clases, secuencias, casos de uso, etc.) y su aplicación en la representación de los sistemas.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/5.svg" alt="" style="width: 90px")
              h5.text-center Identificación de casos de uso
              p.mb-0.text-center Aprenderemos a definir y documentar las interacciones claves, entre los usuarios y el sistema.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/6.svg" alt="" style="width: 90px")
              h5.text-center Modelado de datos y procesos
              p.mb-0.text-center Se abordarán técnicas para representar el flujo de datos y el comportamiento del sistema, mediante diagramas estructurados.
      
    .row.mb-5
      .col-lg-7
        .bg-color-2.px-5.py-4.h-100(data-aos="fade-left")
          p.mb-0.text-white A lo largo de la unidad, se desarrollarán ejercicios prácticos que ayudarán a consolidar los conocimientos adquiridos. Se fomentará el uso de herramientas digitales de modelado y el trabajo colaborativo para simular escenarios reales. Se recomienda que los estudiantes repasen los conceptos aprendidos en la unidad anterior sobre requisitos, puesto que serán fundamentales para construir modelos coherentes y funcionales. Participar activamente en las actividades permitirá lograr los resultados de aprendizaje esperados y fortalecer habilidades analíticas y de comunicación técnica.
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/7.png", data-aos="zoom-in")
</template>
