"use client";
import React, { Fragment, useEffect, useState } from 'react'
import { getCategorieProducts, getProducts } from './utils';
import { IProduct } from '@/types';
import ProductCard from './productCard';
import ProductsLoading from './productsLoading';

interface Props {
    numberOfProducts?: number
    productsList?: IProduct[]
    categorie?: string
}

function Products({ numberOfProducts, categorie }: Props) {
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        callfnc()
        return () => {

        }
    }, [])

    const callfnc = async () => {
        setIsLoading(true)
        if (categorie) {
            const data = await getCategorieProducts(categorie, numberOfProducts)
            setProducts(data.products)
            setIsLoading(false)
        } else {
            const data = await getProducts(numberOfProducts)
            setProducts(data.products)
            setIsLoading(false)
        }
    }
    return (
        <Fragment>
            {isLoading && <ProductsLoading onlyProducts />}
            {(Array.isArray(products) && products.length > 0) &&
                products.map((product) => {
                    return <ProductCard product={product} key={`product_${categorie || '#'}_${product.id}`} />
                })
            }
        </Fragment>
    )
}

export default Products