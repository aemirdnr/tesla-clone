<template>
  <div class="home">
    <MainHeader style="z-index: 10;"/>
    <DialogBox/>
    <Main style="z-index: -99;"/>
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
import MainHeader from '@/components/Header.vue'
import DialogBox from '@/components/DialogBox.vue'

export default {
  name: 'Home',
  components: {
    MainHeader,
    DialogBox,
    Main
  }
}
</script>
