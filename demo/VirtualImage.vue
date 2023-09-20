<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: true
  }
})

const loaded = ref(false)
const error = ref(false)

watch(() => props.index, (first, second) => {
  loaded.value = false
  error.value = false
});

const onImgLoad = (evt) => {
  loaded.value = true
}

const onImgError = () => {
  error.value = true
}

</script>

<template>
  <img :src="`${image}?${index}`" alt="" @load="onImgLoad" @error="onImgError" class="image" v-show="!error" :class="{hidden: !loaded}">
</template>

<style scoped lang="scss">
.image {
  transition: opacity 0s ease-out 0.1s;
  .hidden {
    opacity: 0;
    transition: opacity 0s ease-out 0s;
  }
}
</style>
