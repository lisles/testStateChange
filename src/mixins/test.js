import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'testFromState'
    ])
  },

  methods: {
    ...mapMutations([
      'UPDATE_TEST_STATE']),

    testFunc: function () {
      // just returns the state value 
      return this.test
    },

    updateState: function () {
      this.UPDATE_TEST_STATE('state changed from the comp!');
    }
  }
}