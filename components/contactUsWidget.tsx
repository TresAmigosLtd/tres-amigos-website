import {CheckIcon, XIcon} from "@heroicons/react/solid";
import React, {useState} from 'react'
import {useForm, useWatch} from 'react-hook-form'

export {}

export default function ContactUsWidget() {
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: {errors, isSubmitSuccessful, isSubmitting},
    } = useForm({
        mode: 'onTouched',
    })
    const [isSuccess, setIsSuccess] = useState(false)
    const [Message, setMessage] = useState('')

    const userName = useWatch({control, name: 'name', defaultValue: 'Someone'})

    const onSubmit = async (data, e) => {
        console.log(data)
        await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(data, null, 2),
        })
            .then(async response => {
                let json = await response.json()
                if (json.success) {
                    setIsSuccess(true)
                    setMessage(json.message)
                    e.target.reset()
                    reset()
                } else {
                    setIsSuccess(false)
                    setMessage(json.message)
                }
            })
            .catch(error => {
                setIsSuccess(false)
                setMessage('Client Error. Please check the console.log for more info')
                console.log(error)
            })
    }


    const inputClass = (error) =>
        `bg-gray-200 w-full dark:bg-trueGray-700 px-3 py-2 placeholder-gray-400 border-b rounded border-gray-300 focus:outline-none focus:ring ${
            error
                ? 'border-red-600 focus:border-red-600 ring-red-100'
                : 'border-gray-300 focus:border-indigo-600 ring-indigo-100'
        }`;

    return (
        <section className="w-full">
            <h2 className="lg:w-1/2 mt-3 text-2xl md:text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight dark:text-white">Contact</h2>
            <p className="lg:w-1/2 max-w-2xl py-4 text-sm md:text-base mt-1 text-gray-500 dark:text-gray-400">
                Get in touch if you are looking to get a high-performing engineering team to
                deliver great software fast.
            </p>
            <form
                className="lg:w-1/2 w-full"
                onSubmit={handleSubmit(onSubmit)} noValidate>
                <div
                    className="grid grid-cols-2 gap-4 bg-gray-100 dark:bg-trueGray-800 dark:text-gray-200 p-4 rounded-xl shadow-md"
                >
                    <input
                        type='hidden'
                        value='19fb1c01-2a37-45e9-822a-b67726f70cbc'
                        {...register('apikey')}
                    />
                    <input
                        type='hidden'
                        value={`${userName} sent a message via the Tres Amigo Website`}
                        {...register('subject')}
                    />
                    <input
                        type='hidden'
                        value='Tres Amigo Website'
                        {...register('from_name')}
                    />
                    <input
                        type='checkbox'
                        className='hidden'
                        style={{display: 'none'}}
                        {...register('botcheck')}
                    ></input>

                    <input
                        type='text'
                        id='full_name'
                        placeholder={`${errors.name ? errors.name.message : 'Name'}`}
                        {...register('name', {
                            required: 'Full name is required',
                            maxLength: 80,
                        })}
                        className={`col-span-2 md:col-span-1 ${inputClass(errors.message)}`}
                    />

                    <input
                        type='email'
                        id='email'
                        {...register('email', {
                            required: 'Enter your email',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Please enter a valid email',
                            },
                        })}
                        placeholder={`${errors.email ? errors.email.message : 'Email'}`}
                        className={`col-span-2 md:col-span-1 ${inputClass(errors.message)}`}
                    />

                    <textarea
                        rows={4}
                        id='message'
                        {...register('message', {
                            required: 'Enter your Message',
                        })}
                        placeholder={`${errors.message ? errors.message.message : 'Your Message'}`}
                        className={`col-span-2 ${inputClass(errors.message)}`}
                        required
                    ></textarea>
                </div>
                <div
                    className="grid grid-cols-2 gap-4"
                >
                    <div className='col-span-1'>
                        <button
                            type='submit'
                            className='mx-auto mt-8 px-8 py-4 text-lg font-medium text-center dark:text-gray-800 dark:bg-white text-white bg-gray-800 rounded-md '
                        >
                            {isSubmitting ? (
                                <svg
                                    className='w-5 h-5 mx-auto text-white animate-spin'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                >
                                    <circle
                                        className='opacity-25'
                                        cx='12'
                                        cy='12'
                                        r='10'
                                        stroke='currentColor'
                                        strokeWidth='4'
                                    ></circle>
                                    <path
                                        className='opacity-75'
                                        fill='currentColor'
                                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                    ></path>
                                </svg>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </div>

                    {isSubmitSuccessful && isSuccess && (
                        <>
                            <div
                                className='mt-12 flex flex-row items-center justify-end text-center text-white rounded-md'>
                                <CheckIcon
                                    className="h-8 w-8 gradient-blue text-gray-100 dark:text-trueGray-800 rounded-full animate-gradient transition-colors mr-4 border-0"/>
                                <h3 className='py-2 text-lg gradient-blue animate-gradient text-gradient transition-colors'>
                                    Message sent!
                                </h3>
                            </div>
                        </>
                    )}

                    {isSubmitSuccessful && !isSuccess && (
                        <div
                            className='mt-12 flex flex-row items-center justify-end text-center text-white rounded-md'>
                            <XIcon
                                className="h-8 w-8 gradient-pink text-gray-100 dark:text-trueGray-800 rounded-full animate-gradient transition-colors mr-4 border-0"/>
                            <h3 className='py-2 text-lg gradient-pink  animate-gradient text-gradient transition-colors'>
                                Something went wrong...
                            </h3>
                        </div>
                    )}
                </div>
            </form>
        </section>
    )
}
