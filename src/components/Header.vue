<template>
  <header class="header">
      <!-- Column 1 -->
      <h1 class="flex-one">
        <router-link to="/" class="logo-a"><TeslaIcon class="logo"/></router-link>
      </h1>
      <!-- Column 2 -->
      <ol class="flex-two">
      <li>
        <router-link class="text-a" to="/models">
          <CustomText class="text">Model S</CustomText>
        </router-link>
      </li>
      <li>
        <router-link to="/model3" class="text-a">
          <CustomText class="text">Model 3</CustomText>
        </router-link>
      </li>
      <li>
        <router-link to="/modelx" class="text-a">
          <CustomText class="text">Model X</CustomText>
        </router-link>
      </li>
      <li>
        <router-link to="/modely" class="text-a">
          <CustomText class="text">Model Y</CustomText>
        </router-link>
      </li>
      <li>
        <router-link to="/solarroof" class="text-a">
          <CustomText class="text">Solar Roof</CustomText>
        </router-link>
      </li>
      <li>
        <router-link to="/solarpanels" class="text-a">
          <CustomText class="text">Solar Panels</CustomText>
        </router-link>
      </li> 
      </ol>
      <!-- Column 3 -->
      <ol class="flex-three">
        <li>
          <router-link to="/shop" class="text-a">
            <CustomText>Shop</CustomText>
          </router-link>
        </li>
        <li>
          <router-link to="/account" class="text-a">
            <CustomText class="text">Account</CustomText>
          </router-link>
        </li>
        <li>
          <router-link to="/menu" class="text-a">
            <CustomText class="text">Menu</CustomText>
          </router-link>
        </li>
      </ol>
  </header>
</template>

<script>
import TeslaIcon from '@/icons/tesla-icon.svg'
import CustomText from './CustomText.vue'

export default {
    name: "MainHeader",
    components: {
        TeslaIcon,
        CustomText
    }
}
</script>

<style scoped>
.header{
    display: flex;
    align-items: center;
}
.logo{
  inline-size: 120px;
  height: 30px;
}
.logo-a{
  box-shadow: none;
  display: inline-flex;
  padding-inline-start: 16px;
  padding: 0 8;
}
.text{
   color: var(--tds-color--grey10);
   margin: 0 8px;
   transition: color .33s ease;
}
.text-a{
  white-space: nowrap;
  backdrop-filter: unset;
  background-color: transparent;
  align-items: center;
  border-radius: 12px;
  display: inline-flex;
  color: var(--tds-color--grey10);
  font-weight: 500;
  inline-size: auto;
  min-block-size: 32px;
  padding: 4 8;
  transition: color .33s ease,background-color .33s ease;
}
.flex-one{
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;

  align-items: center;
  padding: 0;
  min-height: 54px;
  line-height: 48px;

  min-inline-size: 245px;
  padding-inline-start: 32px;
}
.flex-two{
  list-style-type: none;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  
  flex-grow: 1;
  padding-inline-end: 8px;
  padding-inline-start: 8px;

  line-height: 21px;
  min-height: 54px;

  align-items: center;
  margin: 0;
  transition: transform .5s ease,-webkit-transform .5s ease;
}
.flex-three{
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;

  min-inline-size: 245px;
  padding-inline-end: 32px;

  line-height: 21px;
  min-height: 54px;
  align-items: center;
  margin: 0;
  transition: transform .5s ease,-webkit-transform .5s ease;
}
</style>