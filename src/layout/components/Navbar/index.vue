<template>
  <div class="navbar_va">
    <div class="right-container">
      <div class="logo-container">
        <img src="@/assets/img/main-logo.jpg" alt="">
      </div>
      <span class="pow-by">powered by</span>
      <div class="sub-logo-container">
        <img src="@/assets/img/main-logo.jpg" alt="">
      </div>
    </div>
    <div class="left-container">
      <div class="name-container">
        <div class="name">Dummy Username</div>
        <div class="company-name">Dummy Company</div>
      </div>
      <div class="avatar-container">
        <img src="@/assets/img/avatar.png" alt="">
      </div>
      <div class="exit-container">
        <img src="@/assets/img/logout.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
