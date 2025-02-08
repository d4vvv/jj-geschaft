import { storyblokEditable } from '@storyblok/react/rsc'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Hero = (props: any) => {
  return (
    <section {...storyblokEditable(props.blok)}>
      <h1>{props.blok.header}</h1>
    </section>
  )
}
