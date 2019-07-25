<template>
  <div id="app">
     <a-button @click="handleAll">All</a-button>
     <a-button @click="handleHavingRegister">已预约</a-button>
     <a-button @click="handleHavingFetch">已取件</a-button>
     <a-button @click="handleHavingNotRegister">未预约</a-button>
  </div>
</template>
<script>
const axios = require('axios');

export default {
  name: 'Button',
  data () {
  return {
       data:[]
    }
  },
  components: {
  },
  methods:{
      handleAll(){
         // Make a request for a user with a given ID
        
axios.get('http://localhost:8083/pack')
  .then(response=> {
     this.data=response.data
    // handle success
     this.$store.commit("updateData",response.data);
    console.log(response.data[0]);
  })
  .catch(function (error) {
    // handle error
    console.log('test');
  })
  .finally(function () {
    // always executed
  });


      },
     handleHavingRegister(){
            axios.get('http://localhost:8083/pack/11/2')
  .then(response=> {

   this.$store.commit("updateData",response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

      },
     handleHavingFetch(){
            axios.get('http://localhost:8083/pack/1')
  .then(response=> {
 
   this.$store.commit("updateData",response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
      },
    handleHavingNotRegister(){
          axios.get('http://localhost:8083/pack/22/1')
  .then(response=> {
   
    // handle success
     this.$store.commit("updateData",response.data);
   
  })
  .catch(function (error) {
    // handle error
    console.log('test');
  })
  .finally(function () {
    // always executed
  });
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
