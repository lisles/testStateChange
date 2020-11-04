<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>{{ testFromState }}</h2>

    <!-- this component displays a button and will update state and re-render the text-->
    <CoolComp />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import test from '@/mixins/test';
import CoolComp from '@/components/CoolComp'

export default {
  name: 'admin',
  mixins: [test],
  components: {CoolComp},

  // this watched state value and renders change in the template
  computed: {
    ...mapGetters([
      'testFromState'
    ]),

   },

}
</script>
