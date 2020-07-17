import React from 'react'
import PT from 'prop-types'
import noop from 'lodash/noop'

import { Component, Touch } from './styles'

const Icon = ({ glyph, onPress }) => {
  return <Touch onPress={onPress}>
    <Component source={glyph} />
  </Touch>
}

Icon.propTypes = {
  glyph: PT.string.isRequired,
  onPress: PT.func
}

Icon.defaultProps = {
  onPress: noop
}

export { Icon }
