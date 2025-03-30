import RootLayout from '@/components/layouts/layout';
import '../styles/globals.css'; 
import '../styles/style.css' 
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    );
  }

export default MyApp;