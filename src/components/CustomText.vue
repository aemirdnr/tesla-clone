<template>
    <component :is="tag" :class="size">
        <slot />
    </component>
</template>

<script>
export default {
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal', // normal:14, small:12
      validator: function (value) {
        return ['normal', 'small'].indexOf(value) !== 1
      }
    }
  }
}
</script>

<style scoped>
.normal{
    font-size: 14px;
}

.small{
    font-size: 12px;
}
</style>
