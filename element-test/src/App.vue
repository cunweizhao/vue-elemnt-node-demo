<template>
  <div id="app">
  <el-button @click="show">按钮</el-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    show(){
      this.$message.success('element-ui提示')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
