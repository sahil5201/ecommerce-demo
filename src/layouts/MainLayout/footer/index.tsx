import React from 'react'
import styles from "./footer.module.scss"
import Link from 'next/link'

function Footer() {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`container ${styles.sub_container}`}>
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <div className='h5'>Section</div>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 ">Link</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 ">Link</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 ">Link</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 ">Link</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 ">Link</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <div className='h5'>Section</div>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 ">Link</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 ">Link</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <div className='h5'>Section</div>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 ">Link</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 ">Link</Link></li>
                            <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 ">Link</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <div className='h5'>Subscribe to our newsletter</div>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-center mt-2 py-3 border-top">
                <p>© 2023 Company, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer