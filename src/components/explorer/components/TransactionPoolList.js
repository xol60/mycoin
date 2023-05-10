import React from 'react';
const TxPoolItem = () => {
  return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="">
            <p class="text-gray-900 whitespace-no-wrap">1</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">111</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="relative truncate w-64">111</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
        <p class="text-gray-900 whitespace-no-wrap w-64 truncate">11111</p>
      </td>
    </tr>
  );
};

const TransactionPoolList = () => {
  return (
    <div class="container w-full">
      <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 h-full overflow-x-auto overflow-y-scroll">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Transaction Id#
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Amount
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal ">
                    From
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    To
                  </th>
                </tr>
              </thead>
              <tbody>
                <TxPoolItem />
                <TxPoolItem />
                <TxPoolItem />
                <TxPoolItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPoolList;
