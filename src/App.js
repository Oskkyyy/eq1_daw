import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Layout from "./components/Layout";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Layout>
  </Router>
  );
}

export default App;
