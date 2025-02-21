import React from 'react'
import Container from './container'

export default function MainSection(props) {
  return (
    <>
    <section
      className={`${
        props.sticky ? `sticky top-16 md:top-18 z-20 bg-translucent` : ''
      } pb-4 pt-0 px-4 md:py-4 w-screen flex flex-col items-center`}
    >
      {props.pretitle && (
        <div className='text-xs md:text-sm font-bold tracking-wider text-gray-300 uppercase'>
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2
          className={` font-brand text-center max-w-2xl -mx-2 mt-3 text-2xl md:text-3xl font-bold leading-snug tracking-tight text-brandBlue lg:leading-tight dark:text-white`}
        >
          {props.title}
        </h2>
      )}
    </section>
  <Container
    id={props.id}
    className={props.className + (props.sticky ? ' !pt-14 ' : '')}
  >

    {props.subtitle && (
      <section
        className={`mx-auto text-center max-w-2xl py-4 text-sm md:text-lg lg:text-xl leading-normal text-gray-500  dark:text-gray-300`}
      >
        {props.subtitle}
      </section>
    )}

    {props.children}
  </Container>
    </>
)
}
