import React, {FC, useState} from 'react';
import {Text, View, FlatList, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import Card from '../../components/Card';

import {TaskResponseType} from '../../constants/response/types';
import {getCards} from '../../api/cards';
import {addCard} from '../../helpers/addCard';

const TaskScreen: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [cards, setCards] = useState<TaskResponseType[]>([]);

  useFocusEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 10000);

    return () => clearInterval(interval);
  });

  const getData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const data = await getCards();
      setCards(data?.result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const filtredTasks = cards.filter(card => card.type === 'TASKS');

  const onCardPress = (item: TaskResponseType): void => {
    Alert.alert(item.name, item.description || '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
    ]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {card_id, photo_required, schedule, ...croppedItem} = item;
    addCard(croppedItem);
  };

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : cards.length ? (
        <FlatList
          data={filtredTasks}
          renderItem={({item}) => <Card onCardPress={onCardPress} {...item} />}
          keyExtractor={item => item.card_id.toString()}
        />
      ) : (
        <Text>No data</Text>
      )}
    </View>
  );
};

export default TaskScreen;
