import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import './styles/main.css'
import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contacts from './pages/contacts/Contacts';
import Project from './pages/project/Project';


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/project' element={<Project/>} />
                <Route path='/contacts' element={<Contacts/>} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
