<template>
  <div id="app">
    <nav class="container nav-main">
      <ul class="d-flex justify-content-center">
        <li>
          <router-link to="/">Cadastro</router-link>
        </li>
        <li>
          <router-link to="/paises">Países</router-link>
        </li>
      </ul>
    </nav>
     
     
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>

nav ul{
  list-style: none;
  padding: 0;
}

.nav-main{
  
  li{
    margin: 0 10px;
    &:first-child{
      padding-right: 20px;
      border-right: 1px solid rgba(255,255,255,.4); 
    }
    a{
      color: #fff;
    }
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
