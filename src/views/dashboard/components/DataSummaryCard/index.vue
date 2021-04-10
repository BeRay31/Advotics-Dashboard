<template>
  <div class="data-summary">
    <div class="data-summary__upper">
      <span>Sales Turnover</span>
      <div class="more-icon">
        <img src="@/assets/svg/more-vertical.svg" alt="">
      </div>
    </div>
    <div class="data-summary__lower">
      <div class="data-summary__lower-left">
        <div class="amount">{{ parsedAmount }}</div>
        <div class="details">
          <div class="percentage">
            <div class="down-arrow-icon">
              <img src="@/assets/svg/down-arrow.svg" alt="">
            </div>
            <span class="number">{{ percentage }}%</span>
            <div class="description">last period in products sold</div>
          </div>
        </div>
      </div>
      <div class="data-summary__lower-right">
        <div class="cart-icon">
          <img src="@/assets/svg/cart.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { priceToString } from '@/utils/price';
export default {
  name: 'CardSummary',
  props: {
    amount: {
      default: 3000000,
      type: Number
    },
    percentage: {
      default: 14.4,
      type: Number
    }
  },
  computed: {
    parsedAmount() {
      return priceToString(this.amount, 'Rp ', '', ',');
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>