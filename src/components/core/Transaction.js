import React from 'react';

const Transaction = () => {

  return (
    <div className="bg-gray-200 my-4 p-4">
      <div className="grid grid-rows-4 gap-3 h-48">
        <div className="grid grid-cols-7">
          <p className="text-lg font-bold w-24 col-span-1">Index: </p>
          <span className="text-base col-span-6">1111</span>
        </div>
        <div className="grid grid-cols-7">
          <p className="text-lg font-bold w-24 col-span-1">Output ID: </p>
          <span className="text-base col-span-6">111</span>
        </div>
        <div className="grid grid-cols-7">
          <p className="text-lg font-bold w-24 col-span-1">Amount: </p>
          <span className="text-base  col-span-6">11111 PWC</span>
        </div>
        <div className="grid grid-cols-7">
          <p className="text-lg font-bold w-24 col-span-1">Address: </p>
          <span className="text-base col-span-6 break-words">111111</span>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
