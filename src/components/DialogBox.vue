<template>
    <transition name="fade">
        <div class="dialog-box"  v-show="$store.state.isHidden">
        <dialog class="tds-modal tds-modal--sheet-right tds-site-header-modal">
            <div class="tds-modal-actions">
                <div class="modal-space"></div>
                    <button aria-label="Close Modal" class="tds-modal-close" type="button" @click="$store.state.isHidden = false">
                        <CloseModal class="tds-icon"/>
                    </button>
                </div>
            <ol class="tds-site-nav-items tds-site-nav-items--vertical">
                <li></li>
                <li>
                    <router-link to="/" class="tds-site-nav-item tds-mini-modal">
                        <CustomText class="tds-site-nav-item-text">Model S</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item tds-mini-modal">
                        <CustomText class="tds-site-nav-item-text">Model 3</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item tds-mini-modal">
                        <CustomText class="tds-site-nav-item-text">Model X</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item tds-mini-modal">
                        <CustomText class="tds-site-nav-item-text">Model Y</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item tds-mini-modal">
                        <CustomText class="tds-site-nav-item-text">Solar Roof</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item tds-mini-modal">
                        <CustomText class="tds-site-nav-item-text">Solar Panels</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Existing Inventory</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Used Inventory</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Trade-In</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Test Drive</CustomText>
                    </router-link >
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Cybertruck</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Roadster</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Semi</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Charging</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Powerwall</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Commercial Energy</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Utilities</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Find Us</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Support</CustomText>
                    </router-link>
                    <router-link to="/" class="tds-site-nav-item">
                        <CustomText class="tds-site-nav-item-text">Investor Relations</CustomText>
                    </router-link>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                    <div aria-label="View available languages" class="tds-card" role="button" tabindex="0">
                        <SelectLang class="tds-icon-globe"/>
                        <div class="tds-card-body">
                            <div style="pointer-events: none;">
                                <strong>United States</strong>
                            </div>
                            <div>
                                <CustomText class="tds-locate-selector-language tds-link tds-link--secondary">English</CustomText>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
        </dialog>
        <div class="tds-modal-backdrop" v-show="$store.state.isHidden" v-on:click="$store.state.isHidden = false"></div>
        </div>
    </transition>
</template>

<script>
import CustomText from '@/components/CustomText.vue'
import CloseModal from '@/icons/close-modal.svg'
import SelectLang from '@/icons/select-language.svg'

export default {
  name: 'DialogBox',
  components: {
    CloseModal,
    CustomText,
    SelectLang
  }
}

</script>

<style scoped>
.tds-modal {
    font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    block-size: 100%;
    display: flex;
    flex-direction: column;
    inline-size: 311px;
    position: fixed;
    overscroll-behavior: contain;
    padding: 0;
    border: 0;
    background-color: #fff;
    color: var(--tds-color--grey20);
    overflow: auto;
    opacity: 1;
    bottom: 50%;
    margin: auto;
    max-inline-size: calc(100vw - 96px);
    min-block-size: 64px;
    border-radius: 0;
    max-block-size: 100vh;
    -webkit-transform: translateX(0) translateY(50%);
    pointer-events: inherit;
    transition: opacity .5s cubic-bezier(0.5,0,0,0.75), transform .5s cubic-bezier(0.5,0,0,0.75), visibility 0s 0s, -webkit-transform .5s cubic-bezier(0.5,0,0,0.75);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.16);
    z-index: 2999;
}
.tds-modal--sheet-right {
    left: auto;
    right: 0;
}
.tds-site-header-modal{
    z-index: 1000000;
    padding-block-end: 200px;
    will-change: scroll-position;
}
.tds-modal-actions{
    display: flex;
    align-items: center;
    background: #fff;
    justify-content: space-between;
    padding: 24px;
    position: sticky;
    top: 0;
    z-index: 1;
}
.tds-modal-close{
    margin: 0;
    top: 0;
    right: 0;
    padding: 0;
    border: 0;
    outline: 0;
    z-index: 10;
    border-radius: 48px;
    transition: background-color .33s ease;
    appearance: none;
    background-color: transparent;
    cursor: pointer;
    position: static;
    backdrop-filter: blur(16px);
}
.tds-modal-close:hover {
    background-color: hsla(0,0%,0%,.04);
    border-radius: 12px;
    transition:
    opacity 0.5s ease,
    visibility 0s 0.5s;
}
.tds-icon{
    background: transparent;
    display: block;
    block-size: 32px;
    content: "";
    inline-size: 32px;
    max-width: 100%;
    min-block-size: 32px;
    min-inline-size: 32px;
    overflow: hidden;
    text-indent: -9999px;
}
.tds-site-nav-items {
    display: flex;
    margin: 0;
    transition: transform .5s ease,-webkit-transform .5s ease;
}
.tds-site-nav-items--vertical {
    align-items: initial;
    flex-direction: column;
    padding: 4px 32px;
}
.tds-site-nav-items--vertical .tds-site-nav-item-text {
    margin: 0 4px;
    transition: color .33s ease;
}
.tds-site-nav-item {
    backdrop-filter: blur(16px);
    display: inline-flex;
    align-items: center;
    border-radius: 12px;
    color: var(--tds-color--grey20);
    inline-size: auto;
    min-block-size: 32px;
    padding: 4px 8px;
    transition: color .33s ease,background-color .33s ease;

    justify-content: space-between;
    margin-block-end: 8px;
    width: 100%;
}
.tds-site-nav-item:hover {
    background-color: hsla(0,0%,0%,.06);
    border-radius: 12px;
    transition:
    opacity 0.5s ease,
    visibility 0s 0.5s;
}
.tds-site-nav-item-text {
    color: var(--tds-color--grey20);
    margin: 0 8px;
    transition: color .33s ease;
    font-weight: 500;
}
.tds-icon-globe {
    margin: calc(30px/-5);
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
.tds-card {
    display: flex;
    background-color: transparent;
    border-radius: 12px;
    padding: 8px 12px;
    max-inline-size: calc(75ch + 16px*2);
    backdrop-filter: blur(16px);
    overflow: hidden;
}
.tds-card:hover {
    background-color: hsla(0,0%,0%,.06);
    border-radius: 12px;
    transition:
    opacity 0.5s ease,
    visibility 0s 0.5s;
}
.tds-card-body {
    flex-grow: 1;
    margin-inline-start: calc(16px*0.75);
    padding-block-end: 0;
    margin-block-end: 0;
}
.tds-link {
    background-color: transparent;
    border: 0;
    padding: 0;
    text-align: initial;
    color: var(--tds-color--grey30);
    cursor: pointer;
    font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    transition: box-shadow .33s cubic-bezier(0.5,0,0,0.75),color .33s ease;
}
.tds-link:hover{
    box-shadow: 0 2px 0 0;
    color: var(--tds-color--gray10);
}
.tds-locate-selector-language{
    display: inline-flex;
    font-size: 12px;
}
.tds-link--secondary {
    box-shadow: 0 0 0 0 transparent;
    font-weight: 500;
}
.tds-modal-backdrop{
    backdrop-filter: blur(4px);
    pointer-events: inherit;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    inline-size: 120vw;
    block-size: 120vh;
    background-color: rgba(0,0,0,0.3);
    z-index: 999;
    transition: background-color .5s ease,backdrop-filter .5s ease,-webkit-backdrop-filter .5s ease;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.tds-mini-modal {
    display: none;
}
@media (max-width: 1200px) {
    .tds-mini-modal {
        display: flex;
    }
}
</style>
