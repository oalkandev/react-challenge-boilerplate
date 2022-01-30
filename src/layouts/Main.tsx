import React from 'react';
import {Link, Outlet } from 'react-router-dom';

function Main() {
    return (
        <div className="App">
            <h1>Main Layout</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dummya">Dummy A</Link>
                    </li>
                    <li>
                        <Link to="/dummyb">Dummy B</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Main;
