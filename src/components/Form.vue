<template>
<a-form
    :form=""
    :hideRequiredMark="false"
    @submit="handleSubmit"
  >
    <a-form-item
      label="订单号"
    >
      <a-input style="width:15%"/>
    </a-form-item>
    <a-form-item label="姓名">
      <a-input v-model="name" style="width:15%"
      />
    </a-form-item>
    <a-form-item
      label="电话号码"
    >
      <a-input v-model="telephone" style="width:15%"
      />
    </a-form-item>
    <a-form-item
     label="重量"
    >
      <a-input v-model="weight" style="width:15%"
      /><br>
       <a-button
        type="primary"
        html-type="submit"
      >
        提交
      </a-button>
    </a-form-item>
    
  </a-form>
</template>


<script>

const axios = require('axios');


export default {
  name: 'app',
  data () {
  return {
       data:0,
       name:'',
       telephone:'',
       weight:''
    }
  },
  components: {

  },
  methods:{
   handleSubmit:function(){
axios.post('http://localhost:8083', {
    name: this.name,
    telephone: this.telephone,
    state:"未取件",
    registerTime:"2019.7.26"

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
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
