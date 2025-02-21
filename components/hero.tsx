import Image from 'next/image'
import Container from './container'
import Sidekick from '../public/img/illustrations/sidekick.inline.svg'
import Link from 'next/link'
import { Category, categoryGradients } from '@components/skillMatrix'

export default function Hero() {
  return (
    <>
      <Container className='min-h-screen flex flex-wrap '>
        <div className='flex items-center w-full lg:w-2/3'>
          <div className='max-w-3xl mb-8'>
            <h1 className='text-4xl font-bold font-brand leading-snug tracking-tight text-brandBlue lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white animate-cursor'>
              Strengthen your {' '}
              <span className='text-gradient-all'>high-performing</span>{' '}
              engineering organisation
            </h1>
            <div>
              <p className='pt-2 pb-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300'>
                So that you deliver greater value to customers.
              </p>

              <div className='mt-6 flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row'>
                <Link href='#aboutyou'>
                  <a className='px-8 py-4 text-lg font-medium text-center dark:text-brandBlue dark:bg-white text-white bg-brandBlue rounded-md '>
                    Learn how
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-full md:w-2/3 lg:w-1/3 mx-auto'>
            <Sidekick className='w-auto max-w-md lg:max-w-max m-0 -mt-40 lg:mt-20 lg:-ml-24'/>
        </div>
      </Container>
    </>
  )
}
