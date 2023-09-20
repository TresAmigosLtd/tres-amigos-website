import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { useRouter } from 'next/router'
import DarkSwitch from '@components/DarkSwitch'

export default function Navbar() {
  const router = useRouter()
  const navigation = [
    { label: 'About you', scrollTo: '#aboutyou' },
    { label: 'About us', scrollTo: '#aboutus' },
    { label: 'Projects', scrollTo: '#projects' },
    { label: 'Contact', scrollTo: '#contact' },
  ]

  const activeNavEntry = `
      before:opacity-10 
      before:h-full  
      before:w-full  
      
      after:opacity-100 
      after:animate-[cursor_1.1s_step-start_infinite]
  `

  const inactiveNavEntry = `
      before:opacity-0
      before:w-0
      before:h-px
      
      after:opacity-0
  `

  const clickableButton =
    'flex-none px-2 py-1 ml-auto text-gray-500 rounded-md transition-opacity hover:text-gray-500 focus:text-gray-500 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700'
  return (
    <div className='w-full sticky top-0 bg-translucent z-50'>
      <nav className='container h-16 relative flex flex-wrap items-center justify-between px-4 md:px-8 mx-auto lg:justify-between xl:px-0'>
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-1 flex-wrap items-center justify-between lg:w-auto relative'>
                <Link href='/'>
                  <a className='flex-1 flex items-center space-x-2 text-2xl font-medium text-gray-800 dark:text-gray-100'>
                    <span>3 Amigos</span>
                  </a>
                </Link>
                <DarkSwitch className={`flex lg:hidden ${clickableButton}`} />
                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className={`lg:hidden ${clickableButton}`}
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className='absolute top-6 py-4 border-2 border-gray-900 dark:border-gray-100 rounded-lg bg-white dark:bg-trueGray-900 backdrop-blur-lg flex flex-wrap w-full my-5 lg:hidden'>
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.scrollTo}>
                        <a className='w-full px-4 py-2 rounded-lg'>
                          {item.label}
                        </a>
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu, index) => {
              let active = router.asPath == `/${menu.scrollTo}`
              return (
                <li className='navbar__item relative mr-2 ml-1.5' key={index}>
                  <Link href={menu.scrollTo}>
                    <a
                      className={`
                      ${active ? activeNavEntry : inactiveNavEntry}
                      inline-block
                      pl-4 pr-6 py-2
                      text-lg font-normal text-gray-800 no-underline dark:text-gray-200
                      focus:outline-none

                      before:absolute
                      before:bg-gray-800
                      before:left-0
                      before:top-0
                      before:rounded-lg
                      before:transition-all

                      before:hover:opacity-30
                      before:hover:w-full

                      dark:before:bg-white

                      after:absolute
                      after:bg-gray-800
                      after:h-0.5
                      after:right-3
                      after:bottom-3
                      after:w-2.5
                      after:transition-all

                      dark:after:bg-white
                      `}
                    >
                      {menu.label}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <DarkSwitch className={`hidden lg:flex ${clickableButton}`} />
      </nav>
    </div>
  )
}
