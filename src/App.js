import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/core/NotFound';
import Header from './components/core/Header';
import Wallet from './components/wallet/Wallet';
import Explorer from './components/explorer/Explorer';
import BlockExplorer from './components/explorer/BlockExplorer';
import TransactionExplorer from './components/explorer/TransactionExplorer'
import TransactionPool from './components/explorer/TransactionPool'
import Interface from './components/wallet/Interface/Interface';
import DashBoard from './components/wallet/Interface/DashBoard';
import SendTransaction from './components/wallet/Interface/SendTransaction'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/intro" element={<Wallet />} />
        <Route path="/explorer"  >
          <Route index element={<Explorer />} />
          <Route path="block" element={<BlockExplorer />} />
          <Route path="transaction" element={<TransactionExplorer />} />
          <Route path="transaction-pool" element={<TransactionPool />} />
        </Route>
        <Route path="/wallet"  >
          <Route index element={<Interface />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="send-transaction" element={<SendTransaction />} />
        </Route>
        <Route path="*" component={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

