<template>
  <div class="navbar_va">
    <div class="right-container" @click="redirectToAdvotics">
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
        <div class="name">John Doellah</div>
        <div class="company-name">Advotics</div>
      </div>
      <div class="avatar-container">
        <img src="@/assets/img/avatar.png" alt="">
      </div>
      <div class="exit-container" @click="alertLogout">
        <img src="@/assets/img/logout.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    redirectToAdvotics() {
      window.open('https://www.advotics.com/id/', '_blank')
    },
    alertLogout() {
      this.$message({
        message: `Just pretend that you're logged out :)`,
        type: 'success'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
