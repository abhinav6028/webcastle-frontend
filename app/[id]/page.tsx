import React from 'react'
import ProductDetail from '../Components/ProductDetail'
import { fetchApiData } from '../fetchData/fetchData'

export default async function page() {

    const data = await fetchApiData('products')

    return (
        <>
            <ProductDetail data={data} />
        </>
    )
}
