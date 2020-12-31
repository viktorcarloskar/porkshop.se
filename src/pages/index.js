import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import chop from '../images/chop.png'

import Checkout from '../components/checkout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={chop} />
    </div>
  </Layout>
)

export default IndexPage
