import React from 'react';
import { Link } from 'react-router-dom';
import Address from '../../core/Address';
import Balance from '../../core/Balance';
import NetWork from '../../core/NetWork';
const Interface = () => {

  return (
    <div className="w-full h-screen grid grid-cols-6 gap-3 bg-gray-200">
      <div className="flex flex-col col-span-1 bg-white mt-3">
        <Link
          to={{
            pathname: '/wallet/dashboard',
          }}
          className="text-xl font-bold text-blue-700 my-5 hover:bg-gray-200 text-center cursor-pointer"
        >
          DashBoard
        </Link>
        <Link
          to={{
            pathname: '/wallet/send-transaction',
          }}
          className="text-xl font-bold text-red-700 my-5 hover:bg-gray-200 text-center cursor-pointer"
        >
          SendTransaction
        </Link>
        <Link to="/intro" className="text-xl font-bold text-gray-700 my-5 hover:bg-gray-200 text-center cursor-pointer">
          Logout
        </Link>
      </div>
      <div className="grid grid-rows-5 col-span-5 gap-3 bg-white mt-3 p-5">
        <div className="row-span-1 grid grid-cols-3 gap-3">
          <Address />
          <Balance />
          <NetWork />
        </div>
      </div>
    </div>
  );
};

export default Interface;
