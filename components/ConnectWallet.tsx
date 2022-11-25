import { useEthers } from '@usedapp/core'

import MetamaskImg from "../assets/images/metamask.svg"
import ConnectWalletImg from "../assets/images/walletconnect.svg"
const ConnectWallet = () => {
    const { activateBrowserWallet } = useEthers()

    return (
        <div className="flex flex-col items-center justifiy-center mt-32">
            <h2 className="font-bold lg:text-5xl text-3xl w-full text-center">Welcome to <br className="sm:hidden inline" /> Chess Games</h2>
            <p className="text-[#717171] text-base font-normal mt-1.5 text-center">
                Sign in with your wallet to be able to authenticate and play games
            </p>
            <button onClick={() => activateBrowserWallet()} type="button" className="lg:w-96 w-full outline-none flex  items-center justify-start mt-16 bg-[#438FFE] rounded-[30px] lg:px-10 px-5 py-4">
                <img width="26" src={MetamaskImg.src} alt="metamask" />
                <p className="text-white tracking-wide lg:text-lg text-base font-semibold flex-1 text-center">
                    Sign in with metamask
                </p>
            </button>

            <button type="button" className="lg:w-96 w-full outline-none flex  items-center justify-start mt-5 rounded-[30px] border border-[#848484] lg:px-10 px-5 py-4">
                <img width="26" src={ConnectWalletImg.src} alt="connectwallet" />
                <p className="text-black tracking-wide lg:text-lg text-base font-semibold flex-1 text-center">
                    Sign in with Coinbase Wallet
                </p>
            </button>

            <p className="font-semibold text-lg text-black mt-9 underline underline-offset-4 cursor-pointer">Show more options</p>
        </div>

    )
}

export default ConnectWallet