<template>
  <div class="list-layout-wrap">
    <div class="topbar">
      <slot name="topbar_slot"></slot>
    </div>
    <div class="content">
      <slot name="content_slot"></slot>
    </div>
  </div>
</template>


<style lang="scss" scoped="scoped">
  .list-layout-wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .topbar{
      margin-top: 20px;
      width: 90%;
      margin-bottom:20px ;
    }
    .content{
      width: 90%;
    }
  }
</style>
