<template>
  <div class="dashboard">
    <header>
      <h1>Dashboard</h1>
      <el-date-picker
        v-model="selectedDate"
        type="daterange"
        align="right"
        format="dd MMMM yyyy"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :picker-options="pickerOptions"
        :default-value="new Date()">
      </el-date-picker>
    </header>
    <div class="market-insight">
      <div class="market-insight__left">
        <h4>MARKET INSIGHT</h4>
      </div>
      <div class="market-insight__right">
        <div class="bulb-container">
          <img src="@/assets/img/bulb.png" alt>
        </div>
        <div class="help-text">Click here for help</div>
        <div class="icon-drawer">
          <i class="el-icon-arrow-up" />
        </div>
      </div>
    </div>
    <DataSummaryCard 
      :amount="1237123"
      :percentage="76.5"
    />
    <div class="content-container">
      <div class="chart card">

      </div>
      <ItemList 
        title="BEST SELLING SKU"
        :items="computedSoldData"
      />
      <ItemList 
        title="TOP COMPETITOR SKU"
        :items="computedCompetitorSoldData"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment';

import DataSummaryCard from './components/DataSummaryCard';
import ItemList from './components/ItemList';
import { soldProductGenerator, competitorProductGenerator } from '@/utils/productSelling';

export default {
  name: 'Dashboard',
  components: {
    DataSummaryCard,
    ItemList
  },
  data() {
    return {
      selectedDate: [
        moment().subtract(7, 'days'),
        moment().subtract(1, 'days')
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() >= Date.now() || 
          (time.getDate() == new Date().getDate() && 
            time.getMonth() == new Date().getMonth() && 
            time.getFullYear() == new Date().getFullYear()
            ) || 
          time.getTime() < moment().subtract(6, 'months');
        },
        shortcuts: [{
            text: 'Today',
            onClick(picker) {
              const end = moment();
              const start = moment();
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const start = moment().subtract(1, 'days');
              const end = moment().subtract(1, 'days');
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 7 days',
            onClick(picker) {
              const start = moment().subtract(7, 'days');
              const end = moment().subtract(1, 'days');
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 30 days',
            onClick(picker) {
              const start = moment().subtract(30, 'days');
              const end = moment().subtract(1, 'days');
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'This Month',
            onClick(picker) {
              const start = moment().startOf('month');
              const end = moment();
              picker.$emit('pick', [start, end]);
            }
          }]
      },
      productSoldDataMap: new Map(),
      competitorSoldDataMap: new Map()
    }
  },
  watch: {
    selectedDate() {
      console.log("CHANGED")
    }
  },
  computed: {
    computedSoldData() {
      const startDate = moment(this.selectedDate[0].format('YYYY-MM-DD'));
      const endDate = moment(this.selectedDate[1].format('YYYY-MM-DD'));
      let sumSoldData = [];
      for (let m = moment(startDate); m.diff(endDate, 'days') <= 0; m.add(1, 'days')) {
        const key = m.format('DD-MM-YYYY');
        let data = this.productSoldDataMap.get(key);
        if (data == null) {
          data = soldProductGenerator();
          this.productSoldDataMap.set(key, data);
        }
        if (sumSoldData.length == 0) {
          sumSoldData = JSON.parse(JSON.stringify(data)); // deepcpy
        }
        else {
          for(let i = 0; i < sumSoldData.length; i++) {
            sumSoldData[i].totalSold += data[i].totalSold;
            sumSoldData[i].totalRevenue += data[i].totalRevenue;
          }
        }
      }
      sumSoldData.sort((a,b) => (b.totalSold - a.totalSold)); // sort by Average Purchase Value
      return sumSoldData;
    },
    computedCompetitorSoldData() {
      const startDate = moment(this.selectedDate[0].format('YYYY-MM-DD'));
      const endDate = moment(this.selectedDate[1].format('YYYY-MM-DD'));
      let sumSoldData = [];
      for (let m = moment(startDate); m.diff(endDate, 'days') <= 0; m.add(1, 'days')) {
        const key = m.format('DD-MM-YYYY');
        let data = this.competitorSoldDataMap.get(key);
        if (data == null) {
          data = competitorProductGenerator();
          this.competitorSoldDataMap.set(key, data);
        }
        if (sumSoldData.length == 0) {
          sumSoldData = JSON.parse(JSON.stringify(data)); // deepcpy
        }
        else {
          for(let i = 0; i < sumSoldData.length; i++) {
            sumSoldData[i].totalSold += data[i].totalSold;
            sumSoldData[i].totalRevenue += data[i].totalRevenue;
          }
        }
      }
      sumSoldData.sort((a,b) => (b.totalSold - a.totalSold)); // sort by Average Purchase Value
      return sumSoldData;
    }
  },
  methods: {
    extractKey(date) {
      return date.format('DD-MM-YYYY')
    }
  }

}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>