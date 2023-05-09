'use client';
import { createSlice } from '@reduxjs/toolkit'

interface themeState {
    themeMode: string
}

const getDefaultThemeMode = () => {
    if (typeof window !== 'undefined') {
        const themeMode = localStorage.getItem('themeMode') || 'dark'
        return themeMode
    } else {
        return 'dark'
    }
}

const initialState: themeState = {
    themeMode: getDefaultThemeMode()
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeToggle(state, action) {
            localStorage.setItem('themeMode', action.payload)
            state.themeMode = action.payload
        }
    }
})


export const { themeToggle } = themeSlice.actions

export default themeSlice.reducer