import { Hero } from '@/components/Hero'
import { LandingPage } from '@/components/LandingPage'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: LandingPage,
    hero: Hero,
  },
  enableFallbackComponent: true,
})
