import React from 'react';
import Difficulty from '../core/Difficulty';
import LastBlock from '../core/LastBlock';
import Nonce from '../core/Nonce';
import BlockList from './components/BlockList';

const BlockExplorer = () => {

  return (
    <div className="grid grid-rows-5 gap-2 h-screen">
      <div className="row-span-1 grid grid-cols-3 gap-2">
        <LastBlock />
        <Nonce />
        <Difficulty />
      </div>
      <div className="row-span-4 p-5">
        <BlockList />
      </div>
    </div>
  );
};

export default BlockExplorer;
