<template>
  <div class="container">
    <div class="div-description">
      <img src="../img/desktop.jpg" alt="" />
    </div>
    <div class="div-form" :class="tab == 'register' ? 'transform' : ''">
      <form
        action=""
        class="form-login"
        :class="tab == 'register' ? 'disappear' : ''"
      >
        <h1>登录</h1>
        <input type="text" placeholder="帐号" />
        <input type="password" placeholder="密码" />
        <button type="submit">登录</button>
        <div class="control">
          <span
            >没有帐号？<a href="#" @click="changeTab('register')">注册</a></span
          >
        </div>
      </form>
      <form
        action=""
        class="form-register"
        :class="tab == 'login' ? 'disappear' : ''"
      >
        <h1>注册</h1>
        <input type="text" placeholder="帐号" />
        <input type="password" placeholder="密码" />
        <button type="submit">注册</button>
        <div class="control">
          <span
            >已有帐号？<a href="#" @click="changeTab('login')">登录</a></span
          >
        </div>
      </form>
    </div>
    <div class="div-description">
      <img src="../img/desktop.jpg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: "login",
    };
  },
  methods: {
    changeTab(val) {
      this.tab = val;
    },
  },
};
</script>
<style scoped>
.transform {
  transform: rotateY(180deg);
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-image: linear-gradient(120deg, #a1c4fd, #c2e9fb);
}
.container {
  position: relative;
  display: flex;
  /* 视域 */
  perspective: 1200px;
  transform-style: preserve-3d;
}
.div-description {
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px 0 0 5px;
  transform: translateZ(-1px);
}
.div-description:nth-last-child(1) {
  border-radius: 0 5px 5px 0;
}
.div-description img {
  width: 100%;
  height: 100%;
  /* margin-bottom: 15px; */
}
.div-description span {
  font-size: 12px;
  color: #555;
}
.div-form {
  width: 300px;
  height: 400px;
  position: absolute;
  left: 0;
  transition: 0.5s;
  transform-origin: right;
}
.div-form .form-login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to right, #48c6ef 0%, #6f86d6 200%);
  border-radius: 5px 0 0 5px;
}
.div-form .form-register {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to right, #48c6ef -100%, #6f86d6 100%);
  border-radius: 0 5px 5px 0;
  transform: rotateY(180deg);
}
.div-form form.disappear {
  display: none;
}
.div-form h1 {
  margin: 50px 0 25px 0;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 5px;
}
.div-form input {
  background-color: transparent;
  width: 70%;
  color: #fff;
  outline: none;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);
  padding: 5px 0;
  margin: 8px 0;
  text-indent: 5px;
  font-size: 14px;
  letter-spacing: 1px;
}
.div-form input::placeholder {
  color: #fff;
}
.div-form button[type="submit"] {
  width: 70%;
  height: 32px;
  margin: 30px auto 10px;
  font-size: 14px;
  color: #fff;
  border: none;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: 0.4s;
}
.div-form button[type="submit"]:hover {
  letter-spacing: 3px;
  background-color: #fff;
  color: #000;
}
.div-form .control {
  color: #fff;
  margin: 5px;
  font-size: 13px;
}
.div-form .control a {
  color: #fff;
  margin: 0 5px;
  letter-spacing: 1px;
}
.div-form .control a:hover {
  color: #000;
}
</style>