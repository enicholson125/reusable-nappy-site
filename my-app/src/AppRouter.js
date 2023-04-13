import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages';
import KidsPage from './pages/kids';
import About from './pages/about';
import WashingAdvice from './pages/washing-advice';

function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <Home />
                } />

                <Route path="/about" element={
                    <About />
                } />

                <Route path="/kids" element={
                    <KidsPage />
                } />

                <Route path="/washing-advice" element={
                    <WashingAdvice />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;