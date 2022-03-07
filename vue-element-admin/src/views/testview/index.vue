<template>
  <div class="view-wrap">
  <ListLayout>
    <template slot="topbar_slot">
        <Searchbar></Searchbar>
    </template>
    <template slot="content_slot">
    <MyTable border align="center" :sortable="tableData.column.sortable" :fixed="tableData.column.fixed" :data="tableData.list" :column="tableData.column" :pagination="true" :width="tableData.column.width"></MyTable>
    </template>
  </ListLayout>
  </div>
</template>

<script>
  import ListLayout from "@/components/ListLayout/index.vue"
  import Searchbar from "@/components/searchbar/index.vue"
  import MyTable from "@/components/lb-table/lb-table.vue"
  import { getList } from "@/api/testapi.js"
  export default {
    data(){
      return{
        tableData:{
          column:[
            {
              type:"selection",
              width:55
            },
            {
              prop:'name',
              label:'昵称',
              fixed:"left",
              sortable:"sortable"
            },
            {
              prop:'phone',
              label:'手机号',
              sortable:"sortable"
            },
            {
              prop:'realname',
              label:'真实姓名',
              sortable:"sortable"
            },
            {
              prop:'subject',
              label:'学科',
              sortable:"sortable"
            },
            {
              prop:'job',
              label:'职位',
              sortable:"sortable"
            },
            {
              prop:'year',
              label:'工作年限',
              sortable:"sortable"
            },
            {
              prop:'update',
              label:'操作时间',
              sortable:"sortable"
            },
            {
              prop:'actions',
              label:'操作',
              fixed:"right",
              width:200,
              render(_,scope){
                return(
                <div>
                  <el-link icon="el-icon-view">查看</el-link>|
                  <el-link icon="el-icon-edit-outline">编辑</el-link>|
                  <el-link icon="el-icon-delete">删除</el-link>
                </div>
                )
              }
            }

          ],
          list:[]

      }
    }
    },
    components:{
      ListLayout,
      MyTable,
      Searchbar
    },
    created(){
      getList().then((res)=>{
        console.log(res)
        const {code,data} = res
        if(code ==20000){
          const{items,total} = data
          this.tableData.list = items
        }
      })
    }
  }
</script>

<style>
</style>
