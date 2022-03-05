const list = [
  {
    name:'金文硕0',
    phone:15600599159,
    realname:'金文硕*真',
    subject:'数学',
    job:"我的职位",
    year:"我的时间",
    update:"我的操作时间"
  },
  {
    name:'金文硕1',
    phone:15600599159,
    realname:'金文硕*真',
    subject:'数学',
    job:"我的职位",
    year:"我的时间",
    update:"我的操作时间"
  },
  {
    name:'金文硕2',
    phone:15600599159,
    realname:'金文硕*真',
    subject:'数学',
    job:"我的职位",
    year:"我的时间",
    update:"我的操作时间"
  },
  {
    name:'金文硕3',
    phone:15600599159,
    realname:'金文硕*真',
    subject:'数学',
    job:"我的职位",
    year:"我的时间",
    update:"我的操作时间"
  }
]

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response:config=>{
      return{
        code:20000,
        data:{
          total:list.length,
          items:list
        }
      }
    }
  }
]
