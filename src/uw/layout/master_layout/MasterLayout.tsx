import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AsideWrapper from '../aside/AsideWrapper'
import FooterWrapper from '../footer/FooterWrapper'
import HeaderWrapper from '../header/HeaderWrapper'

const MasterLayout = () => {
    const [theme, setTheme] = useState('light')

    return (
        <>
            <div className="flex flex-row w-full">
                {/* Sidebar */}
                <div className="w-20 bg-blue200 bg-rose-800 fixed">
                    <AsideWrapper />
                </div>
                {/* Main Layout */}
                <div className="flex flex-col flex-1 bg-lmain">
                    <div className='fixed w-full z-[100]'>
                        <HeaderWrapper />
                    </div>
                    <main className="flex-1 mt-16">
                        <Outlet />
                    </main>
                    {/* <FooterWrapper /> */}
                </div>
            </div>
            {/* <div className={`w-full`}>
                <div className='flex-1'>
                    <Outlet />
                </div>
            </div > */}
        </>
    )
}

export { MasterLayout }
