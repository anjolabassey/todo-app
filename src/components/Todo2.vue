<template>
  <div class="hello">
    <div class="heading">
      <h1>{{ msg }}</h1>
      <form>
      <input type="text" v-model="item">
      <button type="submit" @click="newName">ADD ITEM</button>

      </form>

    
    </div>
    
    <ul>
      <li  @click="nowDone(todo)" v-for="(todo, index) in todos" :key ="todo.task" :class="{'is-done': todo.isDone}"> 
        {{todo.task}} 
      <span id="close" @click="del(index)" >&#10006;</span> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      msg: "TODO",
      item: "",
      todos: []
    };
  },
  methods: {
    newName() {
      this.todos.push({ task: this.item, isDone: false });
      this.item = "";
    },
    nowDone(todo) {
      todo.isDone = !todo.isDone;
    },
    del(index) {
      this.todos.splice(index, 1);
    }
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

#close {
  float: right;
  height: inherit;
}
#close:hover {
  color: red;
}
.is-done {
  text-decoration: line-through;
}
h1 {
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  /* display: inline-block; */
  margin: 0;
  height: 30px;
  padding: 10px;
  cursor: pointer;
  background-color: rgb(194, 182, 182);
  color: black;
  font-size: 20px;
}
li:nth-child(even) {
  background-color: lightgrey;
}
li:hover {
  background-color: gainsboro;
}
</style>
