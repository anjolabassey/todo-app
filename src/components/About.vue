<template>
  <div class="hello">
    <div class="heading">
      <h1>{{ msg }}</h1>
      <form>
      <input type="text" v-model="name">
      <button type="submit" @click="aboutMe">Enter Name</button>

      </form>    
    </div>
    
    
    <p> {{ display }}</p>
    
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: 'About',
      name: '',
      display: ''
    
    };
  },
  methods: {
    aboutMe() {
         this.$router.push('/about/' + this.name);
      let result = this.name + " is awesome";
      
      this.display = result;
      this.name = "";
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 500px;
  margin: 0 auto;
}
.heading {
  height: 100px;
  background-color: lightsalmon;
  color: white;
  padding: 10px;
  text-align: center;
}

h1 {
  font-weight: bold;
}
p {
    font-weight: bold;
    font-size: 30px;
    text-align: center;

}


</style>
