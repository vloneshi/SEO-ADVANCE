import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="Belia.Twelve - Handmade Accessories"
        description="Belia.twelve adalah destinasi aksesoris handmade pilihan, menghadirkan gelang, jam tangan, keychain, serta berbagai kreasi rajut seperti crochet dengan sentuhan detail dan kualitas terbaik."
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <FeaturedBlog></FeaturedBlog>
      {/* <Testimonial></Testimonial> */}
    </Layout>
  </div>
)

export default IndexPage
