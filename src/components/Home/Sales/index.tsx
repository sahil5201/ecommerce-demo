import React from 'react'
import styles from "./sales.module.scss"
import Products from '@/components/products'
function Sales() {
    return (
        <div className="col-12">
            <section className={styles.saleSection}>
                <div className="tag">
                    <span>
                        {`Today's`}
                    </span>
                </div>
                <h1>Flash Sales</h1>
                <div className="row">
                    <Products numberOfProducts={4} />
                </div>
            </section>
        </div>
    )
}

export default Sales