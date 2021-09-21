<template>
  <div class="home">
    <MainHeader/>
    <CustomText class="normal">Model 3 | Index</CustomText>
  </div>
</template>

<script>
import MainHeader from '@/components/Header.vue'
import CustomText from '@/components/CustomText.vue'

export default {
  name: 'Home',
  components: {
    CustomText,
    MainHeader
  }
}
</script>
