import { storyblokEditable } from '@storyblok/react'
import { StoryblokServerComponent } from '@storyblok/react/rsc'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LandingPage = (props: any) => {
  // console.log({ props })

  return (
    <main {...storyblokEditable(props.blok)}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {props.blok.blocks.map((blok: any) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  )
}
