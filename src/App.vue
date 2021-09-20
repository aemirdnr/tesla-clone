<template>
  <div id="app">
    <div id="nav">
      <router-link to="/models">Model S</router-link>
      <router-link to="/model3">Model 3</router-link>
      <router-link to="/modelx">Model X</router-link>
      <router-link to="/modely">Model Y</router-link>
      <router-link to="/solarroof">Solar Roof</router-link>
      <router-link to="/solarpanels">Solar Panels</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/account">Account</router-link>
      <router-link to="/menu">Menu</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  @font-face {
    font-family: "Gotham-Light";
    src: url("../public/fonts/Gotham-Font/GothamLight.ttf");
  }
}
</style>
