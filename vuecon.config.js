

module.exports = {
    // vue component struct
  base: {
        // style types: css, scss, sass, stylus
    style: 'css',

    scoped: false,

    props: false,

    computed: false,

    methods: false,

    watch: false,

    beforeCreate: false,

    created: false,

    beforeMount: false,

    mounted: false,

    beforeUpdate: false,

    updated: false,

    beforeDestroy: false,

    destroyed: false,
  },

  vue: {
    'vuex': true,
    'vue-router': true,
  },

  use: {
    element: true,
    jquery: false,
  },
};
