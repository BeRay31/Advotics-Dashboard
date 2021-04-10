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
        :default-value="new Date()">
      </el-date-picker>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      selectedDate: [
        new Date(Date.now() - 7 * 86400000),
        new Date(Date.now() - 1 * 86400000)
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
.dashboard {
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0px;
      color: #707070C4;
    }
  }
}
</style>