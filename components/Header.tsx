import { useEthers } from '@usedapp/core'

const Header = () => {
    const { activateBrowserWallet, account, deactivate } = useEthers()

    return (
        <div className="flex items-center justify-between">
            <h2 className="font-bold text-lg uppercase">Chess Games</h2>
            {account && (
                <div className="">
                    <div onClick={() => deactivate()} className="text-sm font-semibold cursor-pointer">{account.substring(0,5)}...{account.substring(37,42)}</div>
                    <div></div>
                </div>
            )}
        </div>

    )
}

export default Header