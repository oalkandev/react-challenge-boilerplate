import React from 'react';
import './App.css';
import {useTranslation} from "react-i18next";
import MyRoutes from "./routes/Routes";

function App() {
    const {t} = useTranslation();
    return (
        <>

            <div className="App">
                <header className="App-header">
                    <h1>This is APP</h1>
                    <p>{t('title')}</p>
                </header>
                <MyRoutes/>
            </div>

        </>
    );
}

export default App;
