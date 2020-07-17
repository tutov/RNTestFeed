import styled from 'styled-components/native'

import { Text as TextUI } from '../Text'
import { Colors } from '../../../Themes'

export const Touch = styled.TouchableOpacity``

export const ButtonContainer = styled.View`
  background-color: ${props => props.isPressed ? Colors.green : Colors.snow};
  border-width: 1px;
  border-color: green;
  padding-horizontal: 14px;
  padding-vertical: 4px;
  border-radius: 18px;
`

export const Text = styled(TextUI)`
  color: ${props => props.isPressed ? Colors.snow : Colors.green};
`
