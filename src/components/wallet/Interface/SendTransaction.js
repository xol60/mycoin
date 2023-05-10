import React from 'react';

const SendTransaction = () => {


  return (
    <div className="mt-5 p-10">
      <div className="text-2xl font-bold my-2 text-indigo-800">Send Transaction True</div>

      <div className="p-5">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
            To address
          </label>
          <input
            class="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            value={1111111}
            placeholder="Address"
          />
        </div>
        <div class="w-full">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            Amount
          </label>
          <input
            class="appearance-none block w-full shadow text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="amount"
            type="number"
            value={111111}
            placeholder="10"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <button
            type="button"
            class="py-2 px-4 w-1/5 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendTransaction;
