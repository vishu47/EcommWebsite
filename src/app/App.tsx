import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AsideWrapper from '../uw/layout/aside/AsideWrapper'
import HeaderWrapper from '../uw/layout/header/HeaderWrapper'
import FooterWrapper from '../uw/layout/footer/FooterWrapper'

const LayoutSplashScreen = () => {
    return (
        <>
            Loading...
        </>
    )
}

const App = () => {
    return (
        <Suspense fallback={<LayoutSplashScreen />}>
            <div className="flex flex-row w-full bg-lmain">
                {/* Sidebar */}
                {/* <div className="w-20 bg-blue200 bg-lside ">
                    <AsideWrapper />
                </div> */}
                {/* Main Layout */}
                {/* <div className="flex flex-col flex-1 bg-lmain"> */}
                {/* <HeaderWrapper />
                    <main className="flex-1"> */}
                <Outlet />
                {/* </main> */}
                {/* <FooterWrapper /> */}
                {/* {/* </div>  <Outlet /> */}
            </div>
        </Suspense>
    )
}

export { App }
