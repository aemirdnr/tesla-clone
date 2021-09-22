<template>
  <div class="home">
    <MainHeader/>
    <DialogBox/>
  </div>
</template>

<script>
import MainHeader from '@/components/Header.vue'
import DialogBox from '@/components/DialogBox.vue'
import CustomText from '@/components/CustomText.vue'
import DownArrow from '@/icons/down-arrow.svg'

export default {
  name: 'Home',
  components: {
    CustomText,
    DownArrow,
    MainHeader,
    DialogBox
  }
}
</script>
