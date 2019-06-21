<template>
   <div id="app">
    <!-- <h1>{{ msg }}</h1> 
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer> -->
    <!-- <form-helper>
      <h1 slot="title">How are you slots</h1>
      <p slot = "text">i m great to have you</p>
    </form-helper> -->
     <!-- <add-blog></add-blog> -->
     <router-view></router-view>
  </div> 
  
</template>

<script>
import addBlog from './components/addBlog.vue'
import formHelper from './components/formHelper.vue';
//locally registering component
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  components: {
    //'add-blog':addBlog,
    //'app-header':Header,
    //'app-footer':Footer,
    //'app-ninjas':Ninjas,
    //'form-helper':formHelper
  },
  name: 'app',
  data () {
    return {
//Primitive types are String, boolean and numbers
//Refernce types are Array and Object
      title:'Vue Ninja',
      msg: 'Welcome to Your Vue.js App',
      ninjas: [
      {name:'kapil', speciality:'Vue Components',show:false},
      {name:'rahul', speciality:'HTML',show:false},
      {name:'pratu', speciality:'CSS',show:false},
      {name:'akhila', speciality:'Testing',show:false},
      {name:'surendra', speciality:'Java',show:false},
      {name:'kausha', speciality:'Python',show:false}]
    }
  },
  methods:{
    updateTitle:function(anyvalue){
      this.title = anyvalue;
    }
  }
}
</script>

<style>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

</style>
