import styled from 'styled-components/native'

export const Container = styled.View`
  width: ${props => props.size ? props.size : 30}px;
  height: ${props => props.size ? props.size : 30}px;
  border-radius: ${props => props.size ? (props.size / 2) : 15}px;
`

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.size ? (props.size / 2) : 15}px;
`
