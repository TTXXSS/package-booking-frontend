<template>
  <div id="app">
    <Button></Button>
    <Table></Table>
    <Form></Form>
  </div>
</template>
<script>
import Table from './components/Table.vue'
import Button from './components/Button.vue'
import Form from './components/Form.vue'
const axios = require('axios');


export default {
  name: 'app',
  data () {
  return {
       data:0
    }
  },
  components: {
    Table,
    Button,
    Form
  },
  mounted(){
  axios.get('http://localhost:8083/pack')
  .then(response=> {
     this.data=response.data
    // handle success
     this.$store.commit("updateData",response.data);
    console.log(this.$store.state.data);
  })
  .catch(function (error) {
    // handle error
    console.log('test');
  })
  .finally(function () {
    // always executed
  });
  },
  methods:{
   
    
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
