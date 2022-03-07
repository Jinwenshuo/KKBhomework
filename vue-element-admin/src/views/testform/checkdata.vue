<template>
  <div>
    <slot :validate="validate" />
    <el-link type="danger">{{ errMsg }}</el-link>
  </div>
</template>

<script>
export default {
  props: ['value', 'rules'],
  data() {
    return {
      errMsg: ''
    }
  },
  methods: {
    validate() {
      const validateStatus = this.rules.reduce((pre, cur) => {
        const check = cur && cur.test && cur.test(this.value)
        this.errMsg = check ? '' : cur.message
        return pre && check
      }, true)
      return validateStatus
    }
  }
}
</script>
