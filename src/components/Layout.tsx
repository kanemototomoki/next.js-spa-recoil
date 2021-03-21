import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { RecoilRoot } from 'recoil';

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props): JSX.Element => (
  <div>
    <RecoilRoot>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          {' | '}
          <Link href="/about">
            <a>About</a>
          </Link>
          {' | '}
          <Link href="/todo">
            <a>Todo</a>
          </Link>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </RecoilRoot>
  </div>
)

export default Layout
