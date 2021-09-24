import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TPage from "./pages/TPage";
import AboutPage from "./pages/AboutPage";


const App: React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={TPage}/>
                    <Route exact path='/about' component={AboutPage}/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    )
}

export default App;
