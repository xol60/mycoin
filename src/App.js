import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './pages/core/Header'
import Home from './pages/home/Home'
import Dashboard from './pages/wallet/Dashboard'
import SendTransaction from './pages/wallet/SendTransaction';
import Block from './pages/explorer/Block'
import Transaction from './pages/explorer/Transaction'
import TransactionPool from './pages/explorer/TransactionPool'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/intro" element={<Home />} />
        <Route path="/wallet"  >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="send-transaction" element={<SendTransaction />} />
        </Route>
        <Route path="/explorer"  >
          <Route path="block" element={<Block />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="transaction-pool" element={<TransactionPool />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
