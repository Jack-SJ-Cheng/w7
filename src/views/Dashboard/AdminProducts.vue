<template>
  <div class="container">
    <Loading :active="isLoading"></Loading>
    <button type="button" class="btn btn-primary mt-3" @click="getInfo(true)">
      新增產品
    </button>
    <table class="table mt-3 align-middle">
      <thead>
        <tr>
          <th class="text-center">分類</th>
          <th class="text-center">產品名稱</th>
          <th class="text-center">原價</th>
          <th class="text-center">優惠價</th>
          <th class="text-center">是否啟用</th>
          <th class="text-center">編輯</th>
          <th class="text-center" width="80">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :ref="item.id" :key="item">
          <td class="text-center">{{ item.category }}</td>
          <td class="text-center">{{ item.title }}</td>
          <td class="text-center">{{ $toCurrency(item.origin_price) }}</td>
          <td class="text-center">
            <span v-if="item.price">{{ $toCurrency(item.price) }}</span>
            <span v-else>{{ $toCurrency(item.origin_price) }}</span>
          </td>
          <td class="text-center">
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-secondary" v-else>未啟用</span>
          </td>
          <td class="text-center">
            <button
              type="button"
              class="btn text-primary"
              @click="getInfo(false, item)"
            >
              <span class="material-icons"> edit </span>
            </button>
          </td>
          <td class="text-center">
            <button class="btn text-danger" @click="openDeleteModal(item)">
              <span class="material-icons"> delete_outline </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :page="pagination" @get-data="getData"></Pagination>
    <ProductModal
      ref="productModal"
      :info="productInfo"
      :is-new="isNew"
      @get="getData"
    ></ProductModal>
    <DeleteModal
      :product="productInfo"
      ref="deleteModal"
      @get-data="getData"
    ></DeleteModal>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination.vue';
import ProductModal from '../../components/ProductModal.vue';
import DeleteModal from '../../components/DeleteModal.vue';

export default {
  components: {
    Pagination,
    ProductModal,
    DeleteModal,
  },
  data() {
    return {
      isNew: true,
      products: [],
      pagination: {},
      isLoading: false,
      productInfo: {},
    };
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getInfo(isNew, item) {
      this.isNew = isNew;
      if (isNew) {
        this.productInfo = {};
      } else {
        this.productInfo = JSON.parse(JSON.stringify(item));
      }
      this.$refs.productModal.openModal();
    },
    openDeleteModal(item) {
      this.$refs.deleteModal.openModal();
      this.productInfo = JSON.parse(JSON.stringify(item));
    },
    check() {
      const api = `${process.env.VUE_APP_API}/api/user/check`;
      this.$http
        .post(api)
        .then((response) => {
          if (!response.data.success) {
            this.$router.push('/login');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
