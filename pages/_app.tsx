import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Mainnet, DAppProvider, Config } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet')
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return <DAppProvider config={config}>
    <Component {...pageProps} />
  </DAppProvider>
}
