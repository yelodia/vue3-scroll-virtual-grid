<script setup>
import VirtualImage from './VirtualImage.vue'

const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  item: {
    required: true,
    type: Object,
  }
})

</script>

<template>
  <div class="tableview__item post" >
    <div class="tableview__column-main">
      <span class="square post__img">
        <VirtualImage :image="item.image" :index="index" />
      </span>
      <div class="post__title">
        #{{index}} {{item.text}}
      </div>
    </div>
    <div class="post__info tableview__columns">
      <div class="my-1"><span>Owner:</span> {{item.owner.firstName}} {{item.owner.lastName}}</div>
      <div class="my-1"><span>Date:</span> {{item.publishDate.split('T')[0]}} </div>
      <div class="my-1"><span>Likes:</span> {{item.likes}}</div>
    </div>
  </div>
</template>

