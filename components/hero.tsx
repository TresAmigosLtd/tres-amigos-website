import Image from 'next/image'
import Container from './container'
import heroImg from '../public/img/hero.png'
import Link from 'next/link'
import { Category, categoryGradients } from '@components/skillMatrix'

export default function Hero() {
  return (
    <>
      <Container className='min-h-screen flex flex-wrap '>
        <div className='flex items-center w-full lg:w-2/3'>
          <div className='max-w-3xl mb-8'>
            <h1 className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white animate-cursor'>
              We build your{' '}
              <span className='text-gradient-all'>high-performing</span>{' '}
              engineering teams
            </h1>
            <div>
              <p className='pt-2 pb-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300'>
                You grow engineering competence, and deliver greater
                value to your customers.
              </p>

              <div className='mt-6 flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row'>
                <Link href='#aboutyou'>
                  <a className='px-8 py-4 text-lg font-medium text-center dark:text-gray-800 dark:bg-white text-white bg-gray-800 rounded-md '>
                    Learn how
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-full md:w-2/3 lg:w-1/3 mx-auto'>
          <div className=''>
            <Image
              src={heroImg}
              width='616'
              height='617'
              alt='Hero Illustration'
              layout='intrinsic'
              loading='eager'
              placeholder='blur'
            />
          </div>
        </div>
      </Container>
    </>
  )
}
