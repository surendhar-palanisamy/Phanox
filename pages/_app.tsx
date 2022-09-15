import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <ChakraProvider>
      <Toaster />
      <Layout childcomponent={<Component {...pageProps} />} />
    </ChakraProvider>
  </Provider>
}

export default MyApp
