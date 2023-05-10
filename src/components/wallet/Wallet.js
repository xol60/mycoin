import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import BigManLogo from '../../assets/logo/big-spaceman.png';
import WalletAccessLogo from '../../assets/wallet-access.png';
import WalletLogo from '../../assets/wallet.png';
const Wallet = () => {
  return (
    <div className="w-full h-screen mt-3 flex flex-col items-center ">
      <section className="flex w-1/2 justify-between items-center mb-3">
        <div className="flex flex-col w-1/3">
          <div className="text-green-800 font-bold text-4xl mb-3">PrimeWalker Coin</div>
          <p className="text-gray-800 text-base">
            PrimeWalkerCoin Wallet (our friends call us PWW) is a free, client-side interface helping you interact with the Ethereum blockchain. Our
            easy-to-use, open-source platform allows you to generate wallets, interact with smart contracts, and so much more.
          </p>
        </div>
        <img className="w-2/3" src={BigManLogo} alt="big man" />
      </section>
      <section className="flex justify-center items-center">
        <div
          className="bg-blue-500 w-1/4 h-64 grid grid-cols-3 gap-2 p-10 rounded mr-5 cursor-pointer transition ease-in-out transform hover:-translate-y-2"
        >
          <div className="flex items-center">
            <img className="object-contain w-32 h-32" src={WalletLogo} alt="wallet" />
          </div>
          <div className="col-span-2 flex flex-col justify-between items-start">
            <p className="text-white font-bold text-2xl">Create A New Wallet</p>
            <p className="text-white font-normal text-sm">
              Generate your own unique Ethereum wallet. Receive a public address (0x...) and choose a method for access and recovery.
            </p>
            <div className="flex text-white font-bold text-lg justify-start items-center">
              <p className="mr-2">Get started</p> <AiOutlineArrowRight />
            </div>
          </div>
        </div>
        <div
          className="bg-green-500 w-1/4 h-64 grid grid-cols-3 gap-4 p-10 rounded cursor-pointer transition ease-in-out transform hover:-translate-y-2"
        >
          <div className="flex items-center">
            <img className="object-contain w-32 h-32" src={WalletAccessLogo} alt="wallet" />
          </div>
          <div className="col-span-2 flex flex-col justify-between items-start">
            <p className="text-white font-bold text-2xl">Access My Wallet</p>
            <p className="text-white font-normal text-sm">Connect to the blockchain using the wallet of your choice.</p>
            <div className="flex text-white font-bold text-lg justify-start items-center">
              <p className="mr-2">Get started</p> <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallet;