'use client';
import React, { Fragment, useEffect, useState } from 'react'
import styles from "./categories.module.scss"
import { useGetCategoriesQuery } from './CategorieReducer';
import { Dropdown } from '@/components/elements';
import Link from 'next/link';
import Skeleton from "react-loading-skeleton";

function Categories() {
    const { isLoading, data, isError, isSuccess } = useGetCategoriesQuery('');
    const [categorie, setCategorie] = useState<string[]>([])
    const [menscategorie, setMensCategorie] = useState<string[]>([])
    const [womenscategorie, setWomensCategorie] = useState<string[]>([])

    useEffect(() => {
        if (isSuccess && Array.isArray(data)) {
            const cpCategorie: string[] = []
            const womens: string[] = []
            const mens: string[] = []
            data.forEach((categorie, index) => {
                if (categorie.includes('womens')) {
                    womens.push(categorie)
                } else if (categorie.includes('mens')) {
                    mens.push(categorie)
                } else {
                    cpCategorie.push(categorie)
                }

            })
            setMensCategorie(mens)
            setWomensCategorie(womens)
            setCategorie(cpCategorie)
        }
        return () => {

        }
    }, [data])


    return (
        <div className="col-3">
            <div className={styles.listwrap}>
                <ul className={styles.list}>
                    <li></li>
                    {isLoading ?
                        [...Array(8)].map((_, index) => (
                            <li className='w-50' key={`Skeleton_categorie_${index}`}>
                                <Skeleton />
                            </li>
                        ))
                        :
                        (isSuccess) && <Fragment>
                            <li><Dropdown linkPrefix={'products'} drop='down' title={`women's fashion`} items={womenscategorie} /></li>
                            <li><Dropdown linkPrefix={'products'} drop='down' title={`men's fashion`} items={menscategorie} /></li>
                            {categorie.map((categorie, index) => (
                                <li key={`${index}_${categorie}`}>
                                    <Link href={`products/${categorie}`}>
                                        {categorie}
                                    </Link>
                                </li>
                            ))}
                        </Fragment>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categories