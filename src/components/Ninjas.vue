<template>
<div>
<ul>
    <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
      <h2>{{ninja.name}}</h2>
      <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
    </li>
</ul>
<button @click="deleteNinja">Delete Ninja</button>
</div>

</template>

<script>
export default {
  // props to render elements from root element
  // props:["ninjas"],
  props:{
    ninjas:{
      type: Array,
      required:true
    }
  },
  data() {
    return {
    
    }
  },
  methods:{
    deleteNinja:function(){
      this.ninjas.pop();
    }
  },
  beforeCreate(){
    alert("beforeCreate");
  },
  created(){
    alert("created")
  },
  beforeMount(){
    alert("beforeMount")
  },
  mounted(){
    alert("mounted")
  },
  beforeUpdate(){
    alert("beforeUpdated")
  },
  updated(){
    alert("Updated")
  }
}
</script>

<style>

</style>
