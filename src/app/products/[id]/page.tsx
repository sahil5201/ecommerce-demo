import React from 'react'
import { Products } from '@/components'

interface IParams {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: IParams) {
    const { id } = params
    return {
        title: 'Products | ' + id,
        description: 'E-commerce demo next.js 13.4'
    };
}

function page({ params }: IParams) {
    const { id } = params
    return (
        <div className='container sub-container main-padding' style={{ minHeight: '1044px' }}>
            <div className="row">
                <div className="tag mt-3">
                    <span>
                        {`Products`}
                    </span>
                </div>
                <h1 className='text-capitalize'>{id.replace('-', ' ')}</h1>
                <div className="row mt-3">
                    <Products categorie={id} />
                </div>
            </div>
        </div>
    )
}

export default page;