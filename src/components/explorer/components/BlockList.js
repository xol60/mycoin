import React from 'react';
const BlockItem = () => {
  return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="">
            <p class="text-gray-900 whitespace-no-wrap">111</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">2011-11-11</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">3</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
          <span class="relative">2</span>
        </span>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-0">
        <p class="text-gray-900 whitespace-no-wrap truncate">aaaaaaa</p>
      </td>
    </tr>
  );
};

const BlockList = () => {
  return (
    <div class="container w-full">
      <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 h-96 overflow-x-auto overflow-y-scroll">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Block#
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Created at
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Transaction length
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    nonce
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    hash
                  </th>
                </tr>
              </thead>
              <tbody>
                <BlockItem />
                <BlockItem />
                <BlockItem />
                <BlockItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockList;
