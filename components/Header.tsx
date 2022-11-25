import { useEthers } from '@usedapp/core'
import Image from 'next/image'
import ChessImg from '../assets/images/chess.svg'
const Header = () => {
    const { account, deactivate } = useEthers()

    return (
        <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl uppercase flex items-center">
                <p>Chess</p>
                <Image width={30} src={ChessImg} alt="" style={{ marginBottom: '10px' }} className="mx-1" />
                <p>Games</p>
            </h2>
            {account && (
                <div className="">
                    <div onClick={() => deactivate()} className="text-sm font-semibold cursor-pointer">{account.substring(0, 5)}...{account.substring(37, 42)}</div>
                    <div></div>
                </div>
            )}
        </div>

    )
}

export default Header