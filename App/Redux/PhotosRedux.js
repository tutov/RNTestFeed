import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import union from 'lodash/union'
import uniqBy from 'lodash/uniqBy'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loadPhotosRequest: ['payload'],
  loadPhotosSuccess: ['response'],
  loadPhotosFailure: null
})

export const PhotosTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  allPhotos: [],
  fetching: false
})

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state) => state.merge({ fetching: true })

// successful avatar lookup
export const success = (state, { response }) => {
  const allPhotos = uniqBy(union(state.allPhotos, response.data), 'id')
  return state.merge({ fetching: false, error: null, allPhotos })
}

// failed to get photos
export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PHOTOS_REQUEST]: request,
  [Types.LOAD_PHOTOS_SUCCESS]: success,
  [Types.LOAD_PHOTOS_FAILURE]: failure
})
