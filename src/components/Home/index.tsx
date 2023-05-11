import React from 'react'
import styles from "./home.module.scss"
import Categories from './Categories'
import Sales from './Sales'
import AdBanner from './AdBanner'
import BestSelling from './BestSelling'

function Home() {
    return (
        <div className={styles.homeWrap}>
            <div className='container sub-container'>
                <div className="row">
                    <Categories />
                    <AdBanner />
                </div>

                <div className="row">
                    <Sales />
                    <hr />
                    <BestSelling />
                </div>
            </div>
        </div>
    )
}

export default Home