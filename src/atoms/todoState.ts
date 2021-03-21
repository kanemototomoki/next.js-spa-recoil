import { atom } from 'recoil';
import { Todo } from '@/types/Todo';

const TodoState = atom<Todo[]>({
  key: 'todoState',
  default: [
    {
      id: 1,
      title: '朝ごはんを作る',
      content: '卵焼きと味噌汁'
    },
    {
      id: 2,
      title: '昼ごはんを作る',
      content: '焼きそば',
    },
    {
      id: 3,
      title: '夜ごはんを作る',
    },
  ]
});

export default TodoState;
