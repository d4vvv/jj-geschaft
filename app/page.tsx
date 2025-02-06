import { getStoryblokApi } from '@storyblok/react/rsc'

const fetchLandingPage = async () => {
  const client = getStoryblokApi()
  const response = await client.getStory('landing/landing-page', {
    version: 'draft',
  })

  return response.data.story
}

export default async function Home() {
  const { content } = await fetchLandingPage()
  console.log({ content })

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
        {content.header}
      </h1>
      <p className='text-muted-foreground'>
        We specialize in creating amazing digital experiences. Explore our site
        to learn more about what we do and how we can help you.
      </p>
    </div>
  )
}
