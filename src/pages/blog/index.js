import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url('/img/sparkler-hand-cropped.jpg')`,
            backgroundAttachment: `fixed`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 has-text-center"
            style={{
              boxShadow: '0.5rem 0 0 #77B8AAC8, -0.5rem 0 0 #77B8AAC8',
              backgroundColor: '#77B8AAC8',
              borderRadius: '5px',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Posts
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
