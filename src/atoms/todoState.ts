import { atom } from 'recoil';
import { Todo } from '@/types/Todo';

const TodoState = atom<Todo[]>({
  key: 'todoState',
  default: [
    {
      title: '朝ごはんを作る',
      content: '卵焼きと味噌汁'
    },
    {
      title: '昼ごはんを作る',
      content: '焼きそば',
    },
    {
      title: '夜ごはんを作る',
    },
  ]
});

export default TodoState;
