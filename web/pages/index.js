// index.js
import { useState } from 'react'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq'
import client from '../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = (props) => {
  const { posts = [] } = props
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h1>PLaying with next</h1>

      <button onClick={ev => setOpen(!open)}>click me, I am a useState hook</button>
      {open &&
        <div>
        Looks like I can do normal stuff here..
        </div>}

            <br />
            <br />
            <br />
      {posts.map(
        ({ _id, title = '', slug = '', _updatedAt = '', mainImage }) =>
          slug && (
            <li key={_id}>

              <img
                src={urlFor(mainImage)
                  .width(200)
                  .url()}
              />
              <Link href='/post/[slug]' as={`/post/${slug.current}`}>
                <a>{title}</a>

              </Link>{' '}
                ({new Date(_updatedAt).toDateString()})
            </li>
          )
      )}
    </div>
  )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `)
})

export default Index
