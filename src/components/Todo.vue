<template>
  <div class="hello">
    <div class="heading">
      <h1>{{ msg }} <span id="count">({{ todoLeft }})</span></h1> 
      <form>
      <input id="new-item" type="text" v-model="item"><button id="submit" type="submit" @click="newName">&#10010; ADD</button>
      

      </form>

    
    </div>
    <div class="buttons">
      
      <button @click="clearAll" id="all" type="button">&#9940; Clear All</button>
      <button @click="clearCompleted" id="clear" type="button">&#10004; Clear Completed</button>
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
      todos: [],
      
    };
  },
  methods: {
    newName() {
      let added = document.getElementById("new-item").value;
      if (added.length < 1){
        alert("Please type something to do..");
        

      } else {
        this.todos.push({ task: this.item, isDone: false });
      }
      
      this.item = "";
    },
    nowDone(todo) {
      todo.isDone = !todo.isDone;
    },
    del(index) {
      this.todos.splice(index, 1);
    },
    undone(todo) {
      return todo.isDone === false;
    },
    clearCompleted() {
      this.todos = this.todos.filter(this.undone);
    },
    clearAll() {
      this.todos = [];
    }
  },
  computed: {
    todoLeft() {
      // return this.todos.length;
      return this.todos.filter(this.undone).length;
      
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 600px;
  margin: 0 auto;
}
.heading {
  height: 100px;
  padding: 10px;
  
}
button {
  border: none;
}
.buttons {
  height: 80px;
  
}
#count {
  font-weight: 300;
  color: lightgrey;
}
#clear {
  background-color: rgb(255, 226, 62);
  float: right;
  margin: 10px 0 10px 10px;
  padding: 10px;
  color: white;

}
#all {
  background-color: rgb(247, 58, 58);
  float: right;
  margin: 10px 0 10px 10px;
  padding: 10px;
  color: white;

}
input[type="text"] {
    width: 500px;
    height: 39px;
    
}
#submit {
  padding: 14px;
  background-color: rgb(25, 81, 233);
  color: white;
  
}
#close {
  float: right;
  
  color: white;
  background-color: rgb(247, 58, 58);
  padding: 5px;
  margin: 0;

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
  margin-bottom: 10px;
  border: 1px lightgrey solid;
  height: 40px;
  padding: 5px;
  cursor: pointer;
  color: black;
  font-size: 20px;
}

li:hover {
  background-color: rgb(194, 182, 182);
}
</style>
