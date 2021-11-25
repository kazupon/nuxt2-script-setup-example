<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Index',
  setup() {
    useMeta({
      title: 'My page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    })
    return {}
  },
  head: {},
})
</script>

<template>
  <Tutorial/>
</template>

