'use server';

import axios from "axios";

export const getProducts = async (numberOfProducts: number | undefined = 5) => {
    const data = await axios.get(`https://dummyjson.com/products?limit=${numberOfProducts}`)
    return data.data
}

export const getCategorieProducts = async (categorie: string, numberOfProducts: number | undefined = 5) => {
    const data = await axios.get(`https://dummyjson.com/products/category/${categorie}?limit=${numberOfProducts}`)
    return data.data
}