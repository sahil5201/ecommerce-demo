import { categorieApi } from '@/components'
import themeReducer from '@/layouts/ThemeReducer'
import { configureStore } from '@reduxjs/toolkit'
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        [categorieApi.reducerPath]: categorieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categorieApi.middleware),
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector