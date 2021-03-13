<template>
  <div class="hello-header">
    <h1>{{ title }}</h1>
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
    msg: String,
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

@media all and (max-width: 520px) {
  h1{
    font-size: 8vw;
  }
}
</style>
