<template>
  <div id="app">
 <a-table :columns="columns" :rowKey="getRowkey" :dataSource="this.$store.state.data">
    <span slot="customTitle">
      <a-icon type="smile-o" />
      <a-button>确认收货</a-button>
    </span>
  </a-table>
  </div>
</template>


<script>
const columns = [
  { 
    title:"id",
    dataIndex: "id"
  },
  {
    title: "收件人",
    dataIndex: "name"
  },
  {
    title: "电话",
    dataIndex: "telephone",
  },
  {
    title: "状态",
    dataIndex: "state",
  },
  {
    title: "预约时间",
    dataIndex: "registerTime"

  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export default {
  data() {
    return {
      data,
      columns,
      getRowkey: function(item) {
        return item.id;
      }
    };
  },
  methods: {
    test: function() {}
  }
};
</script>
<style lang="scss">
#table {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
