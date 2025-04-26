import React from 'react'
import Page from '../components/CursorEffectComp/page'
import Hero from '../components/Hero/Hero'

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <section style={{ height: '100vh', position: 'relative' }}>
        <Page />
      </section>
      <section style={{ height: '100vh', position: 'relative' }}>
        <Hero />
      </section>
    </div>
  )
}

export default Home