import React from 'react'
import PT from 'prop-types'
import noop from 'lodash/noop'

import { Touch, ButtonContainer, Text } from './styles'

const Button = ({ onPress, label, isPressed }) => {
  return <Touch onPress={onPress}>
    <ButtonContainer isPressed={isPressed}>
      <Text isPressed={isPressed}>{label}</Text>
    </ButtonContainer>
  </Touch>
}

Button.propTypes = {
  label: PT.string.isRequired,
  isPressed: PT.bool,
  onPress: PT.func
}

Button.defaultProps = {
  onPress: noop,
  isPressed: false
}

export { Button }
