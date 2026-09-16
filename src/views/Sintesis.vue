<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p(data-aos="fade-down") El componente formativo aborda los aspectos fundamentales para el cuidado integral de la persona mayor, incluyendo el marco normativo y los derechos, el proceso de envejecimiento, la valoración del nivel de dependencia, el reconocimiento de enfermedades frecuentes y contagiosas, la prevención de riesgos y la adecuación de ambientes seguros. Asimismo, desarrolla medidas de bioseguridad, higiene y cuidado cefalocaudal, promoción del autocuidado y bienestar, nutrición, preparación de alimentos y asistencia durante la alimentación, con el propósito de fortalecer conocimientos y habilidades para brindar un cuidado seguro, humanizado y centrado en las capacidades, necesidades, autonomía y dignidad de la persona mayor.

    p.mt-4.mb-0(data-aos="fade-down") A continuación, se presenta el mapa conceptual que organiza los ejes temáticos y las relaciones que los articulan:

    //- El mapa se exporta del artboard «Síntesis – PDF» (1228x925 en 186,430): mide justo el
    //- ancho útil de la tarjeta, así que va al 100 % sin columna que lo estreche.
    figure.mt-4(data-aos="fade-up")
      img(src="@/assets/curso/sintesis.svg" alt="Mapa conceptual del componente formativo «Cuidado y valoración integral de la persona mayor», que se despliega en once ejes: marco normativo, envejecimiento y ciclo vital, valoración del nivel de dependencia, estados de conciencia y enfermedades, ambientes seguros para el cuidado, bioseguridad, higiene y cuidado cefalocaudal, lavado de manos, autocuidado y bienestar, y nutrición y asistencia en la alimentación. Cada eje se desglosa en los subtemas que lo componen, de modo que el recorrido va del marco de derechos a las prácticas concretas de cuidado.").w-100

    .row.justify-content-center.mt-5
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
