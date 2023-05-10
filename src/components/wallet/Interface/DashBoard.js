import React from 'react';
import Transaction from '../../core/Transaction';

const DashBoard = () => {
  return (
    <div className="w-full h-full grid grid-cols-4 mt-5">
      <div className="col-span-3">
        <div className="text-2xl font-bold my-2 text-indigo-800">Your Unspent Transaction currently</div>
        <div className="flex flex-col h-96 overflow-y-scroll">
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
        </div>
      </div>
      <div className="col-span-1 flex items-center flex-col">
        <div className="text-2xl font-bold my-2 text-indigo-800 mb-10">Mining block</div>
        <button
          type="button"
          class="py-2 px-4 w-1/2 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >

          Mine
        </button>
      </div>
    </div>
  );
};

export default DashBoard;
