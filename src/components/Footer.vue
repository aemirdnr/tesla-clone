<template>
  <div class="footer">
      <footer class="site-footer">
          <nav class="footer-nav">
              <ul class="content-list">
                  <li class="footer-item">
                      <a href="/" class="text-set">Tesla © 2021</a>
                  </li>
                  <li class="footer-item hide-on-mobile">
                      <a href="/" class="text-set">Privacy & Legal</a>
                  </li>
                  <li class="footer-item">
                      <a href="/" class="text-set">Contact</a>
                  </li>
                  <li class="footer-item">
                      <a href="/" class="text-set">Careers</a>
                  </li>
                  <li class="footer-item">
                      <a href="/" class="text-set">News</a>
                  </li>
                  <li class="footer-item hide-on-mobile">
                      <a href="/" class="text-set">Engage</a>
                  </li>
                  <li class="footer-item hide-on-mobile">
                      <a href="/" class="text-set">Locations</a>
                  </li>
              </ul>
          </nav>
      </footer>
  </div>
</template>

<script>
export default {

}

</script>

<style scoped>
.footer {
    position:relative;

}
.site-footer {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;

    background-color: transparent;
    flex-direction: row;
    flex-wrap: nowrap;

    padding: 0;
    inset-inline-start: 0;
    line-height: 21px;
    font-size: 12px;
    font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 400;
}
.footer-nav {
    display: block;
    inline-size: 100%;
    bottom: 0;
}
.content-list {
    display: flex;

    -webkit-box-align: center;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;

    width: fit-content;
    min-height: 70px;
    margin: 0 auto;
}
.footer-item {
    color: var(--tds-color--grey30);
    font-weight: 500;
    font-family: "Gotham SSm", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

    padding-inline-start: 0;
    margin-block-end: 0;
    margin-inline-end: calc(8px + .5em);
}
@media (max-width: 1200px) {
.hide-on-mobile {
    display: none;
}
}
</style>
