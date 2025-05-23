import React from 'react'
import { ReactComponent as Logo } from "../../assets/svg/user.svg"
import { usePageData } from '../../providers/PageData'
import { useNavigate } from 'react-router-dom'
import { Cart, Logout } from '../../helpers/ImageConstants'

type Props = {}

export default function HeaderWrapper({ }: Props) {
    const { cart } = usePageData()
    const navigate = useNavigate()
    const { setIsLoggedIn } = usePageData()
    const LogoutCall = () => {
        localStorage.clear()
        setIsLoggedIn(false)
    }
    return (
        <div className='bg-rose-800 text-white border-b-[1px] border-lside p-4 flex justify-between'>
            <div className='text-white text-[24px]'>
                Ecomm Store
            </div>
            <div className='flex flex-row gap-4'>
                <a onClick={() => { navigate('/dashboard') }} className="bg-transparent cursor-pointer text-white font-semibold hover:text-white py-2 px-4 ">
                    Products
                </a>
                <a onClick={() => { navigate('/cart') }} className="flex justify-start flex-row items-center relative bg-transparent cursor-pointer text-white font-semibold hover:text-white py-2 px-4 mr-4">
                    <Cart className='h-5 w-5 text-white mr-1' />
                    <span>
                        Cart
                    </span>
                    <span className='text-white absolute top-0 right-1'>{cart.length}</span>
                </a>
                <button onClick={() => { LogoutCall() }} className="flex justify-start flex-row items-center bg-transparent hover:bg-rose-500 text-white font-semibold hover:text-white py-2 px-4 border border-rose-500 hover:border-transparent rounded">
                    <Logout className='h-5 w-5 text-white mr-1' />
                    Logout
                </button>
            </div>
        </div >
    )
}