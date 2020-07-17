import styled from 'styled-components/native'
import IconUIFeather from 'react-native-vector-icons/Feather'
import IconUIFontAwesome from 'react-native-vector-icons/FontAwesome'

import { Avatar as AvatarUI, Text as TextUI } from '../../ui'
import { Colors } from '../../../Themes'

export { Button } from '../../ui'

export const Container = styled.View`
  border-top-width: 4px;
  border-color: ${Colors.cloud};
`

export const Image = styled.Image`
  width: 100%;
  height: 300px;
`

export const Header = styled.View`
  padding: 12px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const LeftHeaderSide = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextWrapper = styled.View``

export const Footer = styled.View`
  padding: 12px;
`

export const IconContainer = styled.View`
  flex-direction: row;
`

export const IconFeather = styled(IconUIFeather).attrs(props => ({
  size: 25,
  color: props.isChecked ? Colors.gold : Colors.black
}))`
  padding-right: 15px;
`

export const IconFontAwesome = styled(IconUIFontAwesome).attrs(props => ({
  size: 25,
  color: props.isChecked ? Colors.gold : Colors.black
}))`
  padding-right: 15px;
`

export const Avatar = styled(AvatarUI)`
  margin-right: 10px;
`

export const Touch = styled.TouchableOpacity``

export const NameText = styled(TextUI)`
  font-weight: bold;
  font-size: 18px;
`
export const ShortInfoText = styled(TextUI)`
  color: ${Colors.charcoal};
  font-size: 12px;
  paddingVertical: 2px;
`

export const LocationText = styled(TextUI)`
  color: ${Colors.gold};
  font-size: 12px;
`
