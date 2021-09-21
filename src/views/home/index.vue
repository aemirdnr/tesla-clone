<template>
  <div class="home">
    <MainHeader/>
  </div>
</template>

<script>
import MainHeader from '@/components/Header.vue'
import CustomText from '@/components/CustomText.vue'
import DownArrow from '@/icons/down-arrow.svg'

export default {
  name: 'Home',
  components: {
    CustomText,
    DownArrow,
    MainHeader
  }
}
</script>
