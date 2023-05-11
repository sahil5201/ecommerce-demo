"use client";
import React, { Fragment, useEffect, useState } from 'react'
import styles from "./product.module.scss"
import { getProductbyId } from './utils'
import { IProduct } from '@/types'
import ProductImages from './productImages';
import ProductInfo from './productInfo';
import ProductLoading from './Skeleton/productLoading';

interface IProps {
    productId: string
}

function ProductDetails(props: IProps) {
    const { productId } = props
    const [product, setProduct] = useState<IProduct>()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        callfnc()
        return () => {

        }
    }, [])

    const callfnc = async () => {
        setIsLoading(true)
        if (productId) {
            const data = await getProductbyId(productId)
            setProduct(data)
            setIsLoading(false)
        }
    }

    return (
        <section className={styles.productDetailWrap}>
            <div className='container sub-container main-padding'>
                <div className="row">
                    {product &&
                        <Fragment>
                            <ProductImages images={product.images} />
                            <ProductInfo product={product} />
                        </Fragment>
                    }
                    {isLoading && <ProductLoading />}
                </div>
            </div>
        </section>
    )
}

export default ProductDetails