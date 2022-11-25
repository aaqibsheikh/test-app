import { useEthers } from '@usedapp/core'
import Header from '../components/Header'
import ConnectWallet from '../components/ConnectWallet'

export default function Home() {
  const { activateBrowserWallet, account } = useEthers()

  return (
    <div className="lg:px-24 px-8 lg:pt-14 pt-10 font-gilroy">
      <Header />
      <ConnectWallet />
    </div>
  )
}

