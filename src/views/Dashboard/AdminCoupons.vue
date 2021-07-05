<template>
  <div class="container">
    <table class="table mt-3">
      <thead>
        <tr>
          <th class="text-center">名稱</th>
          <th class="text-center" width='120'>折扣比</th>
          <th class="text-center" width='120'>折抵價</th>
          <th class="text-center" width='120'>是否啟用</th>
          <th class="text-center">到期日</th>
          <th class="text-center" width='80'>編輯</th>
          <th class="text-center" width='80'>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
  },
};
</script>
