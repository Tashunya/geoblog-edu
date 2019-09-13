<template>
<div class="geo-blog">
  <AppMenu></AppMenu>
  <div class="panes">
    <BlogMap></BlogMap>
  </div>
</div>
</template>

<script>
import AppMenu from './AppMenu.vue'
import BlogMap from './BlogMap.vue'

export default {
  components: {
    AppMenu,
    BlogMap
  },
}
</script>
