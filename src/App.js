import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransAction from './components/AddTransAction';
import { GlobalProvider } from './context/GlobalState';
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";


if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransAction />
      </div>
      <ToastContainer />
    </GlobalProvider>
  );
}

export default App;
