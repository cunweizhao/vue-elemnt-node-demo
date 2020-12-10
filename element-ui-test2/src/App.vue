<template>
  <div id="app">
    <el-form
            style="width:500px"
            :inline="false"
            :model="data"
            :rules="rules"
             ref="form"
            validate-on-rule-change
            status-icon
            label-width="100px"
            label-position="top"
            label-suffix=":"
            disabled
    >
      <el-form-item
              label="审批人"
                prop="user"
                :validate-status="status"
              :error="error"
      >
        <el-input v-model="data.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="data.region" placeholder="活动区域" style="width:100%">
          <el-option label="区域一" value="shanhai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="addRule">添加校验规则</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    const userValidator =(rule,value,callback) =>{
      if(value.length>3){
        callback()
      }else{
        callback(new Error('用户名长度必须大于3'))
      }
    }
    return{
      error:'这是一个自定义错误',
      status:'error',
      data:{
        user:'zcw',
        region:'区域二'
      },
      rules:{
        user:[
          //{required: true, trigger:'change',message:'用户名必须录入'},
          {required: true, trigger:'blur',message:'用户名必须录入'},
          //{validator: userValidator, trigger:'change'}
        ]
      }
    }
  },
  methods:{
    onSubmit(){
      console.log(this.data)
      //去空判断
      // if(!this.data.user){
      //   this.$message.error('不能为空')
      // }else if(this.data.user.length>10){
      //   this.$message.error("不能太长")
      // }
      this.$refs.form.validate((isValid,errors)=>{
        console.log(isValid,errors)
      })
    },
    addRule(){
      const userValidator = (rule,value,callback) =>{
        if(value.length>3){
          callback()
        }else{
          callback(new Error('用户名长度必须大于3'))
        }
      }
      const newRule =[
              ...this.rules.user,
        {validator:userValidator,trigger:'change'}
      ]
      this.rules = Object.assign({},this.rules,{user:newRule})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
