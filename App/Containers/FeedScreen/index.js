import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import PhotosRedux from '../../Redux/PhotosRedux'
import { getAllPhotos } from '../../Selectors/PhotosSelector'

import Component from './FeedScreen'

const mapStateToProps = createStructuredSelector({
  photos: getAllPhotos
})

const mapDispatchToProps = {
  loadPhotosRequest: PhotosRedux.loadPhotosRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
