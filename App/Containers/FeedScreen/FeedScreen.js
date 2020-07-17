import React, { Component } from 'react'
import PT from 'prop-types'
import get from 'lodash/get'

import { List, PostView } from './styles'

const LIMIT = 5000

class FeedScreen extends Component {
  componentDidMount () {
    this.loadNewPhotos()
  }

  loadNewPhotos = () => {
    const { photos, loadPhotosRequest } = this.props

    const photosLengthFix = photos.length - 1
    const start = get(photos, `[${photosLengthFix}].id`, 0)
    loadPhotosRequest({
      start, limit: LIMIT
    })
  }

  renderItem = ({ item }) => {
    return <PostView item={item} />
  }

  render () {
    const { photos } = this.props
    return (
      <List
        data={photos}
        keyExtractor={item => item.id.toString()}
        renderItem={this.renderItem}
        onEndReached={this.loadNewPhotos}
        onEndReachedThreshold={2}
        initialNumToRender={10}
      />
    )
  }
}

FeedScreen.propTypes = {
  photos: PT.array.isRequired,
  loadPhotosRequest: PT.func.isRequired
}

export default FeedScreen
