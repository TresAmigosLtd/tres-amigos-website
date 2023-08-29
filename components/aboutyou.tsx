import Image from 'next/image'
import React, { ReactNode } from 'react'
import Container from './container'
import { categoryGradients } from '@components/skillMatrix'
import { Benefit, Service } from '@data/aboutyou'

export default function Aboutyou({
  data,
  imgPos,
}: {
  data: Service
  imgPos?: 'right'
}) {
  return (
    <>
      <section className='flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap px-2'>
        <div
          className={`hidden lg:flex items-center justify-center w-full lg:w-1/2 ${
            imgPos === 'right' ? 'lg:order-1' : ''
          }`}
        >
          <div>
            <Image
              src={data.image}
              width='521'
              height='482'
              alt='Benefits'
              layout='intrinsic'
              placeholder='blur'
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            imgPos === 'right' ? 'lg:justify-end' : ''
          }`}
        >
          <div>
            <div className='flex flex-col w-full mt-4'>
              <h3 className='max-w-2xl mt-3 text-2xl md:text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white'>
                {data.title}
              </h3>

              <p className='max-w-2xl py-4 text-lg md:text-xl leading-normal text-gray-500  dark:text-gray-300'>
                {data.desc}
              </p>
            </div>

            <div className='w-full mt-5'>
              {data.bullets.map((benefit, index) => (
                <BenefitItem key={index} benefit={benefit}>
                  {benefit.desc}
                </BenefitItem>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function BenefitItem({
  benefit,
  children,
}: {
  benefit: Benefit
  children: ReactNode
}) {
  return (
    <>
      <div className='flex items-center mt-8 space-x-3 max-w-2xl'>
        <div
          className={`flex items-center justify-center flex-shrink-0 mt-1 mr-3 ${
            categoryGradients[benefit.category]
          } animate-gradient rounded-md w-16 h-16 `}
        >
          {React.cloneElement(benefit.icon, {
            className: 'w-12 h-12 text-indigo-50',
          })}
        </div>
        <div>
          <h4 className='text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200'>
            {benefit.title}
          </h4>
          <p className='text-sm md:text-base mt-1 text-gray-500 dark:text-gray-400'>
            {children}
          </p>
        </div>
      </div>
    </>
  )
}
