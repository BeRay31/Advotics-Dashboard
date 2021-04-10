<template>
  <div class="item-list card">
    <div class="header-container">
      <span>{{ title.toUpperCase() }}</span>
      <div class="more-icon">
        <img src="@/assets/svg/more-vertical.svg" alt="">
      </div>
    </div>
    <div class="content-container">
      <div class="row-content" v-for="(item, index) in items.slice(0, 5)" :key="item.name" :class="[index == 0 ? 'best': '']">
        <div class="img-container">
          <img :src="item.img">
        </div>
        <div class="product-detail">
          <div class="name">{{ item.name }}</div>
          <div class="desc">
            <div class="price">{{ parsedAmount(item.price) }}</div>
            <div class="selled">{{ item.totalSold }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { priceToString } from '@/utils/price';
export default {
  name: 'ItemList',
  computed: {
    readyToRenderItem() {
      return this.items.map(el => {
        const newEl = {...el};
        newEl.img = this.getImageUrl();
        return newEl
      })
    }
  },
  props: {
    title: {
      default: 'BEST SELLING SKU',
      type: String
    },
    items: {
      default: () => [
        {
          name: "TEST",
          price: 1233235,
          totalSold: 1234,
          img: require('@/assets/img/product-sample.png')
        }
      ],
      type: Array
    }
  },
  methods: {
    parsedAmount(amount) {
      return priceToString(amount, 'Rp ', '', ',');
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>