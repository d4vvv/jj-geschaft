'use client'

import { storyblokInit } from '@storyblok/react/rsc'
import { PropsWithChildren } from 'react'

storyblokInit({
  components: {},
  enableFallbackComponent: true,
})

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}
