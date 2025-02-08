import { storyblokEditable } from '@storyblok/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const LandingPage = (props: any) => {
  console.log({ props })

  return <div {...storyblokEditable(props.blok)}>{props.blok.header}</div>
}
