import React, { useState } from 'react'
import { PageDataProvider } from '../../../uw/providers/PageData'

type Props = {
    products: any
    category: any
    SelectCategory: any
    AddtoCart: any
}

export default function ProductList({ products, category, SelectCategory, AddtoCart }: Props) {
    // state
    const [sort, setSort] = useState(false)
    const [filters, setFilters] = useState(false)

    const SelectCategoryAndClose = (cat: any) => {
        SelectCategory(cat)
        setFilters(false)
    }


    return (
        <section className="py-8 antialiased md:py-12 ml-12">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                    <div>
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <a href="#" className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-primary-600 ">
                                        <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                        </svg>
                                        <a href="#" className="ms-1 text-sm font-medium text-gray-800 md:ms-2">Products</a>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">ALL</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className='relative z-50'>
                            <button onClick={() => sort ? setFilters(false) : setFilters(true)} data-modal-toggle="filterModal" data-modal-target="filterModal" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-rose-200 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 -gray-700 sm:w-auto">
                                <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
                                </svg>
                                Filters
                                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {/* <div className='relative z-50'>
                            <button onClick={() => sort ? setSort(false) : setSort(true)} id="sortDropdownButton1" data-dropdown-toggle="dropdownSort1" type="button" className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-rose-200 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 -gray-700 sm:w-auto">
                                <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
                                </svg>
                                Sort
                                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>
                            <div id="dropdownSort1" className={`${sort ? "block" : "hidden"} absolute top-12 right-0 shadow-lg shadow-gray-600 z-50 w-40 divide-y divide-gray-100 rounded-lg bg-gray-900 gray-700`} data-popper-placement="bottom">
                                <ul className="p-2 text-left text-sm font-medium text-gray-500 gray-400" aria-labelledby="sortDropdownButton">
                                    <li>
                                        <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-white"> The most popular </a>
                                    </li>
                                    <li>
                                        <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-white"> Newest </a>
                                    </li>
                                    <li>
                                        <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-white"> Increasing price </a>
                                    </li>
                                    <li>
                                        <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-white"> Decreasing price </a>
                                    </li>
                                    <li>
                                        <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-white"> No. reviews </a>
                                    </li>
                                    <li>
                                        <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 text-white"> Discount % </a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
                {products?.length > 0 ?
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 w-full">
                        {

                            products?.map((item: any, index: any) => {
                                return (
                                    <div className="rounded-lg border border-gray-200 bg-[#EEEEEE] p-6 shadow-sm hover:scale-105 ease-in-out duration-150 hover:border-rose-600 hover:border-[1px] hover:shadow-md hover:shadow-rose-200">
                                        <div className="h-56 w-full">
                                            <a href="#" className=''>
                                                <img className="mx-auto h-full dark:hidden" src={item?.thumbnail} alt="" />
                                                <img className="mx-auto hidden h-full dark:block" src={item?.thumbnail} alt="" />
                                            </a>
                                        </div>

                                        <div className="pt-6">
                                            <div className="mb-4 flex items-center justify-between gap-4">
                                                <span className="me-2 rounded bg-primary-100 py-0.5 text-xs font-medium text-rose-700"> Up to {(item?.discountPercentage)?.toFixed(0)} off </span>
                                                {/* 
                                            <div className="flex items-center justify-end gap-1">
                                                <button type="button" data-tooltip-target="tooltip-quick-look-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                    <span className="sr-only"> Quick look </span>
                                                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                                        <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>
                                                </button>
                                                <div id="tooltip-quick-look-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                    Quick look
                                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                                </div>

                                                <button type="button" data-tooltip-target="tooltip-add-to-favorites-5" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                    <span className="sr-only"> Add to Favorites </span>
                                                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                                                    </svg>
                                                </button>
                                                <div id="tooltip-add-to-favorites-5" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
                                                    Add to favorites
                                                    <div className="tooltip-arrow" data-popper-arrow=""></div>
                                                </div>
                                            </div> */}
                                            </div>

                                            <a href="#" className="text-lg font-semibold leading-tight text-rose-800 hover:underline ">{item?.title}</a>

                                            <div className="mt-2 flex items-center gap-2">
                                                <p className="text-sm font-medium text-black">{item?.rating}</p>
                                                <p className="text-sm font-medium text-gray-700">({item?.brand})</p>
                                            </div>

                                            <ul className="mt-2 flex items-center gap-4">
                                                <li className="flex items-center gap-2">
                                                    <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                                                        />
                                                    </svg>
                                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 capitalize">{
                                                        item?.tags?.map((tag: any, index: any) => {
                                                            return (
                                                                <>{tag}{index < item?.tags?.length - 1 ? ',' : ''}{" "}</>
                                                            )
                                                        })
                                                    }</p>
                                                </li>
                                            </ul>
                                            <li className='flex items-center gap-2'>
                                                <p className="text-xs mt-1 font-medium text-gray-500 dark:text-gray-400 capitalize">{item?.warrantyInformation}</p>
                                            </li>

                                            <div className="mt-4 flex items-center justify-between gap-4">
                                                <p className="text-2xl font-extrabold leading-tight text-rose-900 ">₹{(item.price * 10).toFixed(0)}</p>

                                                <button onClick={() => AddtoCart(item)} type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-[#76ABAE] ease-in-out duration-150 hover:bg-rose-800 focus:outline-none focus:ring-4  focus:ring-primary-300">
                                                    <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                                                    </svg>
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                    :
                    <div className=' flex justify-center flex-col bg-[#eeeeee] items-center m-auto p-12 rounded-lg mt-12'>
                        <div role="status">
                            <svg aria-hidden="true" className="w-20 h-20 text-gray-200 animate-spin  fill-rose-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                        <p className='w-full text-[24px] text-center text-rose-600 mt-4'>Products are loading...</p>
                    </div>
                }
                {/* <div className="w-full text-center">
                    <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
                </div> */}
            </div>
            <form action="#" method="get" id="filterModal" tabIndex={-1} aria-hidden="true" className={`${filters ? "block" : "hidden"}  fixed left-0 right-0 top-0 z-50  h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full`}>
                <div className="relative h-full w-full max-w-xl md:h-auto m-auto shadow-lg shadow-gray-600 rounded-md mt-20">
                    <div className="relative rounded-lg bg-white shadow">
                        <div className="flex items-start justify-between rounded-t p-4 md:p-5">
                            <h3 className="text-lg font-normal text-gray-800 ">Filters</h3>
                            <button onClick={() => { setFilters(false) }} type="button" className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="filterModal">
                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="px-4 md:px-5">
                            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                                <ul className="-mb-px flex flex-wrap text-center text-sm font-medium" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                    <li className="mr-1" role="presentation">
                                        <button className="inline-block pb-2 pr-1" id="brand-tab" data-tabs-target="#brand" type="button" role="tab" aria-controls="profile" aria-selected="false">Category</button>
                                    </li>
                                </ul>
                            </div>
                            <div id="myTabContent ">
                                <div className="" id="brand" role="tabpanel" aria-labelledby="brand-tab">
                                    <div className="space-y-2 flex flex-wrap gap-2 pb-4">
                                        {category?.map((cat: any) => {
                                            return (
                                                <span className='bg-rose-800 text-white p-2 px-3 rounded-md cursor-pointer' onClick={() => SelectCategoryAndClose(cat)}>
                                                    {cat}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section >
    )
}