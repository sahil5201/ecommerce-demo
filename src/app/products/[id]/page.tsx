import { Products } from '@/components'
import Head from 'next/head'
import React, { Fragment } from 'react'

interface IParams {
    params: { id: string }
}

// Dynamic metadata
export async function generateMetadata({ params }: IParams) {
    const { id } = params
    return {
        title: `Products | ` + id,
        description: 'Categorie wise Products Listing page.demo e-commerce website using next.js 13.4 by Sahil Patel aka JSDev.',
    };
}

function Page({ params }: IParams) {
    const { id } = params
    return (
        <Fragment>
            <Head>
                <title>Products</title>
            </Head>
            <div className="container sub-container">
                <div className="row mt-5">
                    <Products categorie={id} />
                </div>
            </div>
        </Fragment>
    )
}

export default Page