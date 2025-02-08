import { storyblokEditable } from '@storyblok/react'

export const LandingPage = (props: any) => {
  console.log({ props })

  return <div {...storyblokEditable(props.blok)}>{props.blok.header}</div>
}
