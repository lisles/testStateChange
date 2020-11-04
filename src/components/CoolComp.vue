<template>
<div>
  <br/><br/>
  <!-- when we click this button, it changes the state -->
  <button v-on:click="btnClick()">Change The Text</button>
</div>  
</template>

<script>
import test from '@/mixins/test'

export default {
  mixins: [test],
  methods: {
    // run the mixin test, it updates state
    btnClick: function () {
      this.updateState();
    }
  }
}
</script>