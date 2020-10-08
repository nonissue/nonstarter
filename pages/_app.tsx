import type { NextComponentType, NextPageContext } from 'next';
import type { NextRouter } from 'next/router';

import { Chakra } from '../Chakra';

export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
  cookies?: string;
}

export default function App({ Component, pageProps, cookies }: AppRenderProps) {
  return (
    <Chakra cookies={cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}
