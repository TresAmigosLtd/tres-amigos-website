import React from 'react'
import Container from './container'
import ContactUsWidget from "@components/contactUsWidget";

export default function Footer() {
    return (
        <Container className='relative min-h-screen pt-4 flex items-center'>
            <ContactUsWidget/>
            <div className='my-8 -mb-8 pb-4 text-sm text-center text-gray-600 dark:text-gray-400 bottom-0 absolute left-1/2 -translate-x-1/2'>
                Made with ♥ and CSS by 3 Amigos
            </div>
        </Container>

    )
}
