<template>
  <div class="switch-wrap">
    <el-radio-group v-model="switchrole">
      <el-radio-button label="editor" />
      <el-radio-button label="admin" />
    </el-radio-group>
    <span>按钮级权限：</span>
    <el-button type="button" v-if="checkPermission(['admin'])">admin</el-button>
    <el-button type="button" v-if="checkPermission(['editor'])">editor</el-button>
  </div>
</template>

<script>
import checkPermission from '@/utils/permission' // 权限判断函数

export default {
  methods:{
    checkPermission
  },
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchrole: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.$emit('change')
        })
      }
    }
  }
}
</script>

<style type="text/css">
  .switch-wrap{
    /* float: left; */
  }
</style>
