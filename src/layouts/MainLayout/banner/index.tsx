'use client';

import React from 'react'
import styles from "./banner.module.scss"
import { useSelector } from '@/store'
import { themeToggle } from '@/layouts/ThemeReducer';
import { useDispatch } from 'react-redux';

function Banner() {
    const { themeMode } = useSelector((state) => state.theme)
    const dispatch = useDispatch()
    const onThemeToggle = () => {
        const newthemeMode = themeMode == 'dark' ? 'light' : 'dark'
        dispatch(themeToggle(newthemeMode))
    }
    return (
        <div className={styles.banner}>
            <div className={`${styles.container} container`}>
                <div className="row justify-content-end">
                    <div className="col-8 text-center">
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </div>
                    <div className='col-2 text-end cursor-pointer' onClick={onThemeToggle}>
                        {themeMode == 'dark' ?
                            <i className="fa-solid fa-sun" /> :
                            <i className="fa-solid fa-moon" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner