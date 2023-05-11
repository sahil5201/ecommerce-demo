import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./product.module.scss"
interface IProps {
    images: string[]
}

function ProductImages(props: IProps) {
    const { images } = props
    const [previewImage, setPreviewImage] = useState<string>(images[0])

    const selectImageTopreview = (index: number) => {
        setPreviewImage(images[index])
    }
    return (
        <div className="col-8">
            <div className="row">
                <div className="col-3">
                    <ul>
                        {images.map((img, index) => (
                            <li key={`${index}_Product_Images_list`}
                                onClick={() => selectImageTopreview(index)}
                            >
                                <Image src={img}
                                    alt='ProductImages'
                                    loading='eager'
                                    fill
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-9">
                    <div className={styles.previewImage}>
                        <Image src={previewImage}
                            alt='ProductImages'
                            loading='eager'
                            fill
                            priority
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductImages