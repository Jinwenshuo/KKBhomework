<!-- <template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
 -->

 <template>
   <div class="dashboard-editor-container">
     <div class=" clearfix">
       <pan-thumb :image="avatar" style="float: left">
         当前登录的权限是:
         <span v-for="item in roles" :key="item" class="pan-info-roles">{{ item }}</span>
       </pan-thumb>
       <div class="info-container">
         <span class="display_name">{{ name }}</span>
         <span style="font-size:20px;padding-top:20px;display:inline-block;">欢迎欢迎欢迎</span>
       </div>
     </div>
     <div>
       <img :src="emptyGif" class="emptyGif">
     </div>
   </div>
 </template>

 <script>
 import { mapGetters } from 'vuex'
 import PanThumb from '@/components/PanThumb'

 export default {
   name: 'DashboardEditor',
   components: { PanThumb },
   data() {
     return {
       emptyGif: 'https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3'
     }
   },
   computed: {
     ...mapGetters([
       'name',
       'avatar',
       'roles'
     ])
   }
 }
 </script>

 <style lang="scss" scoped>
   .emptyGif {
     display: block;
     width: 45%;
     margin: 0 auto;
   }

   .dashboard-editor-container {
     background-color: #e3e3e3;
     min-height: 100vh;
     padding: 50px 60px 0px;
     .pan-info-roles {
       font-size: 12px;
       font-weight: 700;
       color: #333;
       display: block;
     }
     .info-container {
       position: relative;
       margin-left: 190px;
       height: 150px;
       line-height: 200px;
       .display_name {
         font-size: 48px;
         line-height: 48px;
         color: #212121;
         position: absolute;
         top: 25px;
       }
     }
   }
 </style>
