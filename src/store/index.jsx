import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './slices/usersSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { albumsApi } from '../api/albumsApi'
import { photosApi } from '../api/photosApi'

const store = configureStore({
  reducer: {
    users: usersReducer,
    // albums: albumsApi.reducer
    [albumsApi.reducerPath]: albumsApi.reducer,
    // photos: albumsApi.reducer
    [photosApi.reducerPath]: photosApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware)
  }
})

setupListeners(store.dispatch)

// TEMPORARY to check states
// window.store = store
/* 
  on browser console do:
    store.getState()
*/

export { store }
export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/removeUser'
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation
} from '../api/albumsApi'

export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation
} from '../api/photosApi'
