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
  const { photos = [] } = props
  return (
    <div>
      <h1>PLaying with next</h1>

      {photos.map(
        ({ _id, title = '', slug = '', _updatedAt = '', mainImage }) =>
          slug && (
            <li key={_id}>

              <img
                src={urlFor(mainImage)
                  .width(200)
                  .url()}
              />
              <Link href='/photo/[slug]' as={`/photo/${slug.current}`}>
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
  photos: await client.fetch(groq`
      *[_type == "photo" && publishedAt < now()]|order(publishedAt desc)
    `)
})

export default Index
