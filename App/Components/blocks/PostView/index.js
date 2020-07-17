import React, {useCallback, useState} from 'react'
import PT from 'prop-types'
import { Share } from 'react-native'
import { withNavigation } from 'react-navigation'

import I18n from '../../../I18n'

import {
  Container,
  Image,
  Header,
  LeftHeaderSide,
  Avatar,
  NameText,
  ShortInfoText,
  LocationText,
  TextWrapper,
  Button,
  Footer,
  IconContainer,
  IconFeather,
  IconFontAwesome,
  Touch
} from './styles'

const PostViewComponent = ({ item, navigation, singleView }) => {
  const openHandler = useCallback(() => {
    navigation.navigate({
      routeName: 'PostViewScreen', params: { post: item }}
    )
  }, [navigation, item])

  const [ like, toggleLike ] = useState(false)
  const [ follow, toggleFollow ] = useState(false)

  const onShare = () => {
    try {
      Share.share({ message: item.title })
    } catch (error) {
      console.tron.error(error)
    }
  }

  return <Container>
    <Header>
      <LeftHeaderSide>
        <Avatar avatarPath={item.thumbnailUrl} size={40} />
        <TextWrapper>
          <NameText>Victor Pacheco</NameText>
          <ShortInfoText>
            {I18n.t('postView.shortUserSubInfo', { reviewsCount: 129, followersCount: 328 })}
          </ShortInfoText>
          <LocationText>Gold Foodies</LocationText>
        </TextWrapper>
      </LeftHeaderSide>
      <Button
        label={I18n.t('postView.button.follow')}
        onPress={() => toggleFollow(!follow)}
        isPressed={follow}
      />
    </Header>
    <Touch onPress={openHandler} disabled={singleView}>
      <Image source={{uri: item.url, cache: 'force-cache'}} />
    </Touch>
    <Footer>
      <IconContainer>
        <Touch onPress={() => toggleLike(!like)}>
          <IconFeather name='thumbs-up' isChecked={like} />
        </Touch>
        <Touch onPress={openHandler} disabled={singleView}>
          <IconFontAwesome name='comment-o' />
        </Touch>
        <Touch onPress={onShare}>
          <IconFeather name='share' />
        </Touch>
      </IconContainer>
    </Footer>
  </Container>
}

PostViewComponent.propTypes = {
  item: PT.object.isRequired,
  singleView: PT.bool
}

PostViewComponent.defaultProps = {
  singleView: false
}

export const PostView = withNavigation(PostViewComponent)
