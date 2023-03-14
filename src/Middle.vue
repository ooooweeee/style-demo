<template>
  <div class="middle">
    <div class="wrapper wrapper-vertical-align">
      <div class="content">content</div>
    </div>
    <div class="wrapper wrapper-flex">
      <div class="content">content</div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100px;
  color: #292929;
}
.wrapper:nth-of-type(2n) {
  color: #ffffff;
  background-color: #292929;
}

.wrapper-vertical-align::before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.wrapper-vertical-align .content {
  display: inline-block;
}

.wrapper-flex {
  display: flex;
  align-items: center;
}
</style>
