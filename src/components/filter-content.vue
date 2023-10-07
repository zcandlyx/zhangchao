<template>
  <div class="p-2">
    <div>
      <span>用户名：</span>
      <input
        v-model="keyword"
        type="text"
        class="input"
        placeholder="请输入用户名筛选"
      />
    </div>

    <table class="w-full text-center mt-3 table_style">
      <thead>
        <tr>
          <th>用户名</th>
          <th>年龄</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in filteredData"
          :key="index"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script setup>
import { ref, computed } from 'vue'
const keyword = ref('');
const tableList = ref([
  { name: '小红', age: 12 },
  { name: '李理', age: 25 },
  { name: '王手', age: 355 },
  { name: '张设', age: 32 }
]);
// 计算过滤
const filteredData = computed(() => {
  const keywords = keyword.value.toLowerCase();
  if (!keywords) {
    return tableList.value;
  } else {
    return tableList.value.filter(item => {
      return item.name.toLowerCase().includes(keywords);
    });
  }
}) 
</script>
<style lang="scss" scoped>
.input {
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}
.input:focus {
  outline: none;
  border: 1px solid #007bff;
}
.input::placeholder {
  color: #ccc;
}
.table_style {
  border-collapse: collapse;
  border: 1px solid #333;
  border-left: none;
  border-bottom: none;
  thead,
  tbody {
    padding: 0;
    td,
    th {
      border-collapse: collapse;
      border: none;
      line-height: 33px;
      height: 33px;
      border-left: 1px solid #333;
      border-bottom: 1px solid #333;
    }
  }
}
</style>
