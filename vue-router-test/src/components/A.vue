<template>
  <div>
    Component A
    <button @click="addRoute">AddRoute</button>
    <router-link to="/hello-world">to Component HelloWorld</router-link>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default{
  methods:{
    addRoute(){
      this.$router.addRoutes([
            {path: '/hello-world',component:HelloWorld}
            ]
      )
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeRouteEnter(to,from,next){
    //不能获取组件实例 this
    console.log('beforeRouteEnter', to,from)
    next()
  },
  beforeRouteUpdate(to,from,next){
    console.log('beforeRouteUpdate',to,from)
    next()
  },
  beforeRouteLeave(to,from,next){
    console.log('beforeRouteLeave',to,from)
    next()
  }

}
</script>