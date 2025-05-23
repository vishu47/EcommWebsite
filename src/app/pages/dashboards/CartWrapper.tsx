import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageData } from '../../../uw/providers/PageData'
import { toast } from 'react-toastify'

type Props = {}

export default function CartWrapper({ }: Props) {
    const { cart, setCart } = usePageData()
    console.log(cart)
    const navigate = useNavigate()
    const [price, setPrice] = useState<any>({})


    const UpdateCart = async (type: any, id: any) => {
        const index = cart.findIndex((cart: any) => cart.id === id);
        const updateCart = [...cart]
        if (updateCart[index].quantity <= 1 && type == "minus") return toast.dark('can not do less than 1 item')

        if (type === "minus" || type === "plus") {
            updateCart[index] = {
                ...updateCart[index],
                quantity: type === "minus" ? updateCart[index].quantity - 1 : updateCart[index].quantity + 1
            }
            setCart(updateCart)
        }

        if (type === "delete") {
            console.log(index, type)
            updateCart.splice(index, 1);
            setCart(updateCart)
        }
        CalculateData()
    }

    const CalculateData = () => {
        const totalPrice = cart.reduce((sum: number, item: any) => sum + (parseInt(item.price) * parseInt(item.quantity)), 0)
        const savedPrice = cart.reduce((sum: number, item: any) => sum + (totalPrice * parseInt(item.discount)) / 100, 0)
        const tax = (totalPrice * 9) / 100
        const storePickup = 25
        const res = {
            originalPrice: totalPrice,
            savings: savedPrice,
            storePickup: storePickup,
            tax: (totalPrice * 18) / 100,
            total: (totalPrice - savedPrice) + storePickup + tax,
        }
        setPrice(res)
    }

    useEffect(() => {
        CalculateData()
    }, [cart])



    return (
        <section className="bg-white py-8 antialiased md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {
                                cart?.map((item: any, index: any) => {
                                    return (
                                        <div className="rounded-lg border border-gray-200 bg-[#EEEEEE] p-4 shadow-sm  md:p-6">
                                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                <a href="#" className="shrink-0 md:order-1">
                                                    <img className="h-20 w-20" src={item?.thumbnail} alt="imac image" />
                                                </a>

                                                <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                                <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                    <div className="flex items-end flex-col">
                                                        <div className="flex items-center">
                                                            <button onClick={() => { UpdateCart("minus", item?.id) }} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-rose-300 bg-rose-100 hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-gray-100 ">
                                                                <svg className="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                                </svg>
                                                            </button>
                                                            <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" placeholder="" value={item?.quantity} required />
                                                            <button onClick={() => { UpdateCart("plus", item?.id) }} type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-rose-300 bg-rose-100 hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-gray-100 ">
                                                                <svg className="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <p className="text-xs text-gray-900 mt-2">max discount : {item.discount}%</p>
                                                    </div>

                                                    <div className="text-end md:order-4 md:w-32 ">
                                                        <p className="text-base font-bold text-gray-900">₹{item?.price}</p>
                                                    </div>
                                                </div>

                                                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                    <a href="#" className="text-base font-medium text-gray-900 hover:underline">{item?.name}</a>
                                                    <div className='flex flex-row gap-4 justify-between items-center'>
                                                        <div className="flex items-center gap-4">
                                                            <button onClick={() => UpdateCart("delete", item?.id)} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                                </svg>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        {cart?.length <= 0 &&
                            <div className='w-full m-auto flex justify-center items-center mt-20'>
                                <div className='bg-[#eeeeee] border-2 border-white rounded-md text-center h-40 w-1/2 flex justify-center items-center'>
                                    <p className='flex justify-center m-auto text-[20px]'>
                                        Please add products in to the cart.
                                    </p>
                                </div>
                            </div>

                        }
                    </div>

                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-[#eeeeee] p-4 shadow-sm sm:p-6">
                            <p className="text-xl font-semibold text-gray-900 ">Order summary</p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 ">Original price</dt>
                                        <dd className="text-base font-medium text-gray-900 ">₹{price?.originalPrice}</dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 ">Savings</dt>
                                        <dd className="text-base font-medium text-green-600">-₹{price?.savings}</dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 ">Store Pickup</dt>
                                        <dd className="text-base font-medium text-gray-900 ">₹{price?.storePickup}</dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500">Tax</dt>
                                        <dd className="text-base font-medium text-gray-900 ">₹{price?.tax}</dd>
                                    </dl>
                                </div>

                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                    <dt className="text-base font-bold text-gray-900">Total</dt>
                                    <dd className="text-base font-bold text-gray-900">₹{price?.total}</dd>
                                </dl>
                            </div>

                            <button onClick={() => { CalculateData() }} className="flex w-full items-center justify-center rounded-lg bg-rose-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</button>

                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                <a onClick={() => { navigate('/dashboard') }} href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                                    Continue Shopping
                                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}