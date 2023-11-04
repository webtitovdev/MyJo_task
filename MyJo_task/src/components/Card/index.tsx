import React, {FC} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

import {ExtendedCardProps} from './types';

const Card: FC<ExtendedCardProps> = (props): JSX.Element => {
  const {onCardPress, ...item} = props;
  const {name} = item;
  return (
    <View>
      <TouchableHighlight onPress={() => onCardPress(item)}>
        <Text>{name}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Card;
