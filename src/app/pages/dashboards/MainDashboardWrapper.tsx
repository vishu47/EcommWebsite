import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { usePageData } from '../../../uw/providers/PageData'

type Props = {}

export default function MainDashboardWrapper({ }: Props) {
    const { cart, setCart } = usePageData()
    const [products, setProducts] = useState<any>([])
    const [category, setCategory] = useState<any>([])

    // api call
    const FetchAllProduct = async () => {
        const res: any = await axios.get(`https://dummyjson.com/products?limit=10`)
        const data = await res.data?.products
        setProducts(data)
    }
    const FetchAllCategory = async () => {
        const res: any = await axios.get(`https://dummyjson.com/products/category-list`)
        const data = await res.data
        console.log(data, 'datadata')
        setCategory(data)
    }
    const SelectCategory = async (category: any) => {
        const res: any = await axios.get(`https://dummyjson.com/products/category/${category}`)
        const data = await res.data?.products
        setProducts(data)
    }
    const AddtoCart = async (item: any) => {
        const add = {
            id: item?.id,
            name: item?.title,
            price: (item?.price * 10).toFixed(0),
            discount: item?.discountPercentage.toFixed(0),
            quantity: 1,
            thumbnail: item?.thumbnail
        }
        const index = cart.findIndex((cart: any) => cart.id === add?.id);
        console.log(index)
        if (index === -1) {
            setCart([...cart, add])
        } else {
            const updateCart = [...cart]
            updateCart[index] = {
                ...updateCart[index],
                quantity: updateCart[index].quantity + 1
            }
            setCart(updateCart)
        }
    }
    // state

    // providers
    // redux
    // useeffects
    useEffect(() => {
        FetchAllProduct()
        FetchAllCategory()
    }, [])

    return (
        <div className='flex justify-between flex-row'>
            <div className='p-8 bg-white w-full min-h-screen'>
                <ProductList AddtoCart={AddtoCart} SelectCategory={SelectCategory} category={category} products={products} />
            </div>
        </div>
    )
}