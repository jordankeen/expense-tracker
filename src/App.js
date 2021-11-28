import {
   Route,
   BrowserRouter as Router,
   Routes,
} from "react-router-dom";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";


function App() {
  return (
   <Router>
      <Header />
      <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/add-expense" element={<AddExpense/>} />
      </Routes>
      {/* <div>Footer</div> */}
   </Router>
  );
}

export default App;
