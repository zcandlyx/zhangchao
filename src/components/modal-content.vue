<template>
  <div>
    <button
      @click="showModal"
      class="btn"
    >打开Modal</button>
    <div
      v-if="isModalVisible"
      class="modal-overlay"
      @click="hideModal"
    >
      <div
        class="modal"
        @click.stop="childClick"
      >
        <div class="modal-header">
          <slot name="header">标题</slot>
          <button
            class="modal-close"
            @click="hideModal"
          >关闭</button>
        </div>
        <div class="modal-body">
          <slot name="content">Modal内容</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button @click="hideModal">确定</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const isModalVisible = ref(false)
const showModal = () => {
  isModalVisible.value = true;
}
const hideModal = () => {
  isModalVisible.value = false;
}
const childClick = () => {

}
</script>
<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.modal-close {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.modal-body {
  margin-bottom: 10px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

button {
  padding: 5px 10px;
  outline: none;
}
</style>
