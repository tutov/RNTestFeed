import React from 'react'

import { PostView } from './styles'

const PhotoViewScreen = ({ navigation }) => {
  const post = navigation.getParam('post')
  return (
    <PostView item={post} singleView />
  )
}

export default PhotoViewScreen
