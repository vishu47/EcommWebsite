import { lazy, FC, Suspense, useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../uw/layout/master_layout/MasterLayout'
import MainDashboardWrapper from '../pages/dashboards/MainDashboardWrapper'
import CartWrapper from '../pages/dashboards/CartWrapper'

type WithChildren = {
    children: any
}

const PrivateRoutes = () => {



    return (
        <Routes>
            {/* master layout provides all the necessary components */}
            <Route element={<MasterLayout />}>
                <Route path='auth/*' element={<Navigate to='/dashboard' />} />
                <Route path='/dashboard' element={<MainDashboardWrapper />} />
                <Route path='/cart' element={<CartWrapper />} />
            </Route>
        </Routes>
    )
}


export { PrivateRoutes }
