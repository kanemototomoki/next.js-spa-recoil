import Link from 'next/link';
import Layout from '@/components/Layout';
import { useRecoilValue } from 'recoil';
import todoState from '@/atoms/todoState';

const TodoPage = () => {
  const todoList = useRecoilValue(todoState);
  return (
    <Layout title="Todo">
      <h1>TodoList</h1>
      <ul>
      {todoList.map((v) => {
        return (
          <li key={v.id}>
            <Link href={`/todo/${v.id}`}>
              <a>
                title: {v.title}
              </a>
            </Link>
            <br></br>
          </li>
        );
      })}
      </ul>
    </Layout>
  )
}

export default TodoPage;
