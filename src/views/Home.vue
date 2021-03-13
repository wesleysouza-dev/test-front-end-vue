<template>
    <div>
        <section class="section-hero section-shaped my-0 d-flex flex-column justify-content-center">
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
             <div class="container text-center box-welcome">
                <div class="thumb-circle d-flex align-items-center justify-content-center mx-auto mb-5">
                     <b-img :src="require('@/assets/logo.png')" class="logo-main" alt="Vue JS"></b-img>
                </div>
               
                <HelloWorld title="Bem vindo ao Teste de Front-end com Vue JS!" msg="Vamos começar a cadastrar um usuário maroto para iniciar nossos testes?"/>

                <b-button pill  class="mt-4 btn-start text-uppercase">Vamos começar</b-button>
            </div>
           
        </section>


        <section id="sec-add-user">
            <AddUser title="Informações do Usuário" msg="Preencha todos os campos corretamente para que o cadastro seja realizado."/>
        </section>

       
        
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import AddUser from '@/components/AddUser'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    AddUser
  },
  data() {
      return {
        // mainProps: { src:logo }
      }
    }
}
</script>


<style lang="scss" scoped>

    .box-welcome{
        margin-top: -100px;
    }

    .section-hero {
        /* height: 100vh; */
        min-height: 100vh;
        padding: 5rem 0;
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
        max-width: 100%;
        height: auto;
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

    /* .thumb-circle{
        width: 240px;
        height: 240px;
        background: #fff;
        border-radius: 50%;
        padding: 3rem;
    } */

    @media all and (max-width: 520px) {
        .logo-main{
            max-width: 80%;
        }
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