import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import './styles/main.css'
import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer';

import AppRouter from './components/AppRouter';
import ScrollToTop from './utils/ScrollToTop';


function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop />
            <Navbar />
            <AppRouter />
            <Footer />
        </Router>
    </div>
  );
}

export default App;
