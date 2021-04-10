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
  </div>
</template>

<script>
import moment from 'moment';
import DataSummaryCard from './components/DataSummaryCard';

export default {
  name: 'Dashboard',
  components: {
    DataSummaryCard
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
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>