/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC, useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, useNavigate, Navigate } from 'react-router-dom'
import { App } from '../App'
import ErrorsPage from '../pages/errors/ErrorsPage'
import AuthPage from '../pages/auth/AuthPage'
import { PrivateRoutes } from './PrivateRoutes'
import { usePageData } from '../../uw/providers/PageData'

const { PUBLIC_URL } = process.env

const AppRoutes: FC = () => {
    const { setIsLoggedIn, isLoggedIn } = usePageData()


    useEffect(() => {
        const iseUserLoggedIn = localStorage.getItem("user")
        if (iseUserLoggedIn) {
            setIsLoggedIn(iseUserLoggedIn)
            console.log(iseUserLoggedIn, 'useruser')
        }
    }, [])

    return (
        <BrowserRouter basename={PUBLIC_URL}>
            <Routes>
                <Route element={<App />}>
                    {isLoggedIn ? (
                        <>
                            <Route path='/*' element={<PrivateRoutes />} />
                            <Route index element={<Navigate to='/dashboard' />} />
                        </>
                    ) : (
                        <>
                            <Route path='*' element={<Navigate to='/auth' />} />
                            <Route path='auth/*' element={<AuthPage />} />
                        </>
                    )}
                    <Route path='error/*' element={<ErrorsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }
