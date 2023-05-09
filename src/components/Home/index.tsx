import React from 'react'
import styles from "./home.module.scss"
import Categories from './Categories'
import Sales from './Sales'

function Home() {
    return (
        <div className={styles.homeWrap}>
            <div className='container sub-container'>
                <div className="row">
                    <Categories />
                </div>

                <div className="row">
                    <div className="col">
                        <Sales />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home