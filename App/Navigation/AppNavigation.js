import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/MaterialIcons'

import I18n from '../I18n'

import FeedScreen from '../Containers/FeedScreen'
import PostViewScreen from '../Containers/PostViewScreen'

import { Colors } from '../Themes'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  FeedScreen: { screen: FeedScreen,
    navigationOptions: {
      title: I18n.t('nav.title.feed')
    }
  },
  PostViewScreen: { screen: PostViewScreen,
    navigationOptions: {
      title: I18n.t('nav.title.photo'),
      headerLeft: ({ onPress }) => <Icon.Button
        name='arrow-back'
        backgroundColor={Colors.snow}
        color={Colors.gold}
        size={26}
        onPress={onPress}
      />
    }
  }
}, {
  initialRouteName: 'FeedScreen'
})

export default createAppContainer(PrimaryNav)
