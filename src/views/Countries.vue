<template>
    <div id="main-absolute">
        <section class="section-hero section-shaped my-0 d-flex flex-column justify-content-center">
            <div class="shape shape-style-1 shape-primary">
            </div>
             <div class="container text-center">
                <HelloWorld 
                title="Curiosidades sobre alguns países pelo mundo!" 
                msg="Vamos descobrir juntos algumas informações sobre qualquer país do planeta."/>
                <a class="mt-4 btn btn-pill btn-start text-uppercase" href="#sec-countries">Vamos começar</a>
            </div>
           
        </section>


        <section id="sec-countries" ref="sec-countries" class="pt-5">
            <CountriesInfo/>
        </section>

       
        
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import CountriesInfo from '@/components/CountriesInfo'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    CountriesInfo
  },
  data() {
      return {
        // mainProps: { src:logo }
      }
    },
    methods: {
          scrollAnimate(refName) {
            const element = this.$ref[refName];
            element.scrollIntoView();
        },
      },
}
</script>


<style lang="scss" scoped>

    #main-absolute{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 0;
    }

    .section-hero {
        height: auto;
        padding: 10rem 0 5rem 0;
        background: linear-gradient(150deg,#23B380 15%,#01819A 70%,#005391 94%);
       
    }

    .btn-start{
        background: #00DD9B!important;
        border-color: #00DD9B!important;
        color: #3F5468!important;
        padding: 10px 18px;
        font-weight: 600;

        &:hover,&:focus{
            background: #00CC8E;
        }
    }

    

    @media all and (max-width: 520px) {
        
    }
    
   
</style>