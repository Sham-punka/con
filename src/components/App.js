import React from "react";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
    const buttonName = "Some button updated2";
    return (
        <React.Fragment>
            <Header buttonName ={buttonName } />
            <Main />
        </React.Fragment>
    );
}

export default App;