import React from 'react'
import PT from 'prop-types'

import { Container, AvatarImage } from './styles'

const Avatar = ({ avatarPath, size, style }) => {
  return <Container size={size} style={style}>
    <AvatarImage
      size={size}
      source={{uri: avatarPath, cache: 'force-cache'}}
    />
  </Container>
}

Avatar.propTypes = {
  avatarPath: PT.string.isRequired,
  size: PT.number,
  style: PT.array
}

Avatar.defaultProps = {
  size: 20,
  style: null
}

export { Avatar }
