<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="#">OElem</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button size="sm" class="my-2 my-sm-0 mr-3" type="submit">Settings</b-button>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Help</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>

    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
h1 {color: gray}
</style>
