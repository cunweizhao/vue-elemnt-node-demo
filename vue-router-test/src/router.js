import Vue from 'vue'
import Route from 'vue-router'
import HelloWorld from './components/HelloWorld'
import A from './components/A'

Vue.use(Route)
const routes = [
    //配置路由，浏览器访问路径
    {path:'/a', component: A, meta:{title: 'A'}},
    {path: '/hello-world', component:HelloWorld, meta:{title:'HelloWorld'}}
]
const router =new Route({
    routes
})
Vue.mixin({
    beforeCreate(){
        if(this.$router.meta.title){
            document.title = this.$route.meta.title
        }else{
            document.title='zcw'
        }
    }
})
router.beforeEach((to, from, next) =>{
    console.log('beforeEach',to,from)

    next()
})
router.beforeResolve((to,from,next) =>{
    console.log('beforeResolve',to,from)
    next()
})
router.afterEach((to,from)=>{
    console.log('afterEach',to,from)
})
export default router