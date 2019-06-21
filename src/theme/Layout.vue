<template>
  <div>
      <app-header></app-header>
        <section class="main-section section">
          <div class="container content">
            <router-view></router-view>
          </div>
        </section>
      <app-footer></app-footer>
    </div>
</template>

<script>
  import AppFooter from './AppFooter.vue'
  import AppHeader from './AppHeader.vue'
  export default {

    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter
    }
  }
</script>

<style lang="scss">
  $primary: #287AB1;
  @import '~bulma';

  .columns {
    flex-wrap: wrap;
  }
</style>

