<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="deleteModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-light">
          <h5 class="modal-title" id="exampleModalLabel">刪除訂單</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <tbody>
              <tr>
                <th>訂單日期</th>
                <td>{{ $timeTransformer(order.create_at) }}</td>
              </tr>
              <tr>
                <th>訂購姓名</th>
                <td>{{ order.user?.name }}</td>
              </tr>
              <tr>
                <th>訂單金額</th>
                <td>NT$ {{ $toCurrency(order.total) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  props: ['order'],
  data() {
    return {
      modal: '',
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    deleteOrder(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      this.$http.delete(api).then().catch();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.deleteModal);
  },
};
</script>
