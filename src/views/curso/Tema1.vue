<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Uso de diagramas UML'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El Lenguaje Unificado de Modelado UML (<em>Unified Modeling Language</em>), se ha consolidado como un estándar para visualizar, especificar, construir y documentar los artefactos de un sistema de <em>Software</em>. Este lenguaje proporciona un conjunto de notaciones gráficas que permiten representar diferentes aspectos de un sistema de manera estructurada y comprensible para todos los involucrados en su desarrollo (Teniente López et al., 2015).
      
      .row.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p.mb-5(data-aos="fade-left") UML no es un método de desarrollo en sí mismo; más bien, complementa metodologías existentes al ofrecer una manera uniforme de describir diseños complejos. Con UML se puede modelar desde los requisitos iniciales, hasta la arquitectura de alto nivel y el diseño detallado de componentes individuales.
      
          .bg-color-1.p-4.mb-3(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Este lenguaje surgió en la década de 1990 como respuesta a la necesidad de unificar diversas metodologías de modelado que existían en el ámbito de la ingeniería de <em>Software</em>. Grady Booch, Ivar Jacobson y James Rumbaugh, reconocidos expertos en modelado de sistemas, colaboraron para crear un lenguaje común que permitiera mejorar la comunicación entre diseñadores, desarrolladores, analistas y clientes.
          p UML organiza los modelos en diferentes tipos de diagramas, agrupados principalmente en tres categorías:
      
      .bg-full-width.bg-color-11
        .p-4.p-md-5
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/4.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Diagramas estructurales
                  p.mb-0 Muestran la organización estática de un sistema, como los diagramas de clases o de componentes (Rodríguez, 2012).
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/5.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Diagramas de comportamiento
                  p.mb-0 Ilustran cómo interactúan los elementos del sistema en el tiempo, como los diagramas de casos de uso o de actividad.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema4/6.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Diagramas de interacción
                  p.mb-0 Representan la comunicación entre objetos, como los diagramas de secuencia o colaboración.
  
      #t_1_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.1] Elementos básicos de UML
      
      p.mb-5 UML se construye a partir de un conjunto de elementos básicos que permiten representar diferentes componentes de un sistema de <em>Software</em>. Estos elementos sirven como bloques fundamentales para construir modelos completos y detallados (Teniente López et al., 2015). Comprenderlos es esencial para interpretar o diseñar diagramas de manera precisa.
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.text-white
              h2.mb-4(data-aos="flip-up") Elementos básicos de UML
              p.mb-4(data-aos="fade-right") En el PDF <b>Elementos básicos de UML</b>, se describen y ejemplifican los componentes fundamentales del Lenguaje Unificado de Modelado (UML), agrupados en categorías estructurales, comportamentales, de agrupación y de anotación, facilitando así la comprensión y aplicación de este lenguaje en contextos reales de desarrollo de <em>Software</em>.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Elementos básicos de UML.
      
            .col-lg-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/7.png', alt='')
      
      #t_1_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.2] Tipos principales de diagramas UML
      
      p.mb-5 La notación UML (Lenguaje Unificado de Modelado), ofrece una serie de diagramas diseñados para representar diferentes aspectos de un sistema, desde su estructura estática hasta su comportamiento dinámico. Cada tipo de diagrama permite a los desarrolladores y analistas comprender y comunicar las complejidades de un sistema de forma gráfica y estandarizada (Rodríguez, 2012).
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Tipos principales de diagramas UML
              p.mb-4(data-aos="fade-right") En el PDF <b>Tipos principales de diagramas UML</b>, se presentan los distintos tipos de diagramas utilizados en el Lenguaje Unificado de Modelado (UML), agrupados en estructurales, de comportamiento e interacción, con ejemplos que ilustran su aplicación práctica en el desarrollo de soluciones tecnológicas eficientes y bien organizadas.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Tipos principales de diagramas UML.
      
            .col-lg-4.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/8.png', alt='')
      
      #t_1_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.3] Uso de diagramas UML en el análisis de requisitos
      
      p.mb-5 En el análisis de requisitos, el uso de diagramas UML (<em>Unified Modeling Language</em>) resulta fundamental para representar de manera clara y visual los requerimientos del sistema que se está desarrollando. Los diagramas UML permiten a los analistas y diseñadores capturar los procesos, las interacciones y la estructura del sistema, facilitando la comprensión y comunicación entre los involucrados en el proyecto, como clientes, desarrolladores y <em>stakeholders</em> (Teniente López et al., 2015).
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white.order-2
              h2.mb-4(data-aos="flip-up") Uso de diagramas UML en el análisis de requisitos
              p.mb-4(data-aos="fade-right") En el PDF <b>Uso de diagramas UML en el análisis de requisitos</b>, se describen los principales tipos de diagramas empleados en esta fase —casos de uso, clases y actividades— explicando cómo contribuyen a identificar funcionalidades, entidades clave y flujos de trabajo. Estas representaciones gráficas permiten modelar de forma clara las necesidades del sistema, facilitando la comunicación entre los equipos y guiando las decisiones de diseño.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Uso de diagramas UML en el análisis de requisitos.
      
            .col-lg-4.mb-3.mb-lg-0.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/9.png', alt='')
  
      .bg-full-width.bg-color-3
        .p-4.p-md-5
          #t_1_4.titulo-segundo(data-aos="flip-up")
            h2 #[span 1.4] Uso de diagramas UML en el diseño del sistema
          
          .row.mb-5
            .col-lg-3.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/10.png", data-aos="zoom-in")
            .col-lg-9.order-lg-1
              p.mb-5(data-aos="fade-left") En la fase de diseño del sistema, los diagramas UML (<em>Unified Modeling Language</em>) juegan un papel fundamental al proporcionar una representación visual detallada de la arquitectura, los componentes y la interacción entre ellos. Esta representación permite a los diseñadores, arquitectos de <em>Software</em> y desarrolladores, entender la estructura interna del sistema y cómo los distintos módulos deben interactuar, facilitando la creación de un diseño robusto y eficiente. Los diagramas UML utilizados en esta fase, no solo especifican cómo se deben implementar los requisitos, sino también cómo se debe organizar y estructurar el código para asegurar un sistema escalable y mantenible (Teniente López et al., 2015).
          
              .bg-color-4.p-4(data-aos="fade-left")
                p.mb-0 Los diagramas UML más relevantes para el diseño del sistema son los diagramas de clases, componentes, secuencia, colaboración y despliegue. A continuación, se detallan cómo se emplean estos diagramas en la fase de diseño.
      
      .row.align-items-start.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/11.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Diagramas de clases")
              p En el diseño de sistemas orientados a objetos, el diagrama de clases es crucial para definir la estructura estática del sistema. Este diagrama describe las clases, sus atributos, métodos y las relaciones entre ellas, como asociaciones, herencia y composición. Durante la fase de diseño, el diagrama de clases se utiliza para planificar la estructura del sistema y cómo se organizan los objetos y las interacciones entre ellos (Rodríguez, 2012).
      
            .div(titulo="Diagramas de componentes")
              p Los diagramas de componentes son fundamentales en el diseño de sistemas a gran escala, debido a que permiten representar los componentes del sistema como unidades modulares que interactúan entre sí. Estos diagramas describen los componentes de <em>Software</em> (como módulos, subsistemas o servicios) y las interfaces que permiten la comunicación entre ellos (Rodríguez, 2012). Durante la fase de diseño, estos diagramas ayudan a planificar la arquitectura general del sistema y a identificar cómo se deben organizar los distintos módulos de forma que sean reutilizables y fáciles de mantener.
      
            .div(titulo="Diagramas de secuencia")
              p Los diagramas de secuencia son utilizados para describir cómo los objetos del sistema interactúan en el tiempo, mostrando el orden en que ocurren los eventos y cómo se pasan mensajes entre los objetos. Estos diagramas son muy útiles para modelar la lógica de negocio en el diseño de un sistema, especialmente para describir procesos complejos que involucran múltiples actores y objetos.
              p Por ejemplo, en un sistema bancario, un diagrama de secuencia podría mostrar el flujo de un proceso como la transferencia de dinero entre dos cuentas. Este diagrama representa el intercambio de mensajes entre los objetos "Cliente", "Cuenta" y "Banco" para realizar la operación.
              h5 Ejemplo
              p.mb-0 1.	Cliente solicita una transferencia.
              p.mb-0 2.	Banco valida la solicitud.
              p.mb-0 3.	La cuenta del cliente es debitada.
              p.mb-0 4.	La cuenta del destinatario está acreditada.
              p 5.	Banco confirma la operación.
              .row.justify-content-center.mb-3
                .col-lg-8
                  figure
                    img(src="@/assets/curso/tema4/12.png", alt="").mb-4.mb-lg-0
              p Este diagrama ayuda a entender la interacción de los objetos a lo largo de una operación específica, lo que es esencial para la implementación de la lógica del sistema.
  
            .div(titulo="Diagramas de colaboración")
              p Los diagramas de colaboración son similares a los diagramas de secuencia, pero en lugar de centrarse en el tiempo, se enfocan en cómo los objetos interactúan entre sí para llevar a cabo una tarea específica. Estos diagramas muestran los objetos involucrados en una operación y las relaciones entre ellos, con énfasis en el flujo de mensajes entre los objetos. Son útiles para comprender la estructura colaborativa de los objetos durante el diseño (Rodríguez, 2012).
            .div(titulo="Diagramas de despliegue")
              p El diagrama de despliegue se utiliza para representar la distribución física del sistema en el <em>hardware</em>, mostrando cómo los componentes del <em>Software</em> se distribuyen en los nodos de la red o servidores. Este diagrama es fundamental para planificar la infraestructura tecnológica necesaria para soportar el sistema y garantizar su rendimiento, escalabilidad y disponibilidad (Teniente López et al., 2015).
      
      .row.mb-5
        .col-lg-5.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema4/13.png", data-aos="zoom-in")
        .col-lg-7.order-lg-1
          .bg-color-5.h-100.p-4(data-aos="fade-left")
            p.mb-0 El uso de diagramas UML en el diseño del sistema es esencial para proporcionar una representación detallada y clara de la arquitectura del sistema y de cómo sus componentes deben interactuar entre sí. Los diagramas de clases, componentes, secuencia, colaboración y despliegue permiten a los diseñadores y desarrolladores comprender y planificar la implementación del sistema, asegurando que los requisitos sean satisfechos de manera coherente y eficiente. Estos diagramas no solo sirven como herramientas de comunicación, sino también como guías claves para el desarrollo y mantenimiento del sistema a largo plazo.
  
      #t_1_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.5] Herramientas para crear diagramas UML
      
      p.mb-5 Para facilitar la creación, edición y documentación de diagramas UML, existen diversas herramientas tecnológicas que ofrecen entornos especializados. Cada una presenta características que responden a distintas necesidades, desde proyectos educativos hasta desarrollos industriales de gran escala. A continuación, se describen algunas de las principales alternativas:
  
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/14.png")
              .col-lg-7
                h5 Lucidchart
                p Lucidchart es una herramienta en línea que permite diseñar diagramas, de manera intuitiva, mediante el uso de plantillas prediseñadas y una interfaz gráfica amigable. Al trabajar desde un navegador, elimina la necesidad de instalaciones locales, promoviendo la colaboración en tiempo real entre varios usuarios.
      
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/15.png")
              .col-lg-7
                h5 Draw.io (ahora llamado diagrams.net)
                p Draw.io es una plataforma gratuita y de código abierto, que funciona tanto en línea como en modo local. Ofrece una amplia gama de formas UML que permiten crear diagramas de clases, secuencias, actividades y más. Además, permite guardar los archivos directamente en servicios como Google Drive o Dropbox, facilitando la portabilidad de los proyectos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/16.png")
              .col-lg-7
                h5 StarUML
                p StarUML es una potente herramienta de escritorio enfocada en proyectos de <em>Software</em> de mediana y gran escala. Permite modelar múltiples tipos de diagramas UML, integrar código fuente y documentar de forma automática los modelos creados. Se destaca por soportar la generación de código en varios lenguajes de programación.
      
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/17.png")
              .col-lg-7
                h5 Visual Paradigm
                p Visual Paradigm combina un conjunto de funciones que van más allá del modelado UML, incluyendo soporte para metodologías ágiles, modelado de bases de datos y gestión de requisitos. Ofrece ediciones tanto gratuitas como de pago, adaptándose a distintos niveles de complejidad de proyectos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/18.png")
              .col-lg-7
                h5 Enterprise Architect
                p Enterprise Architect es una de las herramientas más robustas del mercado, orientada a proyectos de ingeniería de <em>Software</em> a gran escala. Permite integrar UML con otras notaciones como BPMN (<em>Business Process Model and Notation</em>) y SysML (Systems Modeling Language). Además, gestiona versiones y cambios de modelos de manera profesional.
      
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/19.png")
              .col-lg-7
                h5 PlantUML
                p PlantUML ofrece una alternativa basada en texto para la creación de diagramas UML. A través de una sintaxis sencilla, se describen los componentes y relaciones que la herramienta transforma en gráficos automáticos. Es ideal para programadores que prefieren trabajar sin interfaces gráficas complejas.
      
      h2.mb-5(data-aos="fade-left") Ventajas de usar herramientas de modelado UML
  
      .bg-color-1.bordes.mb-5(data-aos="fade-left")
        .row.align-items-center
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            img(src="@/assets/curso/tema4/20.svg").mx-auto
          .col-lg-7.order-lg-1.p-5
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Ahorro de tiempo</b>. Las plantillas y la generación automática de relaciones aceleran el proceso de modelado.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Colaboración</b>. Muchas herramientas permiten el trabajo simultáneo en línea.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Documentación formal</b>. Facilitan la creación de documentación estandarizada que puede ser compartida entre equipos de desarrollo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Consistencia visual</b>. Ayudan a mantener la uniformidad en todos los diagramas de un proyecto.
  
      #t_1_6.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.6] Buenas prácticas en la creación de diagramas UML
      
      p.mb-5 La correcta elaboración de diagramas UML no solo depende del conocimiento de sus símbolos y elementos, sino también de seguir ciertas buenas prácticas que garantizan la claridad, coherencia y utilidad del modelo. Adoptar estas prácticas permite que los diagramas sirvan efectivamente como herramientas de comunicación entre analistas, diseñadores, desarrolladores y otros interesados (Teniente López et al., 2015).
  
      .bg-full-width.bg-color-8.mb-0
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white.order-2
              h2.mb-4(data-aos="flip-up") Buenas prácticas en la creación de diagramas UML
              p.mb-4(data-aos="fade-right") En el PDF <b>Buenas prácticas en la creación de diagramas UML</b>, se presentan recomendaciones clave para elaborar diagramas comprensibles, precisos y útiles en el desarrollo de <em>Software</em>. Estas buenas prácticas —como definir el propósito, emplear una notación estandarizada, mantener la claridad y validar los modelos— garantizan que los diagramas no solo representen correctamente el sistema, sino que también faciliten la colaboración entre los actores involucrados en el proyecto.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Buenas prácticas en la creación de diagramas UML.
      
            .col-lg-4.mb-3.mb-lg-0.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/21.png', alt='')
  
  
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://openaccess.uoc.edu/bitstream/10609/9121/1/Intro_UML.pdf" target="_blank" rel="noopener noreferrer") Fundación Universitaria Oberta de Catalunya (FUOC). (s.f.). Introducción al Lenguaje de Modelado Unificado (UML). Universitat Oberta de Catalunya.  
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=gXQkFQtKciM" target="_blank" rel="noopener noreferrer") Ingeniería de <em>Software</em> de Élite. [@EdgarFernandez] (2023, 16 de  junio). Análisis de sistemas de <em>Software</em> con UML - Vista de Dominio (Clases conceptuales). [Video]. YouTube.  
  
  
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
