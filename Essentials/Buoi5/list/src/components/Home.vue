<template>
    
    <div class="container">
      <div class="jumbotron text-center">
        <h1>Todo List</h1>
      </div>
      <div>
        <form class="nav-tabs-justified" id="app">
            <div class="d-flex">
                <input type="text" placeholder="What needs to be done" class="form-control" v-model="currentInput">
                <input type="submit" value="+" class="submit" v-on:click="addToArr">
            </div>
            <ul>    
                <li v-for="item in arr" :key='item.id' class="d-flex">
                    <div v-on:click="item.done = !item.done" class="col-10">
                        <input type="checkBox" :checked="true ? item.done : item.done == false">
                        <label v-bind:class="{completed: item.done}"> {{ item.text }}</label>
                    </div>
                    <div class="ml-auto">
                    <a href="#" v-on:click="edit(item)"><i class="fas fa-edit"></i></a>
                    <a href="#" v-on:click="removeFromArr(item)"><i class="fas fa-trash-alt icon"></i></a>
                    </div>
                </li>
            </ul>
            
        </form>
        </div>
    </div>

    

</template>
<script>

export default {
  name: 'Home',
  data() {
    return {
      currentInput: null,
        edited: false,
        arr: [
            {   
                id:0,
                text: 'Learn JavaScript',
                done: false
            },
            {
                id:1,
                done: false,
                text: 'Learn Vue' 
            },
            { 
                id:2,
                text: 'Build something awesome',
                done: false
            }
        ]
    }
    
  },
  methods: {
    addToArr() {
            if( this.currentInput !== null) {
                if (this.edited) {
                    this.id.text = this.currentInput
                    console.log(this.id.text)
                    console.log(this.currentInput);
                    this.edited = false
                    this.currentInput = null
                }
                else if (!this.arr.find(i => i.text === this.currentInput)) {
                    this.arr.push({
                        text: this.currentInput,
                        done: false,
                        
                    })

                    this.currentInput=null
                }
                
            }
            else alert("Please fill the input")
            
            
    },
    removeFromArr(item) {
            console.log(item);
            const index = this.arr.findIndex(i => i.text === item.text)
            if (index >=0) {
                this.arr.splice(item, 1)
            }
    },
    edit(item) {
            const index = this.arr.findIndex(i => i.text === item.text)
            if (index >=0) {
                this.currentInput = item.text
                this.id = item
                this.edited = !this.edited 
            }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    width: 800px !important 
}

li {
    list-style-type: none;
    margin: 15px;
    font-size: large;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

label {
  margin-left: 15px;
}

.submit {
    width: 5%;
    border-radius: 7px;
}
ul {
    padding-left: 0px;
}
</style>
