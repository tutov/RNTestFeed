import { call, put } from 'redux-saga/effects'

import PhotosActions from '../Redux/PhotosRedux'

export function * getPhotos (api, { payload }) {
  const { start, limit } = payload
  // make the call to the api
  const response = yield call(api.getPhotos, start, limit)

  if (response.ok) {
    // do data conversion here if needed
    yield put(PhotosActions.loadPhotosSuccess(response))
  } else {
    yield put(PhotosActions.loadPhotosFailure())
  }
}
