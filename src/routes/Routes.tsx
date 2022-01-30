import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from "../layouts/Main";
import DummyA from "../pages/DummyA";
import DummyB from "../pages/DummyB";
import Page404 from "../pages/404Page";

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */
const MyRoutes = () => (
    <Routes>
        <Route path="/" element={<Main/>}>
            <Route path="dummya" element={<DummyA/>}/>
            <Route path="dummyb" element={<DummyB/>}/>
        </Route>
        <Route path="*" element={<Page404/>}/>
    </Routes>
);

export default MyRoutes;