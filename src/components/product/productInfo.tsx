import { IProduct } from '@/types'
import React from 'react'
import { Rating } from '../elements'
interface IProps {
    product: IProduct
}

function ProductInfo(props: IProps) {
    const { product } = props
    return (
        <div className="col-4">
            <div className="row">
                <div className="col-12">
                    <h1>{product.title}</h1>
                </div>
                <div className="col-12 mt-2">
                    <Rating rating={product.rating} showNumber />
                </div>
                <div className="col-12 mt-2">
                    <h2>${product.price}</h2>
                </div>
                <div className="col-12 mt-2">
                    <p>
                        {product.description}
                    </p>
                </div>
                <hr />
                <div className="col-12">
                    <button className='btn btn-primary w-100'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo