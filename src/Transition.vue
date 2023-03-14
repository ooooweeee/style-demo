<template>
  <div class="transition">transition</div>
</template>

<style scoped>
.transition {
  width: 100px;
  text-align: center;
  line-height: 100px;
  color: #ffffff;
  background-color: #292929;

  /* transition: width 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s; */
  transition-property: width; /* css 属性 */
  transition-duration: 1s; /* 动画时间 */
  transition-timing-function: ease; /* 过渡曲线：linear ease ease-in ease-out ease-in-out 三次贝塞尔曲线 */
  /* transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); */
  transition-delay: 0.5s; /* 延迟开始时间 */
}
.transition:hover {
  width: 500px;
}
</style>
