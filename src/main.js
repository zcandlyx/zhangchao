import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { getAssetsImages } from "~/utils/index";



const app = createApp(App);
// 获取本地图片
app.config.globalProperties.$getAssetsImages = getAssetsImages;
app.mount("#app");