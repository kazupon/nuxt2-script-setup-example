import { useMeta } from '@nuxtjs/composition-api'
import { Route } from 'vue-router/types'
import { meta } from '../meta'

export const useHead = (/* route: Route */) => {
  const domainName = 'sample'
  const { title, description, heading } = meta[domainName].index

  console.log('raw meta', title, description, heading)
  window.$nuxt.$emit('setHeading', heading)

  useMeta({
    title,
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
    ],
  })
}

export const useHeadTemporary = (route: Route) => {
  const domainName = 'sample'
  const routeName = route.name
  const { title, description, heading } = meta[domainName][routeName || 'index']
  window.$nuxt.$emit('setHeading', heading)

  useMeta({
    title,
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
    ],
  })
}