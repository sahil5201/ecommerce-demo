"use client";
import React from 'react'
import Image from 'next/image';
import styles from "./products.module.scss"
import { Rating } from '../elements';
import { IProduct } from '@/types';
import Link from 'next/link';

interface IProps {
    product: IProduct
}

function ProductCard({ product }: IProps) {
    return (
        <div className={`col-3 ${styles.productCard}`} key={product.id}>
            <div className={styles.imgWrap}>
                <Link href={`product/${product.id}/${product.title}`}>
                    <Image
                        src={product.thumbnail}
                        alt={`image of ${product.title}`}
                        fill={true}
                        loading='eager'
                        priority={true}
                    />
                </Link>
                <div className={styles.addToCart}>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className={styles.productInfo}>
                <div className={styles.title}>
                    <Link href={`product/${product.id}/${product.title}`}>
                        {product.title}
                    </Link>
                </div>
                <div className={styles.price}>
                    ${product.price}
                </div>
                <Rating rating={product.rating} showNumber />
            </div>


        </div>
    )
}

export default ProductCard