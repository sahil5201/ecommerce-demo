import Products from '@/components/products'
import React from 'react'

function BestSelling() {
    return (
        <div className="col-12">
            <section className='my-3'>
                <div className="tag">
                    <span>
                        {`This Month`}
                    </span>
                </div>
                <h1>Best Selling Products</h1>
                <div className="row">
                    <Products categorie='home-decoration' numberOfProducts={4} />
                </div>
            </section>
        </div>
    )
}

export default BestSelling