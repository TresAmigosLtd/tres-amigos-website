import React from 'react'
import Container from './container'
import ContactUsWidget from '@components/contactUsWidget'
import Rocket from '../public/img/illustrations/rocket.inline.svg'
import Smoke from '../public/img/illustrations/smoke.inline.svg'

export default function Footer() {
  return (
    <Container className='relative min-h-screen h-screen pt-4 flex items-center'>
      <ContactUsWidget />
      <section className='h-full pt-40 -mb-32 hidden sm:block'>
        <Rocket className='h-1/2  relative'/>
        <Smoke className='h-1/2  sticky -mb-20 bottom-0 -z-10'/>
      </section>
      <div className='my-8 -mb-8 pb-4 text-sm text-center text-gray-600 dark:text-gray-400 bottom-0 absolute left-1/2 -translate-x-1/2'>
        Made with ♥ and CSS by 3 Amigos
      </div>
    </Container>
  )
}
