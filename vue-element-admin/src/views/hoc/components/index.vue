<template>
  <div>
  <HocCustomCom :value="value" :rules="rules"></HocCustomCom>
  </div>
</template>

<script>
  import HocFunc from "./custoninput/hoc.js"
  import Custoninput from "./custoninput/index.vue"
  const HocCustomCom = HocFunc(Custoninput)
  export default{
    data(){
      return{
        value:'',
        rules:[
          {
            test:function(value){
              return /\d+/.test(value)
            },
            message:'请输入一个数字'
          }
        ]
      }
    },
    components:{
      HocCustomCom
    }
  }
</script>

<style>
</style>
