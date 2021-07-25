<template>
  <div id="app">
    <iframe :src="src" allowfullscreen='true'>></iframe>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      src: "",
      name: "",
    };
  },
  mounted: function() {
    this.src = 'https://snapdrop.net';
    this.name = 'Snapdrop';
    document.title = this.name;
  },
  methods: {
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

iframe {
  min-width: 100vw;
  min-height: 100vh;
  border: 0;
}

body {
  margin: 0;
}
</style>
