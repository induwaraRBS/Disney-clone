import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './components/Login/Login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>

        <Route path='/' element={<Login/>}></Route>
        </Routes>
      </Router>
  

    </div>
  );
}

export default App;
