import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil';
import todoState from '@/atoms/todoState';

const Content = () => {
  const router = useRouter();
  console.log(router)
  const todoList = useRecoilValue(todoState);
  const todo = todoList[0];

  return (
    <>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
    </>
  );
}

export default Content;
