import {TaskResponseType} from '../constants/response/types';
export const addCard = (
  item: Omit<TaskResponseType, 'card_id' | 'photo_required' | 'schedule'>,
) => {
  console.log(item);
};
