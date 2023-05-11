import { ProductDetails } from '@/components';
import React from 'react'

interface IParams {
    params: {
        id: string,
        product: string,
    }
}

export async function generateMetadata({ params }: IParams) {
    const { product } = params
    return {
        title: 'Product Details | ' + product,
        description: 'E-commerce demo next.js 13.4'
    };
}


function Page({ params }: IParams) {
    const { id } = params
    return (
        <div style={{ minHeight: '780px' }}>
            <ProductDetails productId={id} />
        </div>
    )
}

export default Page