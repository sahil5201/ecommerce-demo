import React, { Fragment } from 'react'
import styles from "./header.module.scss"
import Link from 'next/link'

function Header() {
    return (
        <Fragment>
            <div className={styles.header}>
                <div className={`${styles.container} container`}>
                    <div className="row justify-content-end align-items-center">
                        <div className="col-2">
                            Logo
                        </div>
                        <nav className="col-8 navbar navbar-expand-lg navbar-light justify-content-center">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className={`nav-link ${styles.active}`} href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">Sign in</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={`${styles.search_group} col-2 d-flex justify-content-end align-items-center`}>
                            {/* <div className={styles.search_box}>
                                <input type="text" placeholder='What are you looking for?' />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div> */}
                            <div className="mx-3">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                            <div className="mx-2">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-0' />
        </Fragment>
    )
}

export default Header