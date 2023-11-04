import {TaskResponseType} from '../../constants/response/types';

export type CardsProps = {
  onCardPress: (item: TaskResponseType) => void;
};

export type ExtendedCardProps = TaskResponseType & CardsProps;
