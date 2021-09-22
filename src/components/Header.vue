<template>
  <div class="tds-site-header-wrapper">
      <header class="tds-site-header tds--fade-in">
      <div class="tds-animate--backdrop-backdrop"></div>
      <!-- Column 1 -->
      <h1 class="tds-site-logo tds-align--start">
        <router-link to="/" class="tds-site-logo-link">
          <TeslaIcon class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"/>
        </router-link>
      </h1>
      <!-- Column 2 -->
      <ol class="tds-site-nav-items tds-align--center">
      <li>
        <router-link to="/models" class="tds-site-nav-item tds--product-name tds-button--hover">
          <CustomText class="tds-site-nav-item-text">Model S</CustomText>
        </router-link>
      </li>
      <li>
        <router-link to="/model3" class="tds-site-nav-item tds--product-name tds-button--hover">
          <CustomText class="tds-site-nav-item-text">Model 3</CustomText>
        </router-link>
      </li>
      <li>
        <router-link to="/modelx" class="tds-site-nav-item tds--product-name tds-button--hover">
          <CustomText class="tds-site-nav-item-text">Model X</CustomText>
        </router-link>
      </li>
      <li>
        <router-link to="/modely" class="tds-site-nav-item tds--product-name tds-button--hover">
          <CustomText class="tds-site-nav-item-text">Model Y</CustomText>
        </router-link>
      </li>
      <li>
        <router-link to="/solarroof" class="tds-site-nav-item tds--product-name tds-button--hover">
          <CustomText class="tds-site-nav-item-text">Solar Roof</CustomText>
        </router-link>
      </li>
      <li>
        <router-link to="/solarpanels" class="tds-site-nav-item tds--product-name tds-button--hover">
          <CustomText class="tds-site-nav-item-text">Solar Panels</CustomText>
        </router-link>
      </li>
      </ol>
      <!-- Column 3 -->
      <ol class="tds-site-nav-items tds-align--end">
        <li>
          <router-link to="/shop" class="tds-site-nav-item tds--product-name tds-button--hover">
            <CustomText class="tds-site-nav-item-text">Shop</CustomText>
          </router-link>
        </li>
        <li>
          <router-link to="/account" class="tds-site-nav-item tds--product-name tds-button--hover">
            <CustomText class="tds-site-nav-item-text">Account</CustomText>
          </router-link>
        </li>
        <li>
          <button type="button" class="tds-site-nav-item tds-button--hover">
            <CustomText class="tds-site-nav-item-text">Menu</CustomText>
          </button>
        </li>
      </ol>
  </header>
  </div>
</template>

<script>
import TeslaIcon from '@/icons/tesla-icon.svg'
import CustomText from './CustomText.vue'

export default {
  name: 'MainHeader',
  components: {
    TeslaIcon,
    CustomText
  }
}
</script>

<style scoped>
    @font-face{font-display:swap;font-family:Gotham SSm;font-style:normal;font-weight:500;src:url(https://cdn-design.tesla.com/tds-fonts/3.x/woff2/GothamSSm-Medium_Web.woff2) format("woff2")}
.tds-site-header{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    position: relative;
    z-index: 10;
    font-family: "Gotham SSm", -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
.tds--fade-in{
    animation: 1s ease;
}
.tds-site-logo {
  display: flex;
  align-items: center;
}
.tds-site-nav-items {
    align-items: center;
    display: flex;
    margin: 0;
    min-height: 54px;
}
.tds-site-nav-item {
    --tds-icon--size: 26px;
    --tds-nav-item--color: var(--tds-color--grey10);
    --tds-nav-item--width: auto;
    align-items: center;
    border-radius: 12px;
    color: var(--tds-nav-item--color);
    display: inline-flex;
    inline-size: auto;
    font-weight: 500;
    min-block-size: 32px;
    padding: 4px 8px;
    transition: color .33s ease,background-color .33s ease;
}
.tds-site-logo-link {
    box-shadow: none;
    display: inline-flex;
    padding-inline-start: 16px;
    padding-right: 8px;
}
.tds-align--start{
    min-inline-size: 245px;
    padding-left: 32px;
    padding-inline-start: 32px;
}
.tds-align--center{
    flex-grow: 1;
    justify-content: center;
    -webkit-padding-start: 8px;
    -webkit-inline-end: 8px;
    -webkit-padding-end: 8px;
    -webkit-inline-start: 8px;
}
.tds-align--end{
    min-inline-size: 245px;
    -webkit-padding-end: 32px;
    padding-inline-end: 32px;
}
.tds-icon {
    --tds-icon--cancel-margin: calc(30px/-5);
    --tds-icon--fill: var(--tds-color--grey10,#171a20);
    --tds-icon--stroke: var(--tds-color--grey10,#171a20);
    background: transparent;
    block-size: 30px;
    content: "";
    display: block;
    inline-size: 30px;
    max-width: 100%;
    min-block-size: 30px;
    min-inline-size: 30px;
    overflow: hidden;
    text-indent: -9999px;
}
.tds-icon-logo-wordmark {
    inline-size: calc(30px*4);
}
.tds-animate--backdrop{
    backdrop-filter: unset;
    background-color: transparent;
}
.tds-button--hover:hover{
    backdrop-filter: blur(16px);
    background-color: hsla(0,0%,0%,.06);
    border-radius: 12px;
    transition:
    opacity 0.5s ease,
    visibility 0s 0.5s;
}
.tds--product-name{
  white-space: nowrap;
}
.tds-site-nav-item-text{
  color: var(--tds-color--grey10);
  margin: 0 8px;
  transition: color .33s ease;
}
.tds-site-header-wrapper{
  position: absolute;
  width: 100vw;
}
button{
    background-color: transparent;
    cursor: pointer;
}
</style>
