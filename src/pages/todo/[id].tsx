import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil';
import todoState from '@/atoms/todoState';

const Content = () => {
  const router = useRouter();
  const index = Number(router.query.id) - 1;
  const todoList = useRecoilValue(todoState);
  const todo = todoList[index];
  console.log(todo)

  return (
    <>
      <p>{todo.title}</p>
      {todo.content && <p>{todo.content}</p>}
    </>
  );
}

export default Content;
