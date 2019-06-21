<template>
<header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
</header>
</template>

<script>
import {bus} from '../main';

export default {
  props:{
    title:{
      type: String,
      required:true
    }
  },
  data () {
    return {
      title:'Vue Js Tuts'
    }
  },
  methods:{
    changeTitle:function(){
      //this.title = "Vue Tuts"
      //emit one use is when change in primitive data reflect everywhere 
      //this.$emit('changeTitle','Vue Wizards')
      //event bus
      this.title = 'Vue Wizards'
      bus.$emit('titleChanged','Vue Wizards')
    }
  }
}
</script>

<style>
header{
  background: lightgreen;
  padding: 10px
}
h1{
  color: #222;
  text-align: center
}
</style>
