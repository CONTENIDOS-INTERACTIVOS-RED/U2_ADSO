<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Modelado de datos y procesos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p.mb-5 Para conocer sobre esta temática, lo invitamos a ver el siguiente video:
  
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/COEXFk1F6Dg?si=a8_tOq-EoY348l4n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Modelado de datos
      
      p.mb-5 El modelado de datos es una etapa fundamental en el diseño de sistemas de información, ya que permite estructurar de forma lógica y coherente los datos que serán gestionados por una aplicación.
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.text-white
              h2.mb-4(data-aos="flip-up") Modelado de datos
              p.mb-4(data-aos="fade-right") En el PDF <b>Modelado de datos</b>, se abordan los principales enfoques para representar entidades, atributos y relaciones, destacando el uso del modelo entidad-relación como herramienta central. A través de ejemplos prácticos y la diferenciación entre modelado conceptual, lógico y físico, se ofrece una guía clara para construir estructuras de datos eficientes, comprensibles y escalables.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Modelado de datos.
      
            .col-lg-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema6/1.png', alt='')
      
      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Modelado de procesos
      
      p.mb-5 El modelado de procesos es una herramienta clave para representar, analizar y optimizar las actividades que integran un sistema o negocio.
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Modelado de procesos
              p.mb-4(data-aos="fade-right") En el PDF <b>Modelado de procesos</b>, se profundiza en las etapas y enfoques necesarios para construir modelos que reflejen de manera clara y precisa la secuencia de tareas, decisiones y actores involucrados. A través de ejemplos prácticos y el uso de diagramas como BPMN o diagramas de flujo, se proporciona una guía útil para mejorar la eficiencia operativa y facilitar la comunicación entre los equipos de trabajo.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_10.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Modelado de procesos.
      
            .col-lg-4.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema6/2.png', alt='')
      
      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Técnicas y herramientas de modelado
      
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema6/3.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-4.p-4.mb-3(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema6/4.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El modelado es un proceso clave en el diseño y análisis de sistemas, dado que permite representar de manera visual y estructurada diversos aspectos de un sistema, proceso o entidad. Existen varias técnicas y herramientas que facilitan esta tarea, cada una con características específicas que permiten modelar diferentes aspectos de los sistemas, ya sea desde la perspectiva de procesos, datos, interacciones o estructuras (García Mireles, 2006).
          p(data-aos="fade-left") A continuación, se detallan algunas de las principales técnicas y herramientas de modelado, utilizadas en ingeniería de <em>Software</em> y en la gestión de procesos y datos.
      
      h2(data-aos="fade-left") Técnicas de modelado
      p.mb-5 Las técnicas de modelado son:
  
      .row.align-items-start.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema6/5.png", alt="").mb-4.mb-lg-0
        .col-lg-8.order-lg-1
      
          AcordionA(tipo="b")
            .div(titulo="Modelado de procesos de negocio (BPM)")
              p El modelado de procesos de negocio se enfoca en representar las actividades que conforman un proceso dentro de una organización. Utiliza diagramas como los de flujo de trabajo y BPMN (<em>Business Process Model and Notation</em>) para representar visualmente cómo las tareas se interrelacionan y cómo los recursos son utilizados.
              p <b>Ejemplo</b>. En una empresa de ventas, un proceso de negocio puede ser el flujo de recepción de pedidos, donde las actividades incluyen verificar inventarios, facturar, embalar y realizar el envío. El modelo gráfico ayuda a identificar posibles ineficiencias, como la demora en el embalaje.
      
            .div(titulo="Modelado de datos")
              p El modelado de datos implica la creación de representaciones visuales de los datos y sus relaciones dentro de un sistema. Uno de los diagramas más utilizados en este contexto es el Diagrama Entidad-Relación (ER), que representa las entidades, sus atributos y las relaciones entre ellas (Quintero, 2006).
              p <b>Ejemplo</b>. En una base de datos de una tienda en línea, las entidades pueden ser "Producto", "Cliente" y "Pedido". El modelo de datos visualiza cómo cada entidad se relaciona (por ejemplo, un cliente puede realizar varios pedidos, y cada pedido puede contener varios productos).
      
            .div(titulo="Modelado de objetos")
              p El modelado orientado a objetos es una técnica que se basa en representar sistemas a través de objetos que tienen atributos (propiedades) y métodos (funciones o procedimientos). Los diagramas de clases y de objetos son fundamentales en este tipo de modelado y se utilizan en el desarrollo de sistemas basados en la programación orientada a objetos (OOP).
              p <b>Ejemplo</b>. En una aplicación de gestión de bibliotecas, las clases pueden ser "Libro", "Usuario" y "Préstamo", y los objetos serían las instancias de estas clases (por ejemplo, un "Libro" específico que tiene un título, autor y código ISBN).
      
            .div(titulo="Modelado de comportamiento")
              p Esta técnica se enfoca en representar las interacciones y el comportamiento del sistema a lo largo del tiempo. Los diagramas de secuencia y de actividad son ejemplos típicos utilizados para modelar cómo los actores interactúan con el sistema y cómo las actividades o procesos son ejecutados en secuencia.
              p <b>Ejemplo</b>. En un sistema de compras en línea, un diagrama de secuencia podría mostrar cómo un usuario realiza una compra, interactuando con el sistema para seleccionar un producto, añadirlo al carrito y luego proceder con el pago.
      
      h2(data-aos="fade-left") Herramientas de modelado
      p.mb-5 Existen diversas herramientas que facilitan la creación de modelos visuales. Algunas de las más populares incluyen:
  
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema6/6.png")
              .col-lg-7
                h5 Microsoft Visio
                p Microsoft Visio es una de las herramientas más conocidas para crear diagramas de flujo, diagramas de procesos y diagramas de datos. Ofrece plantillas predefinidas para diferentes tipos de diagramas y permite la creación de modelos gráficos sencillos y detallados.
                p <b>Ventaja</b>. Visio es fácil de usar, tiene una amplia gama de plantillas y es ideal para usuarios que necesitan crear diagramas rápidos y comprensibles.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema6/7.png")
              .col-lg-7
                h5 Lucidchart
                p Lucidchart. Lucidchart es una herramienta basada en la web para crear diagramas de flujo, diagramas de procesos de negocio, diagramas de redes y más. Su facilidad de uso y la posibilidad de colaborar en tiempo real lo hacen ideal para equipos que trabajan de forma remota o distribuida.
                p <b>Ventaja</b>. Lucidchart permite la colaboración en tiempo real y la integración con plataformas como Google Drive, Microsoft Office, entre otras.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema6/8.png")
              .col-lg-7
                h5 Enterprise Architect
                p Enterprise Architect es una herramienta avanzada utilizada para modelar sistemas complejos mediante UML (<em>Unified Modeling Language</em>). Se utiliza principalmente en el desarrollo de <em>Software</em> y en la ingeniería de sistemas. Permite la creación de diagramas de clases, diagramas de secuencia, diagramas de casos de uso y más.
                p <b>Ventaja</b>. Enterprise Architect es ideal para proyectos de <em>Software</em> grandes y complejos, ofreciendo funciones avanzadas como la simulación de modelos y la gestión de versiones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema6/9.png")
              .col-lg-7
                h5 StarUML
                p StarUML. StarUML es una herramienta de modelado UML que permite crear diagramas de clases, casos de uso, secuencia y otros tipos de diagramas utilizados en el desarrollo de sistemas orientados a objetos. Es una herramienta potente y ligera para proyectos de <em>Software</em>.
                p <b>Ventaja</b>. StarUML es una opción gratuita y fácil de usar para equipos de desarrollo de <em>Software</em> que necesitan realizar modelos rápidos de sus sistemas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema6/10.png")
              .col-lg-7
                h5 BPMN Tool
                p Herramientas como Bizagi y Camunda son especializadas en modelado de procesos de negocio utilizando la notación BPMN. Estas herramientas permiten representar de manera precisa y estandarizada los flujos de trabajo dentro de una organización.
                p <b>Ventaja</b>. Las herramientas BPMN están especialmente diseñadas para la creación de modelos de procesos de negocio y pueden ser utilizadas tanto por analistas de negocio como por desarrolladores de <em>Software</em>.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema6/11.png")
              .col-lg-7
                h5 Draw.io
                p Draw.io es una herramienta gratuita basada en la web que permite crear diagramas de todo tipo, incluidos diagramas de flujo, diagramas UML, diagramas de red, etc. Es muy popular por su interfaz sencilla y su integración con servicios en la nube como Google Drive y OneDrive.
                p <b>Ventaja</b>. Es completamente gratuita y fácil de usar, ideal para usuarios que no requieren características avanzadas, pero necesitan una herramienta eficiente para diagramas rápidos.
      
      h2(data-aos="fade-left") Ejemplo práctico de uso de técnicas y herramientas de modelado
      p.mb-5 Supongamos que un equipo de desarrollo de <em>Software</em> está creando un sistema de gestión de recursos humanos para una empresa. El proceso de modelado podría realizarse de la siguiente manera:
  
      .row.align-items-start.mb-5
        .col-lg-4.order-lg-2.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema6/12.png", alt="").mb-4.mb-lg-0
        .col-lg-8.order-lg-1
      
          AcordionA(tipo="b")
            .div(titulo="Técnica de modelado de procesos")
              p El equipo utiliza BPMN para modelar el proceso de gestión de nómina, desde la solicitud de horas extras hasta la generación del pago final. El modelo ayuda a identificar flujos ineficientes, como la necesidad de aprobación manual en cada paso.
      
            .div(titulo="Técnica de modelado de datos")
              p El equipo crea un diagrama ER para representar la base de datos del sistema, con entidades como "Empleado", "Departamento" y "Pago", y las relaciones entre ellas (por ejemplo, un empleado está asignado a un departamento y tiene varios pagos).
      
            .div(titulo="Herramienta de modelado")
              p Para crear estos diagramas, el equipo utiliza Lucidchart para la creación del diagrama de flujo de procesos y StarUML para los diagramas de clases y relaciones de base de datos.
      
            .div(titulo="Análisis y mejora")
              p El equipo utiliza el modelo de procesos para identificar cuellos de botella en el proceso de aprobación de horas extras, y ajusta el flujo para automatizar ciertas aprobaciones, lo que mejora la eficiencia.
      
      .bg-color-1.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/13.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Las técnicas y herramientas de modelado son esenciales para comprender y representar sistemas complejos de manera clara y eficiente. A través de estas técnicas, los equipos de desarrollo y los analistas de negocio pueden identificar problemas, optimizar procesos y diseñar sistemas efectivos. El uso adecuado de las herramientas de modelado facilita la visualización de estos sistemas y ayuda a mejorar la comunicación y la toma de decisiones en todas las fases del desarrollo de un proyecto.
      
      #t_3_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.4] Integración entre el modelo de datos y el modelo de procesos
      
      p.mb-5 La integración entre el modelo de datos y el modelo de procesos es un aspecto fundamental en el diseño y desarrollo de sistemas complejos. Ambas representaciones, aunque distintas en su naturaleza, se complementan y deben ser gestionadas de manera coherente para garantizar que los procesos de negocio se ejecuten correctamente utilizando los datos disponibles y que la estructura de los datos se ajuste a las necesidades del proceso. Esta integración asegura que, tanto los flujos de trabajo como la gestión de la información, estén alineados y optimizados dentro del sistema (Quintero, 2006).
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Integración entre el modelo de datos y el modelo de procesos
              p.mb-4(data-aos="fade-right") En el PDF Integración entre el modelo de datos y el modelo de procesos, se presentan conceptos clave, ejemplos y herramientas que explican cómo lograr esta conexión de forma efectiva. Esta integración asegura que los procesos accedan a datos fiables y actualizados, lo que se traduce en una mayor automatización, consistencia operativa y calidad en la toma de decisiones.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_11.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Integración entre el modelo de datos y el modelo de procesos.
      
            .col-lg-4.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema6/14.png', alt='')
      
      #t_3_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.5] Errores comunes en el modelado de datos y procesos
      
      p.mb-5 El modelado de datos y procesos, es una parte crucial en el diseño de sistemas, pero es común cometer ciertos errores que pueden afectar la eficacia y la precisión del sistema en desarrollo (García Mireles, 2006). Estos errores pueden surgir tanto en la representación de los datos como en la estructura de los procesos, comprometiendo la calidad y el rendimiento del sistema. A continuación, se presentan algunos de los errores más frecuentes:
  
      .row.align-items-start.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema6/15.png", alt="").mb-4.mb-lg-0
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="Falta de coherencia entre datos y procesos")
              p Uno de los errores más comunes es la falta de alineación entre el modelo de datos y el modelo de procesos. Si los procesos no están diseñados para interactuar adecuadamente con los datos, puede generar inconsistencias o ineficiencias. Por ejemplo, un proceso de ventas podría no actualizar correctamente los niveles de inventario si los datos no están bien estructurados o no se han considerado los cambios en tiempo real.
      
            .div(titulo="Sobrecarga de información en el modelo de datos")
              p Normalmente, se tiende a incluir demasiados detalles o datos innecesarios en el modelo de datos, lo que puede complicar el sistema. Incluir campos que no se utilizan o que no son necesarios para el proceso puede dificultar la comprensión y el mantenimiento del modelo. Es crucial centrarse solo en los datos relevantes para el sistema.
      
            .div(titulo="Diseño pobre de relaciones entre entidades")
              p Un error frecuente en el modelado de datos es no definir correctamente las relaciones entre las entidades. Por ejemplo, no establecer correctamente las claves foráneas o las relaciones de uno a muchos puede llevar a la redundancia de datos o a la inconsistencia. La ausencia de una correcta normalización también puede afectar la eficiencia y la calidad del sistema.
      
            .div(titulo="Ignorar las necesidades del usuario en el modelado de procesos")
              p En el diseño de procesos, es esencial tener en cuenta las necesidades del usuario final. Si los procesos son demasiado complejos o no están diseñados de acuerdo con las expectativas de los usuarios, esto puede generar errores en la ejecución y frustración en el uso del sistema. Los procesos deben ser claros, eficientes y orientados a la experiencia del usuario.
      
      .row.align-items-start.mb-5
        .col-lg-4.mb-3.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/tema6/16.png", alt="").mb-4.mb-lg-0
        .col-lg-8.order-lg-1
      
          AcordionA(tipo="b")
            .div(titulo="Falta de documentación adecuada")
              p La documentación es clave para asegurar que tanto los modelos de datos como los de procesos sean comprendidos y puedan ser mantenidos a lo largo del tiempo (Quintero, 2006). La ausencia de una adecuada documentación puede llevar a malentendidos o a la implementación incorrecta de los modelos, lo que puede generar errores operativos y dificultar las futuras modificaciones o expansiones del sistema.
      
            .div(titulo="No considerar el rendimiento del sistema")
              p Al diseñar modelos de datos y procesos, es crucial considerar el rendimiento del sistema. La sobrecarga de procesos o la estructura ineficiente de datos pueden afectar la velocidad y la capacidad de respuesta del sistema. Por ejemplo, un modelo de datos excesivamente complejo puede ralentizar las consultas a la base de datos, afectando negativamente la experiencia del usuario.
      
            .div(titulo="No realizar pruebas y validaciones")
              p Otro error frecuente es la falta de pruebas adecuadas para los modelos de datos y procesos antes de su implementación. Sin pruebas exhaustivas, es difícil identificar errores y corregirlos a tiempo. Es fundamental validar que tanto los datos como los procesos funcionan correctamente en diferentes escenarios (Quintero, 2006).
          
      #t_3_6.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.6] Aplicaciones prácticas del modelado
      
      p.mb-5 El modelado de sistemas constituye una herramienta clave para estructurar, analizar y comunicar de forma efectiva los componentes y procesos de un sistema de información.
  
      .bg-full-width.bg-color-8.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.text-white
              h2.mb-4(data-aos="flip-up") Aplicaciones prácticas del modelado
              p.mb-4(data-aos="fade-right") En el PDF <b>Aplicaciones prácticas del modelado</b>, se presentan diversos ejemplos que ilustran cómo esta técnica puede ser utilizada en contextos reales, desde el diseño de sistemas y bases de datos hasta la documentación técnica y la optimización de procesos empresariales. Esta aproximación práctica permite comprender el valor estratégico del modelado para mejorar la calidad del <em>Software</em>, facilitar la comunicación entre equipos y garantizar la eficiencia en el desarrollo y mantenimiento de soluciones tecnológicas.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_12.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Aplicaciones prácticas del modelado.
      
            .col-lg-4.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema6/17.png', alt='')
  


      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/57635 " target="_blank" rel="noopener noreferrer") Conesa Caralt, J. & Casas Roma, J. (2014). Diseño conceptual de bases de datos en UML: ( ed.). Editorial UOC. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=pPATLxijDfw " target="_blank" rel="noopener noreferrer") Prieto, A. [@AlbertoPrietoEspinosaUGR] (2014, 16 de noviembre). L6 1 Nociones y modelos de bases de datos. [Video]. YouTube. 
  
  
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema7',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'ANÁLISIS Y DISEÑO DE SOFTWARE',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes diagramas UML es utilizado para representar la interacción entre los objetos a lo largo del tiempo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Diagrama de clases', esCorrecta: false },
              { id: 'b', texto: 'Diagrama de actividad', esCorrecta: false },
              { id: 'c', texto: 'Diagrama de secuencia', esCorrecta: true },
              { id: 'd', texto: 'Diagrama de casos de uso', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'En un diagrama de casos de uso, ¿qué representa un "actor"?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Un sistema externo que interactúa con el sistema modelado',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Un objeto que almacena los datos del sistema',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Una tarea específica realizada por el sistema',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Un proceso dentro del sistema',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué tipo de diagrama en UML se utiliza para describir las entidades y las relaciones entre ellas en un sistema?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Diagrama de clases', esCorrecta: true },
              { id: 'b', texto: 'Diagrama de casos de uso', esCorrecta: false },
              { id: 'c', texto: 'Diagrama de actividad', esCorrecta: false },
              {
                id: 'd',
                texto: 'Diagrama de entidad-relación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué elemento de un caso de uso describe las funcionalidades que un sistema debe ofrecer desde el punto de vista del usuario?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Actor', esCorrecta: false },
              { id: 'b', texto: 'Sistema', esCorrecta: false },
              { id: 'c', texto: 'Caso de uso', esCorrecta: true },
              { id: 'd', texto: 'Diagrama de clases', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'En el modelado de procesos, ¿qué diagrama se utiliza para mostrar el flujo de actividades dentro de un sistema?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Diagrama de secuencia', esCorrecta: false },
              { id: 'b', texto: 'Diagrama de clases', esCorrecta: false },
              { id: 'c', texto: 'Diagrama de actividad', esCorrecta: true },
              { id: 'd', texto: 'Diagrama de componentes', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
