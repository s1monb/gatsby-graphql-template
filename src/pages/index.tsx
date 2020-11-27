import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

interface Props {}

const Index: React.FC<Props> = () => {
  return (
    <Layout>
      <Seo title="Home" />
    </Layout>
  )
}

export default Index
