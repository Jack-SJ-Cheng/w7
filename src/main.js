import { createApp } from 'vue';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';

// 匯入 vee-validate 相關規則
import { required, email, min } from '@vee-validate/rules';

// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';

// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import axios from 'axios';
import VueAxios from 'vue-axios';
import bootstrap from 'bootstrap';
import App from './App.vue';
import router from './router';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale('zh_TW');

const app = createApp(App);
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(VueAxios, axios);
app.use(bootstrap);
app.use(router);
app.mount('#app');
