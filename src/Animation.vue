<template>
  <div class="animation">animation</div>
</template>

<style scoped>
.animation {
  width: 100px;
  text-align: center;
  line-height: 100px;
  color: #ffffff;
  background-color: #292929;

  /* animation: custom-width 1s linear 0.2s infinite alternate-reverse running none; */
  animation-name: custom-width; /* keyframes 名称 */
  animation-duration: 1s; /* 动画时间 */
  animation-timing-function: linear; /* 过渡曲线：linear ease ease-in ease-out ease-in-out 三次贝塞尔曲线 */
  animation-delay: 0.2s; /* 延迟开始时间 */
  animation-iteration-count: 1; /* 执行次数：infinite 无限次 */
  animation-direction: alternate; /* 执行模式：normal 正向播放; reverse 逆向播放; alternate 正向-逆向播放; alternate-reverse 逆向-正向播放 */
  animation-play-state: running; /* 执行状态 running paused */
  animation-fill-mode: backwards; /* 执行结束后停留状态: backwards 起始时状态; forwards 结束时状态 */
}

.animation:hover {
  animation-play-state: paused;
}

@keyframes custom-width {
  0% {
    width: 100px;
  }
  50% {
    width: 300px;
  }
  100% {
    width: 400px;
  }
}
</style>
