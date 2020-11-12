// index.js
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq'
import client from '../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = (props) => {
  const { posts = [] } = props
  return (
    <div>
      <h1>Welcome to a blog!</h1>
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
