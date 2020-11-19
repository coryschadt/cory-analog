// index.js

import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq'
import client from '../client'
import './landing.less'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Index = ({ photos = [] }) => {
  return (
    <div>
      {photos.map(
        ({ _id, title = '', slug = '', mainImage, camera, lens, film }) =>
          <li key={_id}>
            <h1>{camera}: {lens}</h1>
            <h1>{film}</h1>
            <img
              src={urlFor(mainImage)
                .width(200)
                .url()}
            />
          </li>
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
