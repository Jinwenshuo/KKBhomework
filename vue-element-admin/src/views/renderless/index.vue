<template>
  <s-validate #default='{validate}' :rules='rules' :value='value'>
    <el-input v-model='value' @blur='validate'> </el-input>
  </s-validate>
</template>

<script>
  import SValidate from './svalldate.vue'
  export default{
    components:{
      SValidate
    },
    data(){
      return{
        value:'',
        rules:[
          {
            test: function(value){
              return /\d+/.test(value)
            },
            message:'请输入数字'
          }
        ]
      }
    }
  }
</script>

<style>
</style>
