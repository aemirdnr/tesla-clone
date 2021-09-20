<template>
  <div class="home">
    <h1>Home Page</h1>
    <CustomText size="normal" tag="span">f1rst comm1t</CustomText>
    <DownArrow />
  </div>
</template>

<script>
import CustomText from '../components/CustomText.vue'
import DownArrow from '../icons/down-arrow.svg'

export default {
  name: 'Home',
  components: {
    CustomText,
    DownArrow
  }
}
</script>
