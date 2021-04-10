<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <navbar />
    </div>
    <div class="shadow-header" />
    <div class="content-container">
      <div class="sidebar-container">
        <sidebar class="sidebar-container" />
      </div>
      <div class="main-container">
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from './components';

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Sidebar,
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  transition: width 0.28s;
}

.shadow-header {
  position: relative;
  top: 0;
  right: 0;
  height: 4.25rem;
}

.content-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .sidebar-container {
    width: 4.5rem;
  }

  .main-container {
    width: 100%;
  }
}
</style>
