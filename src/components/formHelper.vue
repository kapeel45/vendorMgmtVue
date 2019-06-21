<template>
  <div>
      <slot name = "title"></slot>
      <h1>Kapil</h1>
      <slot name = "text"></slot>
  </div>
</template>

<script>

export default {
data() {
    return{

    }  
  }
}
</script>
<style >
    body{
        margin: 0;
        font-family: 'Courier New', Courier, monospace
    }

</style>