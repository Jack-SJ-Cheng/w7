<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5 p-4">
        <h3 class="mb-4">
          勇者倉庫 <br />
          後台管理系統
        </h3>
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">帳號</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              autofocus
              required
              v-model="user.username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">E-mail</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="請輸入密碼"
              required
              v-model="user.password"
            />
          </div>
          <button
            type="button"
            @click.prevent="logIn"
            class="btn btn-primary w-100 mt-3"
          >
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    logIn() {
      this.$http
        .post(`${process.env.VUE_APP_API}/admin/signin`, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `braveToken=${token};expires=${new Date(expired)};`;
            this.$router.push('/admin/products');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
