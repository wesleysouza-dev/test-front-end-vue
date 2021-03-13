<template>
    <div>
        <section class="section-hero section-shaped my-0">
            <div class="shape shape-style-1 shape-primary">
                <span class="span-150"></span>
                <span class="span-50"></span>
                <span class="span-50"></span>
                <span class="span-75"></span>
                <span class="span-100"></span>
                <span class="span-75"></span>
                <span class="span-50"></span>
                <span class="span-100"></span>
                <span class="span-50"></span>
                <span class="span-100"></span>
            </div>
             <div class="container">
                <img alt="Vue logo" src="@/assets/logo.png" class="logo-main">
                <HelloWorld msg="Bem vindo ao Teste de Front-end com Vue JS!"/>
            </div>
        </section>

       
        
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'


export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>


<style scoped>
    .section-hero {
        height: 100vh;
        min-height: 500px;
    }

    .section-shaped .shape-style-1.shape-primary {
        background: linear-gradient(150deg,#23B380 15%,#01819A 70%,#005391 94%);
    }

    .section-shaped .shape {
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
    }

    .section-shaped .shape-style-1 span{
        height:120px;width:120px;border-radius:50%; display: block; position: absolute;}.section-shaped .shape-style-1 .span-200    {height:200px;width:200px}.section-shaped .shape-style-1 .span-150{height:150px;width:150px}.section-shaped .shape-style-1 .span-100{height:100px;width:100px}.section-shaped .shape-style-1 .span-75{height:75px;width:75px}.section-shaped .shape-style-1 .span-50{height:50px;width:50px}.section-shaped .shape-style-1 :first-child{left:-4%;bottom:auto;background:hsla(0,0%,100%,.1)}.section-shaped .shape-style-1 :nth-child(2){right:4%;top:10%;background:hsla(0,0%,100%,.1)}.section-shaped .shape-style-1 :nth-child(3){top:280px;right:5.66666%;background:hsla(0,0%,100%,.3)}.section-shaped .shape-style-1 :nth-child(4){top:320px;right:7%;background:hsla(0,0%,100%,.15)}.section-shaped .shape-style-1 :nth-child(5){top:38%;left:1%;right:auto;background:hsla(0,0%,100%,.05)}.section-shaped .shape-style-1 :nth-child(6){width:200px;height:200px;top:44%;left:10%;right:auto;background:hsla(0,0%,100%,.15)}.section-shaped .shape-style-1 :nth-child(7){bottom:50%;right:36%;background:hsla(0,0%,100%,.04)}.section-shaped .shape-style-1 :nth-child(8){bottom:70px;right:2%;background:hsla(0,0%,100%,.2)}.section-shaped .shape-style-1 :nth-child(9){bottom:1%;right:2%;background:hsla(0,0%,100%,.1)}.section-shaped .shape-style-1 :nth-child(10){bottom:1%;left:1%;right:auto;background:hsla(0,0%,100%,.05)}@media (max-width:991.98px){.section-shaped .shape-style-1 span{height:120px}
    }

    .logo-main{
        max-width: 120px;
    }

    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
</style>