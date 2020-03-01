<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">OElem</b-navbar-brand>

         <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-button size="sm" class="my-2 my-sm-0 mr-3" type="submit">Settings</b-button>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Help</b-button>

            </b-nav-form>
        
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

<b-container class="bv-example-row">
  
  <div class="container">
    <div class="row">
        <div class=" col-5 mx-auto my-2 my-sm-3 my-lg-4 p-3 " style="height: 100px;">Old English Lemmatizer</div>
        
    </div>
</div>
  
  

<div>
  <b-navbar type="light" variant="light" class=" mx-auto my-2 my-sm-3 my-lg-4 p-3 ">
    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Add your corpus here"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Upload</b-button>
    </b-nav-form>
    <b-nav-form>
      <b-form-input class="pl-sm-10" placeholder="Enter your word"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar>
</div>

<div class="container">
 <div class=" col-10 mx-auto my-2 my-sm-3 my-lg-4 p-3 " style="height: 100px;"> 
<div>
  <b-tabs content-class="mt-3" align="center">
    <b-tab title="Lemmatization" active>
      <p>
        <template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>


        </p></b-tab>
    <b-tab title="Stemming"><p>I'm the second tab</p></b-tab>
    <b-tab title="POS tagging"><p>I'm a disabled tab!</p></b-tab>    
    <b-tab title="Word list"><p>I'm a disabled tab!</p></b-tab>

  </b-tabs>
</div>
   </div>
</div>


  <b-row>
    <b-col>

      <b-card no-body header="Card with flush list group">
    <b-list-group flush>
      <b-list-group-item href="#">Cras justo odio</b-list-group-item>
      <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
    </b-list-group>

    <b-card-body>
      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
    </b-card-body>
  </b-card>
</b-card-group>

    </b-col>
    <b-col>
     <b-card no-body header="Card with flush list group">
    <b-list-group flush>
      <b-list-group-item href="#">Cras justo odio</b-list-group-item>
      <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
    </b-list-group>

    <b-card-body>
      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
    </b-card-body>
  </b-card>
</b-card-group> 
       </b-col>


    <b-col>

<b-card no-body header="Card with flush list group">
    <b-list-group flush>
      <b-list-group-item href="#">Cras justo odio</b-list-group-item>
      <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
    </b-list-group>

    <b-card-body>
      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
    </b-card-body>
  </b-card>
</b-card-group>

    </b-col>
  </b-row>
</b-container>

    

  

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
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
</style>
