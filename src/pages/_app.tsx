import { AppProps } from 'next/app';
import { RecoilRoot, useRecoilValue } from 'recoil';
import todoState from '@/atoms/todoState';
import { useEffect } from 'react';

const AppInit = () => {
  const todoList = useRecoilValue(todoState);

  useEffect(() => {

  })
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp;
