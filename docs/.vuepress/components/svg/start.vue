<template>
  <div>
    <svg width="300" height="150" xmlns="http://wwww.w3.org/2000/svg">
      <title>SVG</title>
      <desc>SVG Start</desc>
      <!-- 在这里绘制图像 -->
      <!-- <circle cx='31' cy='31' r='30' style='stroke:black; fill:none'></circle> -->

      <line
        x1="30"
        y1="30"
        x2="140"
        y2="30"
        style="stroke: black; stroke-width: 1"
      ></line>
      <path
        d="M 140 28 L140 32 144 30 z"
        fill="#000"
        stroke="black"
        stroke-width="1"
      />
      <text x="70" y="20" font-size="14">X轴</text>

      <line
        x1="30"
        y1="30"
        x2="30"
        y2="72"
        style="stroke: black; stroke-width: 1"
      ></line>
      <path
        d="M 28 68 L32 68 30 72 z"
        fill="#000"
        stroke="black"
        stroke-width="1"
      />
      <text x="4" y="56" font-size="14" style="writing-mode: sideways-rl">
        Y轴
      </text>
    </svg>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
svg{
  background: aquamarine;
}
</style>