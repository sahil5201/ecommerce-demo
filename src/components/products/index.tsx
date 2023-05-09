"use client";

import React, { Fragment, useEffect, useState } from 'react'
import { getCategorieProducts, getProducts } from './utils';
import Image from 'next/image';
import styles from "./products.module.scss"
import { Rating } from '../elements';

interface Props {
    numberOfProducts?: number
    categorie?: string
}

function Products({ numberOfProducts, categorie }: Props) {
    const [products, setProducts] = useState<any[]>([])
    useEffect(() => {
        callfnc()
        return () => {

        }
    }, [])

    const callfnc = async () => {
        if (categorie) {
            const data = await getCategorieProducts(categorie)
            setProducts(data.products)
        } else {
            const data = await getProducts(numberOfProducts)
            setProducts(data.products)
        }
    }
    return (
        <Fragment>
            {(Array.isArray(products) && products.length > 0) &&
                products.map((product) => {
                    return (<div className={`col-3 ${styles.productCard}`} key={product.id}>

                        <div className={styles.imgWrap}>
                            <Image
                                src={product.thumbnail}
                                alt={`image of ${product.title}`}
                                width={156}
                                height={156}
                                loading='eager'
                            />
                        </div>

                        <div className={styles.productInfo}>
                            <div className={styles.title}>
                                {product.title}
                            </div>
                            <div className={styles.price}>
                                ${product.price}
                            </div>
                            <Rating rating={product.rating} showNumber />
                        </div>
                    </div>)
                })
            }
        </Fragment>
    )
}

export default Products