import {
   Route,
   BrowserRouter as Router,
   Routes,
} from "react-router-dom";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";
import Expenses from "./pages/Expenses";
import SummaryPage from "./pages/SummaryPage";
// import StartPage from "./pages/StartPage";
import './styles/App.scss';

function App() {
  return (
   <Router basename={process.env.PUBLIC_URL}>
      <Routes>
         <Route path="/" exact element={<Expenses />} />
         <Route path="/add-expense" element={<AddExpense/>} />
         <Route path="/edit-expense/:id" element={<EditExpense/>} />
         <Route path="/summary" element={<SummaryPage/>} />
      </Routes>
   </Router>
  );
}

export default App;
