import { Fragment, useEffect, useState } from "react"
import styles from "./rating.module.scss"

interface Props {
    rating: number
    showNumber?: boolean
}

const outOfRating = 5

const Rating = ({ rating, showNumber }: Props) => {
    const [RatingArr, setRatingArr] = useState<string[]>([])
    useEffect(() => {
        const ratingDifference = rating - Math.floor(rating)

        const fillRatingArr = [...Array(Math.floor(rating))]
            .map((_, index) => (
                'fa-solid fa-star'
            ));

        let emptyRating = outOfRating - fillRatingArr.length

        const halfRatingArr = []
        if (Math.floor(rating) < 5 && ratingDifference >= 0.5) {
            halfRatingArr.push("fa-regular fa-star-half-stroke");
            emptyRating = emptyRating - 1
        }

        const emptyRatingArr = [...Array(Math.floor(emptyRating))]
            .map((_, index) => (
                `fa-solid fa-star ${styles.emptyRating}`
            ));

        setRatingArr([...fillRatingArr, ...halfRatingArr, ...emptyRatingArr])
        return () => {
            
        }
    }, [])

    return (
        <Fragment>
            <div className={styles.ratingWrap}>
                {RatingArr.map((icon, index) => (
                    <i className={icon} key={`${index}_RatingArr`}></i>
                ))}

                {showNumber && (<span>({rating})</span>)}
            </div>
        </Fragment>
    )
}

export default Rating
