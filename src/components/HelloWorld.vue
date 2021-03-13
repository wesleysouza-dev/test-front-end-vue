<template>
  <div class="hello-header">
    <h1>{{ msg }}</h1>
    <p>
      Vamos começar a cadastrar um usuário maroto para iniciar nossos testes? Sibora lá (:
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello-header{
  color: #fff;
}

a {
  color: #fff;
}
</style>
