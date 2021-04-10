<template>
  <div class="sidebar">
    <div class="sidebar-item">
      <div class="img-container">
        <img src="@/assets/svg/menu.svg" alt="">
      </div>
    </div>
    <template v-for="route in routes">
      <template v-if="(route.children && !route.children[0].hidden)">
        <router-link tag="div" class="sidebar-item" :key="route.children[0].path" :to="route.children[0].path">
          <div class="img-container">
            <img :src="require(`@/assets/svg/${route.children[0].meta.icon}.svg`)" alt="">
          </div>
        </router-link>
      </template>
    </template>
  </div>
</template>

<script>
import { routes } from '@/router';

export default {
  data() {
    return {
      routes
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
