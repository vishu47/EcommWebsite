import React from 'react'
import { ReactComponent as Logo } from "../../assets/svg/user.svg"
import { Cart, Dashboard, Logout } from '../../helpers/ImageConstants'
type Props = {}

export default function AsideWrapper({ }: Props) {
  return (
    <div className='min-h-screen bg-rose-800 p-4 pt-4 mt-20'>
      <div className='flex justify-start flex-col gap-6'>
        <div className='hover:scale-105 hover:border-black duration-150 ease-in-out flex justify-center items-center border-[1px] border-white m-auto rounded-[12px] py-3 px-3 cursor-pointer'>
          <Dashboard className='h-6 w-6' />
        </div>
        <div className='hover:scale-105 hover:border-black duration-150 ease-in-out flex justify-center items-center border-[1px] border-white m-auto rounded-[12px] py-3 px-3 cursor-pointer'>
          <Cart className='h-6 w-6 text-white' />
        </div>
        <div className='hover:scale-105 hover:border-black duration-150 ease-in-out flex justify-center items-center border-[1px] border-white m-auto rounded-[12px] py-3 px-3 cursor-pointer'>
          <Logout className='h-6 w-6 text-white' />
        </div>
      </div>
    </div>
  )
}