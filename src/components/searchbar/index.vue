<template>
  <div class="searchbar_wrap" >
    <el-input placeholder="昵称" >
        <template slot="prepend">昵称</template>
    </el-input>


    <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

    <el-input placeholder="职位" >
        <template slot="prepend">职位</template>
    </el-input>

    <div class="jin-time-select">
      <el-time-select
        placeholder="起"
        v-model="startTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }">
      </el-time-select>
      <el-time-select
        placeholder="止"
        v-model="endTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
          minTime: startTime
        }">
      </el-time-select>
    </div>

    <el-input placeholder="手机号" >
        <template slot="prepend">手机号</template>
    </el-input>

    <div class="bt_group">
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="info" icon="el-icon-sort">重置</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '数学'
        }, {
          value: '选项2',
          label: '语文'
        }, {
          value: '选项3',
          label: '英语'
        }, {
          value: '选项4',
          label: '物理'
        }, {
          value: '选项5',
          label: '化学'
        }],
        value: '',
        startTime:'',
        endTime:''
      }
    }
  }
</script>

<style>
  .searchbar_wrap{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .el-input{
    width: 170px;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 80px;
  }
  .jin-time-select{
    /* width: 400px; */
  }
  .el-select{
    width: 160px;
  }
  .el-button{
    width: 80px;
  }

</style>
