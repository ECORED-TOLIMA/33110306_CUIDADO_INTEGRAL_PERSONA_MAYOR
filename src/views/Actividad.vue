<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
    ActividadController(:cuestionario="cuestionario")

</template>

<script>
//- GENERADO por `scripts/gen_actividad.py` desde `33110306_CF01_AD.docx`.
//- No editar a mano: volver a correr el script si cambia el docx.
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuidado y valoración integral de la persona mayor',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos y prácticas fundamentales relacionados con el cuidado integral y la valoración de la persona mayor.',
      // el kit sólo muestra 10 de las 20: barajar es OBLIGATORIO
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      // `mensaje_final_*`, NO `mensaje_*`: es el nombre que lee
      // `actividadCuestionario/Actividad.vue` del kit (1.0.9). Con el nombre corto los dos
      // mensajes finales del docx no se pintan nunca y no salta ningún error.
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado: 'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué principio debe orientar el cuidado de la persona mayor?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Respetar su dignidad, autonomía y decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Realizar todas las actividades por ella.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Priorizar únicamente sus necesidades físicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar que participe en las actividades cotidianas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué se entiende por envejecimiento?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una enfermedad que aparece en todas las personas mayores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un proceso natural del ciclo vital que presenta características individuales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una condición que implica pérdida total de autonomía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una etapa caracterizada exclusivamente por cambios físicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué permite valorar el nivel de dependencia de una persona mayor?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente su edad cronológica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solamente las enfermedades que presenta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El grado de apoyo que requiere para realizar actividades de la vida cotidiana.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente su capacidad para desplazarse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es una responsabilidad del cuidador frente a una enfermedad de la persona mayor?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar los medicamentos cuando considere necesario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer un diagnóstico según los síntomas observados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suspender tratamientos cuando la persona manifieste mejoría.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar cambios, brindar apoyo e informar oportunamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál de las siguientes condiciones contribuye a disminuir el riesgo de caídas en el hogar?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener los espacios de circulación despejados y bien iluminados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Colocar objetos de uso frecuente en lugares elevados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener cables atravesados en las zonas de paso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar tapetes sueltos para mejorar la decoración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál es una medida fundamental de bioseguridad durante el cuidado?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar siempre los mismos elementos de protección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar higiene de manos antes y después del contacto con la persona.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar la limpieza de superficies para no alterar el ambiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar guantes como sustituto de la higiene de manos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué elemento de protección personal se utiliza principalmente cuando existe riesgo de contacto de los ojos con fluidos?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delantal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Protección ocular.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calzado cerrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es la característica principal del cuidado cefalocaudal?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Iniciar por los pies y terminar en la cabeza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar la higiene únicamente en las zonas de mayor suciedad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limpiar primero las zonas íntimas para evitar contaminación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Seguir una secuencia organizada desde la cabeza hacia los pies.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Por qué es importante realizar una adecuada higiene de manos?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para reemplazar el uso de todos los elementos de protección personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para reducir la transmisión de microorganismos durante el cuidado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para evitar únicamente la contaminación de los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para eliminar la necesidad de limpiar las superficies.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué acción favorece el autocuidado de la persona mayor?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar todas sus actividades aunque pueda hacerlas por sí misma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar que tome decisiones para prevenir posibles errores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permitir que participe en las actividades que puede realizar de manera segura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limitar sus actividades para disminuir cualquier esfuerzo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál de las siguientes características corresponde a una alimentación balanceada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consumir siempre los mismos alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar todos los alimentos que contienen grasas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Priorizar únicamente los alimentos ricos en proteínas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incluir variedad y cantidades adecuadas de diferentes grupos de alimentos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál puede ser un signo de posible deficiencia nutricional en una persona mayor?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pérdida de peso no intencional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumento constante de la fuerza muscular.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mayor facilidad para realizar las actividades cotidianas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incremento sostenido del apetito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué función cumplen las fórmulas nutricionales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir cualquier alimento sin necesidad de valoración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar permanentemente una alimentación adecuada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permitir que el cuidador determine libremente la cantidad que debe consumir.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aportar energía y nutrientes cuando su uso ha sido indicado según las necesidades de la persona.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál de las siguientes es una técnica básica de preparación de alimentos que puede facilitar una alimentación adecuada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cocción al vapor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fritura excesiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Quemado directo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exposición prolongada al calor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'Durante la asistencia en la alimentación, ¿qué debe hacer el cuidador cuando la persona mayor puede realizar parte de la actividad por sí misma?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar toda la alimentación para ahorrar tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Retirar los utensilios para evitar accidentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alimentarla sin permitirle participar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Favorecer su participación y brindar únicamente el apoyo que necesita.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'Una persona mayor presenta dificultad para deglutir durante la alimentación. ¿Cuál es una medida adecuada?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar rápidamente la cantidad de alimento ofrecida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dar líquidos de manera continua para facilitar la deglución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener una posición segura y respetar el ritmo de alimentación establecido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modificar por cuenta propia la consistencia de todos los alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué debe hacer el cuidador si durante la alimentación identifica tos persistente o dificultad evidente para deglutir?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Detener la actividad y comunicar la situación de acuerdo con los protocolos establecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Continuar ofreciendo alimentos hasta terminar la porción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar por cuenta propia la consistencia de los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar la situación si la persona desea continuar comiendo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué adaptación puede favorecer la seguridad de una persona mayor con movilidad reducida?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Colocar los objetos de uso frecuente en lugares altos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener los elementos de uso frecuente al alcance y despejar las zonas de circulación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ubicar muebles adicionales en los espacios de paso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener los cables eléctricos en las zonas de circulación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Cuál de las siguientes acciones contribuye al bienestar integral de la persona mayor?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar su interacción con otras personas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Concentrar el cuidado únicamente en la higiene.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Promover el respeto, la participación, la comunicación y actividades significativas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar que tome decisiones sobre sus actividades cotidianas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Cuál es el propósito principal del cuidado integral de la persona mayor?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar todas las actividades en su lugar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Concentrarse exclusivamente en la prevención de enfermedades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir al mínimo su participación en las actividades cotidianas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Favorecer su seguridad, bienestar, autonomía y calidad de vida mediante un cuidado centrado en sus necesidades y capacidades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Excelente trabajo! Se evidencia un buen dominio de los fundamentos del cuidado integral y la valoración de la persona mayor.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
