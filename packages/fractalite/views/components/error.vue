<div class="fr-error fr-error--overlay" :class="{'is-active': name}">
  <div class="fr-error__content">
    <h1 class="fr-error__title">{{ name }}</h1>
    <p class="fr-error__message">{{ message }}</p>
    <pre class="fr-error__stack" v-if="stack">{{ stack }}</pre>
  </div>
</div>
