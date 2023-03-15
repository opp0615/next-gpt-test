import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import RootLayout from '../src/layout';
import { Provider } from 'react-redux';
import store from '../src/store';
import { Analytics } from '@vercel/analytics/react';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} />
          <Analytics />
        </RootLayout>
      </Provider>
    </QueryClientProvider>
  );
}
