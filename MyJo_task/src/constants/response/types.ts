type TaskType = 'ALL' | 'TASKS' | 'CORSES';

export type TaskResponseType = {
  card_id: number;
  reviewer_id: number;
  name: string;
  reward: number;
  photo_required: boolean;
  video_required: boolean;
  schedule: boolean[] | null;
  period_start: string | null;
  period_stop: string | null;
  type: TaskType;
  description?: string | null;
  every_month?: number[] | null;
};

export type ResponseType = {
  success: boolean;
  result: TaskResponseType[];
};
