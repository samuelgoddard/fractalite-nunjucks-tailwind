<div class="fr-page" v-if="loaded && page.layout">
  <div class="fr-page__container">
    <h1 class="fr-page__title">{{ page.title }}</h1>
    <div class="fr-prose fr-page__content" v-html="content"></div>
  </div>
</div>
<div class="fr-page" v-else-if="loaded" v-html="content"></div>
