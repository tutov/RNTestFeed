import { createSelector } from 'reselect'

const getState = state => state.photos

export const getAllPhotos = createSelector(getState, state => state.allPhotos)
