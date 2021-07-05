<template>
  <div class="container">
    <Loading :active="isLoading"></Loading>
    <button
      type="button"
      class="btn btn-primary mt-3"
      @click="openCouponModal(true)"
    >
      新增優惠券
    </button>
    <table class="table mt-3 align-middle">
      <thead>
        <tr>
          <th class="text-center">優惠名稱</th>
          <th class="text-center" width="120">折扣代碼</th>
          <th class="text-center" width="120">折抵比率</th>
          <th class="text-center" width="120">是否啟用</th>
          <th class="text-center">到期日</th>
          <th class="text-center" width="80">編輯</th>
          <th class="text-center" width="80">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item">
          <td class="text-center">{{ item.title }}</td>
          <td class="text-center">{{ item.code }}</td>
          <td class="text-center">{{ item.percent }}折</td>
          <td class="text-center">
            <span v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td class="text-center">{{ $timeTransformer(item.due_date) }}</td>
          <td class="text-center">
            <button
              class="btn"
              type="button"
              @click="openCouponModal(false, item)"
            >
              <span class="material-icons text-primary"> edit </span>
            </button>
          </td>
          <td class="text-center">
            <button class="btn" type="button">
              <span class="material-icons text-danger"> delete_outline </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal ref="modal" :coupon="coupon" :is-new="isNew" @get-data='getData'></CouponModal>
  </div>
</template>

<script>
import CouponModal from '../../components/CouponModal.vue';

export default {
  components: {
    CouponModal,
  },
  data() {
    return {
      isLoading: false,
      coupons: [],
      coupon: {},
      isNew: true,
    };
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.coupons = res.data.coupons;
        this.isLoading = false;
      });
    },
    openCouponModal(isNew, coupon) {
      this.isNew = isNew;
      if (isNew) {
        this.coupon = {};
      } else {
        this.coupon = JSON.parse(JSON.stringify(coupon));
      }
      this.$refs.modal.openModal();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
