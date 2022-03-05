<template>
  <div>
  <slot :validate='validate' :rules='rules' :value='value' ></slot>
  {{ errMsg }}
  </div>
</template>

<script>
  export default{
    props:{
      propName:['rules','value'],
    },
    data(){
      return{
        errMsg:'',
      }
    },
    methods:{
      validate(){
        const validateStatus = this.rules.reduce((pre,cur)=>{
          const check = cur && cur.test && cur.test(this.value)
          this.errMsg = check ? '' : cur.message
          return pre && check
        },true)
        return validateStatus
      }
    }
  }
</script>

<style>
</style>
