<template>
  <el-form
    ref="form"
    label-position="left"
    :model="form"
    label-width="80px"
    style="margin-top: 40px; margin-left: 40px"
  >


    <el-form-item label="活动名称" style="width: 420px">
      <s-validate #default="{ validate }" :rules="rules" :value="form.id">
        <el-input
          v-model="form.id"
          @blur="validate"
        />
      </s-validate>
    </el-form-item>

    <el-form-item label="活动区域" style="width: 420px">
      <s-validate #default="{ validate }" :rules="rules" :value="form.name">
        <el-input v-model="form.name" @blur="validate" />
      </s-validate>
    </el-form-item>

    <el-form-item label="活动时间" style="width: 420px">
      <div class="block" >
          <el-date-picker
            class="date"
            v-model="form.date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
          <span> - </span>
          <el-time-select
            class="time"
            v-model="form.time"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }"
            placeholder="选择时间">
          </el-time-select>
        </div>

    </el-form-item>

    <el-form-item label="即时配送">
      <el-switch v-model="form.switch1" />
    </el-form-item>

    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="1">线上品牌商赞助</el-radio>
        <el-radio label="2">线下场地免费</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动性质" style="width: 420px">
      <el-checkbox v-model="form.checked1">美食/餐厅线上活动</el-checkbox>
      <el-checkbox v-model="form.checked2">地推活动</el-checkbox>
      <el-checkbox v-model="form.checked3">线下主题活动</el-checkbox>
      <el-checkbox v-model="form.checked4">单纯品牌曝光</el-checkbox>
    </el-form-item>

    <el-form-item label="活动形式" style="width: 420px">
      <s-validate #default="{ validate }" :rules="rules" :value="form.contoin">
        <el-input
          v-model="form.contoin"
          type="textarea"
          :rows="3"
          resize="none"
          @blur="validate"
        />
      </s-validate>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" style="width: 100px">立即创建</el-button>
      <el-button type="danger" style="width: 100px">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import SValidate from '../checkdata.vue'
export default {
  components: {
    SValidate
  },
  data() {
    return {
      form: {
        id: '',
        name: '',
        title: '',
        contoin: '',
        resource: '1',
        date:'',
        time:'',
        vid: '',
        address: '',
        switch1: false,
        switch2: true,
        checked1:false,
        checked2:false,
        checked3:false,
        checked4:false
      },
      value: '',
      rules: [
        {
          test: function(value) {
            return value
          },
          message: '不能为空'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  color: #999;
  margin-left: 5px;
}
.block{
  width: 600px;
}
.date,.time{
  width: 162px;
}
</style>
