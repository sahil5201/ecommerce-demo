import React, { Fragment } from 'react'
import Skeleton from "react-loading-skeleton";
import styles from "../product.module.scss"

interface IProps {
    onlyProducts?: boolean
}

function ProductLoading() {
    const dummyArr = [...Array(4)];
    return (
        <Fragment>
            <div className="col-8">
                <div className="row">
                    <div className="col-3">
                        <ul>
                            {dummyArr.map((_, index) => (
                                <li key={`${index}_Product_Images_list`}>
                                    <Skeleton height={'138px'} width={'100%'} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-9">
                        <div className={styles.previewImage}>
                            <Skeleton height={'100%'} />
                        </div>
                    </div>
                </div>
            </div >

            <div className="col-4">
                <div className="row">
                    <div className="col-12">
                        <h1><Skeleton /></h1>
                    </div>
                    <div className="col-12 mt-2 w-50">
                        <Skeleton />
                    </div>
                    <div className="col-12 mt-2">
                        <h2 className='w-25'><Skeleton /></h2>
                    </div>
                    <div className="col-12 mt-2">
                        <p>
                            <Skeleton height={'80px'} />
                        </p>
                    </div>
                    <hr />
                    <div className="col-12">
                        <Skeleton height={'40px'} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductLoading