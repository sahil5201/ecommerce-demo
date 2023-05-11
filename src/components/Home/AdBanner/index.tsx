import Image from 'next/image'
import React from 'react'

function AdBanner() {
    return (
        <div className="col-9 p-0 pt-4">
            <Image
                src={"/images/banner.jpg"}
                alt='AdBanner image'
                width={892}
                height={344}
                loading='eager'
                priority
            />
        </div>
    )
}

export default AdBanner