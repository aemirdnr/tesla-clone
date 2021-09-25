<template>
  <div class="main">
      <main role="main" class="main-shell">
        <!-- Model S -->
        <section class="main-section">
            <div class="block-content">
                <h1 class="headline">Model S</h1>
                <h2 class="subline">Order Online for <a href="/">Touchless Delivery</a></h2>
                <div class="block-center"></div>      
                <div class="button-menu">
                    <a class="primary-button">
                        <span style="color: #fff">Custom Order</span>
                    </a>
                    <a class="primary-button tertiary-button">
                        <span>Existing Inventory</span>
                    </a>
                </div>
                <ul class="icon-box">
                    <li>
                        <span class="icon-animation">
                            <DownArrow class="down-arrow"/>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="block-background">
                <picture class="main-picture" data-iesrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop">
                    <source srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/ba3606ef-ce2d-41e4-90aa-bb13d767bb1a/bvlatuR/std/1000x1576/ms-homepage-mobile" media="(max-width: 599px)">
                    <source srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/ba3606ef-ce2d-41e4-90aa-bb13d767bb1a/bvlatuR/std/1000x1576/ms-homepage-mobile" media="(min-width: 600px) and (orientation:portrait)">
                    <source srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop" media="(min-width: 600px)">
                    <img class="picture-set" src="https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop" srcset="https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop">
                </picture>
            </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText.vue'
import DownArrow from '@/icons/down-arrow.svg'

export default {
  name: 'Main',
  components: {
      DownArrow,
      CustomText
  }
}
</script>

<style scoped>
.main-shell {
    display: block;
    max-width: 100vw;
    min-block-size: 100vh;
}
.main-section {
    display: flex;
}
.block-background {
    position: relative;
    width: 100%;
    height: auto;
}
.main-picture {
    display: block;
    height: auto;
}
.picture-set {
    display: block;
    position: static;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    pointer-events: none;
}
.block-content {
    position: absolute;
    display: block;
    top: 28%;
    left: 43%;
    margin: -100px 0 0 -150px;
    z-index: 1;
}
.headline {
    display: block;
    text-align: center;
    color: var(--tds-color--grey20);
    font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -.6px;
    line-height: 48px;
}
.subline {
    display: block;
    text-align: center;
    font-weight: 400;
    font-family: "Gotham Book", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: var(--tds-color--grey20);
    min-height: 27px;
    font-size: 14px;
    line-height: 1.414;
    padding-top: 0;
}
.subline a {
    text-align: initial;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    box-shadow: 0 1px 0 0 currentColor;
    transition: box-shadow .33s cubic-bezier(0.5,0,0,0.75),color .33s ease;
}
.subline a:hover {
    box-shadow: 0 2px 0 0 currentColor;
}
.block-center {
    display: flex;
    margin-top: calc(56vh + 20px);
}
.button-menu {
    text-align: center;
    align-items: center;
    display: grid;
    gap: 16px 24px;
    min-width: calc(min(100vw,1140px)/12*2 - 96px);
    grid-template-columns: repeat(auto-fit,minmax(0,1fr));;
    grid-template-rows: repeat(auto-fit,minmax(0,1fr));
    max-width: 100vw;
    margin-top: 16px;
    margin-bottom: 16px;
    justify-content: stretch;
}
.primary-button {
    min-width: calc(8px*32);
    max-width: calc(min(100vw, 1140px)/12*4 - 120px);
    width: auto;

    left: 0;
    margin-left: 0;
    margin-right: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding: 4px 24px;

    opacity: 1;
    background-color: rgba(23,26,32,0.8);

    position: relative;
    justify-content: center;
    align-items: center;
    block-size: 40px;
    border: 3px solid transparent;
    border-radius: 32px;
    display: inline-flex;

    text-align: center;
    text-transform: uppercase;
    line-height: 1.2;
    font-size: 12px;
    font-weight: 500;
    font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
.tertiary-button {
    background-color: rgba(255, 255, 255, 0.8);
}
.icon-box {
    display: flex;
    opacity: 1;
    transform: translate3d(0,20px,0);

    text-align: center;
    justify-content: center;
    
    -webkit-box-pack: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;

    flex-direction: column;
    flex-wrap: nowrap;
    flex-flow: column;

    min-inline-size: 30px;

    list-style-type: none;
    margin: 0 0 6vh;
    min-height: 18px;
    min-width: 218px;
    padding: 0;

    transition: all .5s ease-in-out 1.5s;
}
.down-arrow {
    display: block;
    content: "";
    background-color: transparent;
    block-size: 70px;
    inline-size: 70px;
    max-width: 100%;
    min-block-size: 70px;
    min-inline-size: 70px;
    overflow: hidden;
    text-indent: -9999px;
    transition: fill .3s ease,stroke .3s ease;
}
@keyframes tds-keyframe--bounce{
    0%,20%,50%,80%,
    to {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
    40% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px)
    }
    60% {
        -webkit-transform:translateY(3px);
        transform:translateY(3px)
    }
}
.icon-animation {
    -webkit-box-pack: center;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0 auto;
    height: 24px;
    width: 24px;
    position: relative;
    overflow: hidden;

    animation-name: tds-keyframe--bounce;
    animation-iteration-count: infinite;
    animation-duration: 2s;
}
</style>
