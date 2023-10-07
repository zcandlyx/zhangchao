<template>
  <div class="p-2">
    <input
      v-model="value"
      type="text"
      class="input"
      placeholder="请输入需添加的内容"
    />
    <button
      @click="addItem"
      class="add_btn"
    >添加</button>
    <ul class="pt-2">
      <li
        v-for="(item, index) in itemList"
        :key="index"
        class="leading-8"
      >{{ `${index}：${item}` }}</li>
    </ul>
  </div>

</template>
<script setup>
import { ref } from 'vue'
const value = ref('');
const itemList = ref([]);
const addItem = () => {
  if (!value.value) {
    alert('请输入内容');
    return;
  }
  itemList.value.push(value.value);
  value.value = '';

};
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
.add_btn {
  width: 100px;
  height: 40px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
}
.add_btn:hover {
  background: #0069d9;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
