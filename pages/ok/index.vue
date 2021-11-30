<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useHead } from '~/composables/useHead'

export default defineComponent({
  setup() {
    useHead()
    return {}
  },
  head: {},
})
</script>

<template>
  <div>ok: setup function pattern</div>
</template>
