<template>
  <div class="modal" ref="productModal" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">商品詳細資訊</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-4">
              <div class="form-group">
                <label for="imageUrl">主要圖片</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  v-model="tempData.imageUrl"
                >
              </div>
              <img class="img-fluid mt-1" :src="tempData.imageUrl" alt="" />
              <div v-if="info.imagesUrl">
                <div class="form-group" v-for="(item, key) in tempData.imagesUrl" :key='item+key'>
                  <input class="form-control mt-4" type="text" v-model="tempData.imagesUrl[key]">
                  <img :src="info.imagesUrl[key]" class="img-fluid mt-1" alt="">
                  <button type="button" class="btn btn-outline-danger w-100"
                    @click="tempData.imagesUrl.splice(key,1)">
                    刪除圖片
                  </button>
                </div>
                <button type="button" class="btn btn-outline-primary w-100 mt-3"
                    @click="tempData.imagesUrl.push('')">
                    新增圖片
                </button>
              </div>
              <div v-else>
                <button type="button" class="btn btn-outline-primary w-100 mt-3"
                @click="tempData.imagesUrl=['']">
                新增圖片
              </button>
              </div>
            </div>
            <div class="col-8"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">儲存並送出</button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  props: ['info'],
  data() {
    return {
      modal: '',
      tempData: {},
    };
  },
  methods: {
    openModal() {
      this.modal.show();
      this.syc();
    },
  },
  watch: {
    info() {
      this.tempData = JSON.parse(JSON.stringify(this.info));
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.productModal);
  },
};
</script>
