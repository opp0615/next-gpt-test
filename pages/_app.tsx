import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import RootLayout from '../src/layout';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </QueryClientProvider>
  );
}
