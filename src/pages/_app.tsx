import 'mapbox-gl/dist/mapbox-gl.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme, toastOptions } from '@/utils/chakra';
import { configs } from '@/utils/swr';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: toastOptions }}
    >
      <SWRConfig value={configs}>
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  );
}
