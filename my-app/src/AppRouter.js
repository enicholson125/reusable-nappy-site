import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages';
import Kits from './pages/kits';
import About from './pages/about';
import WashingAdvice from './pages/washing-advice';

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={
                    <Home />
                } />

                <Route path="/about" element={
                    <About />
                } />

                <Route path="/kits" element={
                    <Kits />
                } />

                <Route path="/washing-advice" element={
                    <WashingAdvice />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;