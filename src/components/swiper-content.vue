<template>
  <div class="carousel">
    <div
      class="carousel-images"
      :style="{ transform: 'translateX(' + -activeIndex*100 + '%)' }"
    >
      <div
        v-for="(image, i) in bannerList"
        :key="i"
        class="carousel-image"
      >
        <img
          :src="$getAssetsImages(image)"
          alt=""
        />
      </div>
    </div>
    <div class="carousel-indicators">
      <span
        v-for="(item, index) in bannerList"
        :key="index"
        @click="changeSlide(index)"
        :class="{ active: index === activeIndex }"
      ></span>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue'
const activeIndex = ref(0)
const bannerList = ref(['1.jpg', '2.jpg']);
const changeSlide = (index) => {
  activeIndex.value = index;
}


</script>
<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-images {
  display: flex;
  transition: transform 1s ease-in-out;
}
.carousel-image {
  flex: 0 0 auto;
  width: 100%;
}
.carousel-indicators {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}
.carousel-indicators span {
  display: block;
  width: 20px;
  height: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  margin: 0 5px;
}
.carousel-indicators span.active {
  background-color: rgb(79, 79, 79);
}
</style>
