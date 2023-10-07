<template>
  <div class="p-5">
    <ul class="tabs flex mb-4">
      <li
        v-for="(item,index) in tabsList"
        :key="item"
        :class="{'tabs_current':index===currentPage}"
        @click="currentPage = index"
      >
        {{ item }}
      </li>
    </ul>

    <AddContent v-if="currentPage === 0"></AddContent>
    <FilterContent v-if="currentPage === 1"></FilterContent>
    <SwiperContent v-if="currentPage === 2"></SwiperContent>
    <ModalContent v-if="currentPage === 3">
      <template #header>
        <h2>今日任务</h2>
      </template>
      <template #content>
        <p>完成页面编写</p>
      </template>
      <template #footer>
        <button>按钮1</button>
        <button>按钮2</button>
      </template>
    </ModalContent>
    <!-- <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      />
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="./assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      />
    </a> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddContent from "./components/add-content.vue";
import FilterContent from "./components/filter-content.vue";
import SwiperContent from "./components/swiper-content.vue";
import ModalContent from "./components/modal-content.vue";
// 当前展示组件
const tabsList = ref(['添加组件', '筛选组件', '轮播组件', '弹窗组件'])
const currentPage = ref(0);
</script>
<style lang="scss" scoped>
.tabs {
  line-height: 40px;
  .tabs_current {
    color: #fff;
    background: #409eff;
    border-color: #409eff;
  }
  li {
    padding: 0 30px;
    text-align: center;
    cursor: pointer;
    position: relative;
    border: 1px solid #f5f5f5;
    margin-right: 20px;
    border-radius: 5px;
    transition: all 0.2s;
    &:hover {
      @extend .tabs_current;
    }
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
