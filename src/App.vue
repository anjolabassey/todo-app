<template>

  <div id="app">
    <div id="nav">
      <router-link class="but" :to="'Todo2'">Home</router-link>
    
    <router-link class="but" :to="'About'"> About</router-link>
    </div>
    

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  margin: 20px 500px;
}
.but {
  background-color: tomato;
  padding: 10px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  
}
</style>
