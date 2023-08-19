import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Register } from '../../pages/register';

function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/register" exact element={<Register />} />
            </Routes>
        </Router>
    )
}

export default  AppRouter