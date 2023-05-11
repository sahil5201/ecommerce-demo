import React, { Fragment } from 'react'
import Skeleton from "react-loading-skeleton";
import styles from "./products.module.scss"

interface IProps {
    onlyProducts?: boolean
}

function ProductsLoading({ onlyProducts }: IProps) {
    const dummyArr = [...Array(4)];
    return (
        <div className='container sub-container'>
            {!onlyProducts &&
                <Fragment>
                    <div className="tag mt-3 w-25">
                        <span>
                            <Skeleton />
                        </span>
                    </div>
                    <h1 className='text-capitalize w-25'><Skeleton /></h1>
                </Fragment>
            }
            <div className="row mt-3">
                {dummyArr.map((_, index) => {
                    return (<div className={`col-3 ${styles.productCard}`} key={index}>

                        <div className={styles.imgWrap}>
                            <Skeleton />
                        </div>

                        <div className={`${styles.productInfo} w-75`}>
                            <div className={`${styles.title} w-50`}>
                                <Skeleton />
                            </div>
                            <div className={`${styles.price} w-25`}>
                                <Skeleton />
                            </div>
                            <Skeleton />
                        </div>
                    </div>)
                })
                }
            </div>
        </div>
    )
}

export default ProductsLoading