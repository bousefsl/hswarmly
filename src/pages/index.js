import * as React from "react"
import Layout from "../components/Layout"
import HeroContainer from "../components/HeroContainer"
import FeelWarmly from "../components/FeelWarmly"
import HowItWorks from "../components/HowItWorks"
import WhatsIncluded from "../components/WhatsIncluded"
import OurGuarantees from "../components/OurGuarantees"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import FAQs from "../components/FAQs"
import Smallprint from "../components/Smallprint"

export default function Home() {
  return (
    <Layout>
      <HeroContainer />
      <FeelWarmly />
      <HowItWorks />
      <WhatsIncluded />
      <OurGuarantees />
      <Contact />
      <FAQs />
      <Smallprint />
      <Footer />
    </Layout>
  )
}

export function Head() {
  return (
    <>
      <html lang="en" />
      <title>Warmly</title>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#cd4f45" />
      <meta name="msapplication-TileColor" content="#fcdcd9" />
      <meta name="theme-color" content="#fcdcd9"></meta>
    </>
  )
}