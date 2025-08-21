<template>
  <div class="container">
    <div class="marquee">
      <div
        class="marquee-content"
        :class="`marquee-${marqueeMode}`"
      >
        这里是滚动的文本或图片
      </div>
    </div>
    <!-- <div>
      <button @click="switchMode('r2l')">从右向左</button>
      <button @click="switchMode('l2r')">从左向右</button>
    </div> -->
  </div>
</template>
<script setup>
import { nextTick, ref } from "vue";
const marqueeMode = ref("r2l");

async function switchMode(mode) {
  marqueeMode.value = mode;
  await nextTick();
}
</script>
<style lang="css">
.marquee {
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  box-sizing: border-box;
}

.marquee-content {
  display: inline-block;
}
.marquee-l2r {
  padding-left: 0;
  animation: l2r 10s linear infinite;
}
.marquee-r2l {
  padding-left: 100%;
  animation: r2l 10s linear infinite;
}

@keyframes l2r {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
}
@keyframes r2l {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
