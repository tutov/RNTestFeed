import styled from 'styled-components/native'

import { Colors } from '../../../Themes'

export const TextUI = styled.Text`
  color: ${props => props.color ? props.color : Colors.black};
`
