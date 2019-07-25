<template>
  <div id="app">
     <a-button @click="handleAll">All</a-button>
     <a-button>已预约</a-button>
     <a-button>已取件</a-button>
     <a-button>未预约</a-button>
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
          
      },
     handleHavingFetch(){
          
      },
    handleHavingNotRegister(){
          
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
