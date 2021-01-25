import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {favorite_styles} from '../styles/component_styles';

export function FavoriteCart({item}) {
  console.log(item);

  return (
    <View style={favorite_styles.container}>
      <View style={favorite_styles.header}>
        <View style={favorite_styles.header_left}>
          <Icon name="all-inclusive" size={20} color={'white'} />
          <Text style={favorite_styles.mail}>{item.email.split('@')[0]}</Text>
        </View>
        <View style={favorite_styles.header_right}>
          <Text style={favorite_styles.date}>{item.postDate}</Text>
        </View>
      </View>
      <View style={favorite_styles.addFavContainer}>
        <Text style={favorite_styles.text}>{item.text}</Text>
      </View>
    </View>
  );
}
