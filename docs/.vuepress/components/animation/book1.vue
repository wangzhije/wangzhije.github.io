<template>
  <div class="book-wrapper">
    <div class="book-cover one-page"></div>
    <div class="content">
      <div v-for="item in total" :key="item">
        <div class="book-page one-page">
          <div>{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="book-cover one-page"></div>
    <div class="btns">
      <button @click="handlePrev">&lt;</button>
      <button @click="handleNext">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 7,
      currentPage: 0,
    };
  },
  computed: {
    isStart(){
      return this.currentPage = 0;
    },
    isEnd(){
      return this.currentPage == this.total;
    }
  },
  methods: {
    handlePrev() {
      
    },
    handleNext() {

    },
  },
};
</script>

<style scoped>
:root {
  --w: 240px;
  --h: 240px;
}
body {
  margin: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0c1c38;
}

.book-wrapper {
  height: var(--h);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  perspective: 1600px;
  transform-style: preserve-3d;
}
.book-cover {
  /* 封面比页面每条边宽25px */
  height: calc(var(--h) + 50px);
  width: calc(var(--w) + 50px);
  position: absolute;
  background-image: linear-gradient(to bottom, #ff5c33, #ff9166, #3dd6f5);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: 1s;
  transform-origin: left;
  backface-visibility: visible;
  border: 0.5px solid black;
}
.book-page {
  height: var(--h);
  width: var(--w);
  position: absolute;
  z-index: 100;
  transition: 1s;
  /* 封面比页面每条边宽的长度 */
  transform-origin: -25px;
  background-size: cover;
  backface-visibility: visible;
}

.btns {
  margin-top: 60px;
  user-select: none;
}
.btns button {
  display: inline-block;
  width: 45px;
  height: 45px;
  border: 0;
  margin: 0px 15px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  background-color: rgba(63, 63, 63, 0.8);
  outline: none;
}
.btns.disabled{
  background-color: rgba(110, 110, 110, 0.5);
  
}
</style>